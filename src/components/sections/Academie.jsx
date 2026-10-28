import Button from '../ui/Button';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { academie } from '../../data/site';

/*
 * 04 — L'ACADÉMIE DES BÂTISSEURS (planche 4 de la maquette V2).
 *
 * Fond blanc : titre et présentation à gauche, visuel des packs à droite,
 * puis parcours en quatre temps et bouton d'inscription.
 */
export default function Academie() {
  return (
    <section id="academie" className="content-auto relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            num={academie.num}
            eyebrow={academie.eyebrow}
            titleLead={academie.titleLead}
            titleHighlight={academie.titleHighlight}
            intro={academie.intro}
            accent="text-orange-500" // grand texte sur fond blanc : 3,4:1, suffisant pour AA (≥ 3:1)
          />

          <Reveal delay={120} variant="right">
            <Media
              media={media.academiePacks}
              fit="contain"
              className="aspect-[900/488] w-full bg-white"
            />
          </Reveal>
        </div>

        {/* ------------------------------------------------- Parcours en 4 temps */}
        <div className="mt-14 border-t border-cream-deep pt-8">
          <Reveal className="flex items-center gap-4">
            <h3 className="text-lg">{academie.stepsTitle}</h3>
            <span className="block h-[2px] w-12 bg-orange-500" aria-hidden="true" />
          </Reveal>

          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-orange-500/30">
            {academie.steps.map((step, index) => (
              <Reveal key={step.num} as="li" delay={index * 90} className={`flex items-start gap-4 ${index > 0 ? 'lg:pl-8' : ''}`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 font-display text-xl font-extrabold text-white">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-xl">{step.title}</h4>
                  <p className="mt-1 leading-snug text-ink-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={150} className="mt-12">
          <Button href={academie.cta.href} variant="gradient" className="px-8 py-4 uppercase">
            {academie.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
