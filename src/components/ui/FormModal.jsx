import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

/*
 * Modale de formulaire pilotée par une configuration (voir `institutionalForm` et
 * `registrationForm` dans src/data/site.js) : colonne sombre à gauche, formulaire
 * sur fond clair à droite. Élément natif <dialog> : focus piégé, fermeture à Échap.
 *
 * Types de champ : texte (défaut), email, tel, `multiline`, `radio` et `checkboxes`.
 * Sans `endpoint`, la demande s'ouvre dans le client mail du visiteur (mailto:).
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialValues = (fields) =>
  Object.fromEntries(
    fields.map((field) => [field.name, field.type === 'checkboxes' ? [] : (field.defaultValue ?? '')]),
  );

const isEmpty = (value) => (Array.isArray(value) ? value.length === 0 : !value.trim());

const formatValue = (value) => (Array.isArray(value) ? value.join(', ') : value.trim());

const inputClass =
  'w-full rounded-sharp border border-slate-300 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-ink-muted/70 ' +
  'focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40';

const labelClass = 'mb-2 block font-display text-xs font-extrabold uppercase tracking-[0.08em]';

function RequiredMark() {
  return (
    <span className="text-orange-text" aria-hidden="true">
      {' '}
      *
    </span>
  );
}

function ChoiceGroup({ field, id, value, error, onChange }) {
  const isRadio = field.type === 'radio';

  const toggle = (option) => {
    if (isRadio) onChange(option);
    else onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option]);
  };

  return (
    <fieldset aria-describedby={error ? `${id}-erreur` : undefined}>
      <legend className={labelClass}>
        {field.label}
        {field.required ? <RequiredMark /> : null}
      </legend>
      <div className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]">
        {field.options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-sharp border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-snug has-[:checked]:border-orange-500 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orange-500/40"
          >
            <input
              type={isRadio ? 'radio' : 'checkbox'}
              name={field.name}
              value={option}
              checked={isRadio ? value === option : value.includes(option)}
              onChange={() => toggle(option)}
              className="h-4 w-4 shrink-0 accent-orange-500"
            />
            {option}
          </label>
        ))}
      </div>
      {error ? (
        <p id={`${id}-erreur`} className="mt-1.5 text-sm font-semibold text-orange-text">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export default function FormModal({ open, onClose, copy }) {
  const dialogRef = useRef(null);
  const [values, setValues] = useState(() => initialValues(copy.fields));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const titleId = `${copy.id}-titre`;
  const statusId = `${copy.id}-statut`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();

    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const setValue = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => (current[name] ? { ...current, [name]: undefined } : current));
  };

  const validate = () => {
    const found = {};
    copy.fields.forEach((field) => {
      const value = values[field.name];
      if (field.required && isEmpty(value)) found[field.name] = copy.requiredError;
      else if (field.type === 'email' && value && !EMAIL_PATTERN.test(value.trim())) found[field.name] = copy.emailError;
    });
    return found;
  };

  const reset = () => setValues(initialValues(copy.fields));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!copy.endpoint) {
      const lines = copy.fields.map((field) => `${field.label} : ${formatValue(values[field.name]) || '—'}`);
      const subject = encodeURIComponent(`${copy.mailSubject} — ${formatValue(values[copy.subjectField])}`);
      window.location.href = `mailto:${copy.mailTo}?subject=${subject}&body=${encodeURIComponent(lines.join('\n\n'))}`;
      setStatus('sent');
      reset();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(copy.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[94vh] w-[calc(100%-1.5rem)] max-w-6xl overflow-y-auto bg-navy-900 p-0 text-white shadow-card-hover backdrop:bg-navy-950/80 backdrop:backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={copy.closeLabel}
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-sharp bg-navy-900 text-white transition-colors hover:bg-orange-500 lg:bg-navy-800"
      >
        <Icon name="close" className="h-5 w-5" strokeWidth={2.2} />
      </button>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        {/* ----------------------------------------------------- Colonne sombre */}
        <div className="flex flex-col justify-between gap-8 pt-14 lg:pt-12">
          <div className="px-6 sm:px-10">
            <div className="flex items-center gap-4">
              <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
              <span className="font-display text-eyebrow font-extrabold uppercase text-white/80">{copy.eyebrow}</span>
            </div>

            <h2 id={titleId} className="mt-5 text-display-lg text-white">
              {copy.titleLead}
              <span className="text-orange-500">{copy.titleHighlight}</span>.
            </h2>

            <p className="mt-6 max-w-sm leading-relaxed text-white/85">{copy.intro}</p>
          </div>
        </div>

        {/* ------------------------------------------------------- Formulaire */}
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={statusId}
          className="m-3 bg-slate-50 p-6 text-navy-900 sm:m-5 sm:p-9 lg:m-6"
        >
          <div className="flex items-center gap-4">
            <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
            <span className="font-display text-eyebrow font-extrabold uppercase text-navy-900/70">{copy.formEyebrow}</span>
          </div>
          <h3 className="mt-3 text-2xl sm:text-3xl">{copy.formTitle}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">{copy.formIntro}</p>

          <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
            {copy.fields.map((field) => {
              const id = `${copy.id}-${field.name}`;
              const error = errors[field.name];
              const wide = field.wide || field.type === 'checkboxes';
              const Tag = field.multiline ? 'textarea' : 'input';

              return (
                <div key={field.name} className={wide ? 'sm:col-span-2' : undefined}>
                  {field.type === 'radio' || field.type === 'checkboxes' ? (
                    <ChoiceGroup
                      field={field}
                      id={id}
                      value={values[field.name]}
                      error={error}
                      onChange={(value) => setValue(field.name, value)}
                    />
                  ) : (
                    <>
                      <label htmlFor={id} className={labelClass}>
                        {field.label}
                        {field.required ? <RequiredMark /> : null}
                      </label>
                      <Tag
                        id={id}
                        name={field.name}
                        {...(field.multiline ? { rows: field.required ? 4 : 3 } : { type: field.type ?? 'text' })}
                        autoComplete={field.autoComplete}
                        required={field.required}
                        value={values[field.name]}
                        onChange={(event) => setValue(field.name, event.target.value)}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${id}-erreur` : undefined}
                        className={`${inputClass} ${field.multiline ? 'resize-y' : ''} ${error ? 'border-orange-text' : ''}`}
                      />
                      {error ? (
                        <p id={`${id}-erreur`} className="mt-1.5 text-sm font-semibold text-orange-text">
                          {error}
                        </p>
                      ) : null}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-7 flex w-full items-center justify-center gap-3 rounded-sharp bg-[linear-gradient(90deg,#FF7A12_0%,#F5461B_100%)] px-6 py-4 font-display text-[0.9rem] font-extrabold uppercase tracking-wide text-white transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
          >
            {status === 'sending' ? copy.sendingLabel : copy.submitLabel}
            <Icon name="arrow" strokeWidth={2.2} className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
          </button>

          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className={`mt-4 text-center text-sm ${status === 'error' ? 'font-semibold text-orange-text' : 'text-ink-muted'}`}
          >
            {status === 'sent' ? copy.successMessage : null}
            {status === 'error' ? copy.errorMessage : null}
            {status === 'idle' || status === 'sending' ? copy.privacy : null}
          </p>
        </form>
      </div>
    </dialog>
  );
}
