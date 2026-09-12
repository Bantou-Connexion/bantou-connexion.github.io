import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { contact } from '../../data/site';

/*
 * 09 — CONTACT (planche 10 du PDF).
 *
 * Colonne de coordonnées en cartes sombres à liseré orange, formulaire à
 * droite, réseaux sociaux et bloc de clôture. Le formulaire poste vers
 * `contact.form.endpoint` s'il est renseigné, sinon il bascule sur un envoi
 * par client mail : le site reste fonctionnel dès le déploiement.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY_FORM = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Merci d’indiquer votre nom.';
  if (!values.email.trim()) errors.email = 'Merci d’indiquer votre email.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Cet email ne semble pas valide.';
  if (!values.message.trim()) errors.message = 'Merci de décrire votre projet.';
  return errors;
}

export default function Contact({ selectedOffer }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const messageRef = useRef(null);

  /*
   * « Choisir cette offre » pré-remplit le message et donne le focus au champ,
   * pour que l'utilisateur arrive dans le tunnel avec son contexte déjà saisi.
   */
  useEffect(() => {
    if (!selectedOffer) return;

    setValues((current) => ({
      ...current,
      message: `Bonjour, je suis intéressé·e par l'offre « ${selectedOffer.title} » (${selectedOffer.price}${
        selectedOffer.priceUnit ? ` ${selectedOffer.priceUnit}` : ''
      }).\n\n`,
    }));
    setStatus('idle');
    messageRef.current?.focus({ preventScroll: true });
  }, [selectedOffer]);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const { endpoint } = contact.form;

    // Sans endpoint configuré, on ouvre le client mail avec le message pré-rempli.
    if (!endpoint) {
      const subject = encodeURIComponent(`Demande de contact — ${values.name.trim()}`);
      const body = encodeURIComponent(`${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`);
      window.location.href = `mailto:contact@bantouconnexion.com?subject=${subject}&body=${body}`;
      setStatus('sent');
      setValues(EMPTY_FORM);
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('sent');
      setValues(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="content-auto relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={contact.num}
            eyebrow={contact.eyebrow}
            titleLead={contact.titleLead}
            titleHighlight={contact.titleHighlight}
            intro={contact.intro}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <Media
              media={media.contactPortrait}
              className="clip-diag-tl aspect-[5/4] w-full shadow-card"
              overlay={
                <div
                  className="absolute inset-0 bg-[linear-gradient(215deg,rgba(10,22,40,0.1)_35%,rgba(10,22,40,0.85)_100%)]"
                  aria-hidden="true"
                />
              }
            />

            <ul className="absolute bottom-6 right-6 space-y-1 text-right">
              {contact.verbs.map((verb) => (
                <li
                  key={verb}
                  className="font-display text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-white/80"
                >
                  {verb}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* ------------------------------------------------- Coordonnées */}
          <Reveal variant="left" as="ul" className="grid auto-rows-fr gap-px overflow-hidden bg-navy-600">
            {contact.details.map((detail) => {
              const Wrapper = detail.href ? 'a' : 'div';
              const wrapperProps = detail.href
                ? {
                    href: detail.href,
                    ...(detail.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {}),
                  }
                : {};

              return (
                <li key={detail.label} className="flex bg-navy-900">
                  <Wrapper
                    {...wrapperProps}
                    className={`flex w-full items-center gap-5 p-6 transition-colors ${detail.href ? 'hover:bg-navy-800' : ''}`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Icon name={detail.icon} className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-white/55">{detail.label}</span>
                      <span className="mt-1 block whitespace-pre-line break-words font-display text-[0.95rem] font-bold text-white">
                        {detail.value}
                      </span>
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </Reveal>

          {/* --------------------------------------------------- Formulaire */}
          <Reveal variant="right" delay={90}>
            <form
              id="tunnel-vente"
              onSubmit={handleSubmit}
              noValidate
              className="bg-navy-900 p-7 shadow-card sm:p-9"
              aria-describedby="form-statut"
            >
              <h3 className="text-xl text-white sm:text-2xl">{contact.form.title}</h3>
              <span className="mt-3 block h-[3px] w-12 bg-orange-500" aria-hidden="true" />
              <p className="mt-4 text-sm text-white/65">{contact.form.subtitle}</p>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="champ-nom" className="mb-2 block text-sm font-semibold text-white/85">
                    {contact.form.fields.name.label}
                  </label>
                  <input
                    id="champ-nom"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={handleChange('name')}
                    placeholder={contact.form.fields.name.placeholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'erreur-nom' : undefined}
                    className={`field ${errors.name ? 'border-orange-400' : ''}`}
                  />
                  {errors.name ? (
                    <p id="erreur-nom" className="mt-1.5 text-sm text-orange-300">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="champ-email" className="mb-2 block text-sm font-semibold text-white/85">
                    {contact.form.fields.email.label}
                  </label>
                  <input
                    id="champ-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={handleChange('email')}
                    placeholder={contact.form.fields.email.placeholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'erreur-email' : undefined}
                    className={`field ${errors.email ? 'border-orange-400' : ''}`}
                  />
                  {errors.email ? (
                    <p id="erreur-email" className="mt-1.5 text-sm text-orange-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="champ-message" className="mb-2 block text-sm font-semibold text-white/85">
                    {contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="champ-message"
                    name="message"
                    rows={5}
                    required
                    ref={messageRef}
                    value={values.message}
                    onChange={handleChange('message')}
                    placeholder={contact.form.fields.message.placeholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'erreur-message' : undefined}
                    className={`field resize-y ${errors.message ? 'border-orange-400' : ''}`}
                  />
                  {errors.message ? (
                    <p id="erreur-message" className="mt-1.5 text-sm text-orange-300">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-sharp border-2 border-orange-500 bg-orange-500 px-6 py-3.5 font-display text-[0.82rem] font-extrabold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange disabled:pointer-events-none disabled:opacity-60 motion-reduce:hover:translate-y-0"
                >
                  {status === 'sending' ? 'Envoi en cours…' : contact.form.submitLabel}
                  <Icon
                    name="arrow"
                    strokeWidth={2.2}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </button>

                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-sharp border-2 border-white/55 px-6 py-3.5 font-display text-[0.82rem] font-extrabold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 motion-reduce:hover:translate-y-0"
                >
                  <Icon name="clock" strokeWidth={2} className="h-4 w-4" />
                  {contact.form.calendlyLabel}
                </a>
              </div>

              {/* Retour d'état, annoncé aux lecteurs d'écran */}
              <p
                id="form-statut"
                role="status"
                aria-live="polite"
                className={`mt-5 text-sm ${status === 'error' ? 'text-orange-300' : 'text-white/75'}`}
              >
                {status === 'sent' ? contact.form.successMessage : null}
                {status === 'error'
                  ? "L'envoi a échoué. Merci de réessayer ou de nous écrire directement à contact@bantouconnexion.com."
                  : null}
              </p>
            </form>
          </Reveal>
        </div>

        {/* --------------------------------- Réseaux sociaux & bloc de clôture */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal className="flex flex-wrap items-center justify-between gap-5 bg-white p-6 shadow-card">
            <div>
              <p className="font-display text-base font-extrabold text-navy-900">Suivez-nous</p>
              <p className="mt-0.5 text-sm text-ink-muted">sur nos réseaux sociaux</p>
              <span className="mt-2.5 block h-[3px] w-8 bg-orange-500" aria-hidden="true" />
            </div>

            <ul className="flex gap-3">
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white transition-colors hover:bg-orange-500"
                  >
                    <Icon name={social.icon} className="h-5 w-5" strokeWidth={1.8} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col gap-5 border-l-4 border-orange-500 bg-white p-6 shadow-card sm:flex-row sm:items-center"
          >
            <Icon name="handshake" className="h-12 w-12 shrink-0 text-orange-500" strokeWidth={1.4} />
            <div>
              <h3 className="text-base">{contact.closing.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{contact.closing.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
