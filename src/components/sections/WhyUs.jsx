import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import ScriptMark from '../ui/ScriptMark';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { why } from '../../data/site';

/*
 * 05 — POURQUOI NOUS CHOISIR (planches 6 et 8 du PDF).
 *
 * Section sombre : arguments en cartes sur fond marine, bandeau de témoignage
 * avec portrait monochrome et repères de confiance, puis les deux autres
 * témoignages du contenu source.
 */
export default function WhyUs() {
  const [featured, ...others] = why.testimonials;

  return (
    <section id="pourquoi" className="content-auto relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={why.num}
            eyebrow={why.eyebrow}
            titleLead={why.titleLead}
            titleHighlight={why.titleHighlight}
            intro={why.intro}
            tone="light"
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <Media media={media.whyHandshake} className="clip-diag-tl aspect-[4/3] w-full shadow-card-hover" />
            <ScriptMark className="absolute right-4 top-5" tone="light" />
          </Reveal>
        </div>

        {/* ------------------------------------------------------- Arguments */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {why.reasons.map((reason, index) => (
            <Reveal
              key={reason.title}
              as="li"
              delay={(index % 5) * 80}
              className="group border-t-2 border-orange-500 bg-navy-800 p-6 transition-colors duration-300 hover:bg-navy-700"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-sharp bg-orange-500 text-white">
                <Icon name={reason.icon} className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-base text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{reason.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ------------------------------------- Témoignage principal + confiance */}
      <div className="shell mt-14">
        <Reveal className="grid overflow-hidden bg-navy-800 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid sm:grid-cols-[1fr_auto] sm:items-stretch">
            <div className="order-2 p-7 sm:order-1 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="block h-[3px] w-8 bg-orange-500" aria-hidden="true" />
                <p className="font-display text-eyebrow font-extrabold uppercase text-white/55">{why.testimonialsEyebrow}</p>
              </div>

              <blockquote className="mt-6">
                <p className="text-lg leading-snug text-white sm:text-xl">« {featured.quote} »</p>
                <footer className="mt-7">
                  <p className="font-display text-sm font-extrabold text-white">{featured.author}</p>
                  <p className="mt-0.5 text-sm text-white/60">{featured.role}</p>
                </footer>
              </blockquote>
            </div>

            <Media
              media={media.whyTestimonial}
              className="order-1 h-56 w-full sm:order-2 sm:h-full sm:w-56"
              imgClassName="h-full w-full object-cover grayscale contrast-[1.08]"
              overlay={<div className="absolute inset-0 bg-navy-900/25" aria-hidden="true" />}
            />
          </div>

          <ul className="divide-y divide-navy-600 border-t border-navy-600 lg:border-l lg:border-t-0">
            {why.trustBadges.map((badge) => (
              <li key={badge.label} className="flex items-center gap-4 px-7 py-5">
                <Icon name={badge.icon} className="h-7 w-7 shrink-0 text-orange-500" strokeWidth={1.5} />
                <span className="text-sm text-white/85">{badge.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ------------------------------------------------ Autres témoignages */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              as="li"
              delay={index * 100}
              className="relative border-l-2 border-orange-500 bg-navy-800 p-7"
            >
              <span className="font-display text-4xl font-black leading-none text-orange-500/40" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-2">
                <p className="leading-relaxed text-white/85">{testimonial.quote}</p>
                <footer className="mt-5">
                  <p className="font-display text-sm font-extrabold text-white">{testimonial.author}</p>
                  <p className="mt-0.5 text-sm text-white/55">{testimonial.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
