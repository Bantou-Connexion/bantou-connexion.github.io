import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import ScriptMark from '../ui/ScriptMark';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { partners } from '../../data/site';

/*
 * 07 — PARTENAIRES & ÉCOSYSTÈME (planche 8 du PDF).
 *
 * Bandeau de logos partenaires (rendus en pastilles typographiques, à
 * remplacer par les logotypes officiels), témoignage sur fond sombre et
 * appel à devenir partenaire.
 */
export default function Partners() {
  return (
    <section id="partenaires" className="content-auto relative overflow-hidden bg-cream-dim py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={partners.num}
            eyebrow={partners.eyebrow}
            titleLead={partners.titleLead}
            titleHighlight={partners.titleHighlight}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <Media media={media.partnersCompass} className="clip-diag-tl aspect-[4/3] w-full shadow-card" />
            <ScriptMark className="absolute right-4 top-5" tone="light" />
          </Reveal>
        </div>

        {/* ------------------------------------------------------ Témoignage */}
        <Reveal className="mt-14 grid overflow-hidden bg-navy-900 lg:grid-cols-[0.3fr_1.05fr_0.55fr]">
          <Media
            media={media.partnersTestimonial}
            className="h-56 w-full lg:h-full"
            imgClassName="h-full w-full object-cover grayscale contrast-[1.08]"
            overlay={<div className="absolute inset-0 bg-navy-900/25" aria-hidden="true" />}
          />

          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="block h-[3px] w-8 bg-orange-500" aria-hidden="true" />
              <p className="font-display text-eyebrow font-extrabold uppercase text-white/55">{partners.eyebrowTrust}</p>
            </div>

            <blockquote className="mt-6">
              <p className="text-lg leading-snug text-white sm:text-xl">
                « {partners.testimonial.quoteLead}
                <span className="text-orange-500">{partners.testimonial.quoteHighlight}</span> »
              </p>
              <footer className="mt-7">
                <p className="font-display text-sm font-extrabold text-white">{partners.testimonial.author}</p>
                <p className="mt-0.5 text-sm text-white/60">{partners.testimonial.role}</p>
              </footer>
            </blockquote>
          </div>

          <ul className="divide-y divide-navy-600 border-t border-navy-600 lg:border-l lg:border-t-0">
            {partners.values.map((value) => (
              <li key={value.label} className="flex items-center gap-4 px-7 py-5">
                <Icon name={value.icon} className="h-7 w-7 shrink-0 text-orange-500" strokeWidth={1.5} />
                <span className="text-sm text-white/85">{value.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------------------------------------------------- Bandeau logos */}
        <Reveal delay={80} className="mt-6 flex flex-col gap-6 bg-white p-7 shadow-card lg:flex-row lg:items-center lg:gap-10">
          <div className="shrink-0">
            <p className="font-display text-eyebrow font-extrabold uppercase leading-relaxed text-navy-900/60">
              Ils nous font
              <br />
              confiance
            </p>
            <span className="mt-2 block h-[3px] w-8 bg-orange-500" aria-hidden="true" />
          </div>

          <ul className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-4 lg:divide-x lg:divide-cream-deep">
            {partners.logos.map((logo, index) => (
              <li
                key={logo}
                className={`font-display text-sm font-extrabold uppercase tracking-wide text-navy-900/70 transition-colors hover:text-orange-500 ${
                  index > 0 ? 'lg:pl-8' : ''
                }`}
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ------------------------------------------- Appel à devenir partenaire */}
        <Reveal
          delay={100}
          className="mt-6 flex flex-col gap-6 border-l-4 border-orange-500 bg-navy-900 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="min-w-0">
            <h3 className="text-xl text-white sm:text-2xl">{partners.cta.title}</h3>
            <p className="mt-2.5 max-w-2xl leading-relaxed text-white/70">{partners.cta.text}</p>
          </div>

          <Button href={partners.cta.href} variant="orange" className="shrink-0 self-start lg:self-auto">
            {partners.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
