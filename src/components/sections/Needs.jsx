import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { needs } from '../../data/site';

/*
 * 03 — LE BESOIN & NOTRE RÉPONSE (planche 4 du PDF).
 *
 * Deux colonnes en vis-à-vis : les freins sur panneau bleu marine, les réponses
 * sur panneau blanc. Les quatre piliers « Concevoir / Créer / Former / Connecter »
 * ferment la section.
 */
export default function Needs() {
  return (
    <section id="besoin" className="content-auto relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={needs.num}
            eyebrow={needs.eyebrow}
            titleLead={needs.titleLead}
            titleHighlight={needs.titleHighlight}
            intro={needs.intro}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <Media media={media.needsMeeting} className="clip-diag-br aspect-[4/3] w-full shadow-card" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ------------------------------------------------ Les principaux défis */}
          <Reveal variant="left" className="bg-navy-900 p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
                <Icon name="alert" className="h-6 w-6" strokeWidth={2} />
              </span>
              <div>
                <p className="font-display text-eyebrow font-extrabold uppercase text-white/55">{needs.frictionsTitle}</p>
                <h3 className="mt-1.5 text-lg text-white">{needs.frictionsSubtitle}</h3>
              </div>
            </div>

            <ul className="mt-8 space-y-6">
              {needs.frictions.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sharp border border-orange-500/50 text-orange-500">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-base text-white">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------------------------------------------------- Notre réponse */}
          <Reveal variant="right" delay={100} className="bg-white p-7 shadow-card sm:p-9">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
                <Icon name="target" className="h-6 w-6" strokeWidth={2} />
              </span>
              <div>
                <p className="font-display text-eyebrow font-extrabold uppercase text-navy-900/55">{needs.answerTitle}</p>
                <h3 className="mt-1.5 text-lg">{needs.answerSubtitle}</h3>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-ink-muted">{needs.answerText}</p>

            <ul className="mt-8 space-y-5 border-t border-cream-deep pt-7">
              {needs.pillars.map((pillar) => (
                <li key={pillar.num} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sharp border border-cream-deep bg-cream text-orange-500">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="flex items-baseline gap-2 text-base">
                      <span className="font-display text-xs font-extrabold text-orange-500">{pillar.num}</span>
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
