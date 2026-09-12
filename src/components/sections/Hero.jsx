import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import { Chevron, DiamondBand } from '../ui/GeoAccent';
import media from '../../data/media';
import { hero } from '../../data/site';

/*
 * HERO — planche 1 du PDF.
 *
 * Colonne de texte à gauche sur fond bleu nuit, portrait à découpe diagonale
 * à droite, chevron et trame orange en fond, skyline assombrie en pied.
 */
export default function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-navy-900 pt-28 lg:pt-32">
      {/* Décor : skyline en pied de section */}
      <Media
        media={media.heroSkyline}
        position="absolute"
        className="pointer-events-none inset-x-0 bottom-0 h-56 opacity-30 sm:h-72"
        overlay={
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,#0A1628_0%,rgba(10,22,40,0.7)_45%,rgba(10,22,40,0.95)_100%)]"
            aria-hidden="true"
          />
        }
      />

      {/* Décor : chevron et trame de losanges orange */}
      <Chevron className="pointer-events-none absolute -right-10 top-24 hidden h-[26rem] w-56 text-orange-500/90 lg:block" />
      <DiamondBand className="pointer-events-none absolute right-4 top-[26rem] hidden h-32 w-28 text-orange-500/60 xl:block" />

      <div className="shell relative grid items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-32">
        {/* ------------------------------------------------------- Colonne texte */}
        <div className="max-w-2xl">
          <Reveal className="flex items-center gap-4">
            <span className="block h-[3px] w-9 shrink-0 bg-orange-500" aria-hidden="true" />
            <span className="font-display text-eyebrow font-extrabold uppercase text-white/70">{hero.eyebrow}</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-display-xl text-white">
              {hero.titleLead}{' '}
              <span className="text-orange-500">{hero.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">{hero.lede}</p>
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="orange">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </Reveal>

          {/* Les trois piliers de l'offre */}
          <Reveal delay={300} as="ul" className="mt-11 flex flex-wrap gap-x-8 gap-y-5">
            {hero.pillars.map((pillar) => (
              <li key={pillar.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sharp border border-orange-500/60 text-orange-500">
                  <Icon name={pillar.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-white/85">{pillar.label}</span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* ----------------------------------------------------- Colonne visuelle */}
        <Reveal delay={200} variant="right" className="relative">
          {/* Aplat orange décalé derrière la photo */}
          <div className="absolute -right-3 -top-5 hidden h-40 w-40 bg-orange-500/90 sm:block" aria-hidden="true" />

          <Media
            media={media.heroPortrait}
            priority
            fit="none"
            className="clip-diag-tl relative aspect-[4/5] w-full max-w-md shadow-card-hover sm:ml-auto"
            overlay={
              <div
                className="absolute inset-0 bg-[linear-gradient(200deg,transparent_45%,rgba(10,22,40,0.55)_100%)]"
                aria-hidden="true"
              />
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
