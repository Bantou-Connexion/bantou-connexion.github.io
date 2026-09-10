import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import ScriptMark from '../ui/ScriptMark';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { impact } from '../../data/site';

/*
 * 06 — IMPACT & VISION 2030 (planche 7 du PDF).
 *
 * Frise 2025 → 2030 en cartes alternant fond sombre et fond clair, chacune
 * illustrée d'une photo, puis les quatre engagements sur bandeau clair.
 */
export default function Impact() {
  return (
    <section id="impact" className="content-auto relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={impact.num}
            eyebrow={impact.eyebrow}
            titleLead={impact.titleLead}
            titleHighlight={impact.titleHighlight}
            intro={impact.intro}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <Media media={media.impactPortrait} className="clip-diag-tl aspect-[5/4] w-full shadow-card" />
            <ScriptMark className="absolute right-4 top-5" tone="light" />
          </Reveal>
        </div>

        {/* --------------------------------------------------- Frise 2025-2030 */}
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.timeline.map((step, index) => {
            const isDark = index % 2 === 0;
            const illustration = media.impactCards[index % media.impactCards.length];

            return (
              <Reveal
                key={step.year}
                as="li"
                delay={index * 90}
                className={`flex flex-col overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  isDark ? 'bg-navy-900' : 'bg-white'
                }`}
              >
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-baseline gap-2 border-b-2 border-orange-500 pb-1.5 font-display text-2xl font-black text-orange-500">
                    {step.year}
                  </span>
                  <h3 className={`mt-4 text-lg ${isDark ? 'text-white' : 'text-navy-900'}`}>{step.title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${isDark ? 'text-white/65' : 'text-ink-muted'}`}>
                    {step.text}
                  </p>
                </div>

                <Media media={illustration} className="h-40 w-full" />
              </Reveal>
            );
          })}
        </ol>

        {/* ------------------------------------------------------ Engagements */}
        <div className="mt-12 grid gap-px overflow-hidden border border-cream-deep bg-cream-deep sm:grid-cols-2 lg:grid-cols-4">
          {impact.engagements.map((engagement, index) => (
            <Reveal key={engagement.title} delay={(index % 4) * 80} className="bg-white p-6">
              <Icon name={engagement.icon} className="h-9 w-9 text-orange-500" strokeWidth={1.5} />
              <h3 className="mt-5 text-base">{engagement.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{engagement.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
