import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import ScriptMark from '../ui/ScriptMark';
import SectionHeader from '../ui/SectionHeader';
import { DiamondBand } from '../ui/GeoAccent';
import media from '../../data/media';
import { about } from '../../data/site';

/*
 * 01 — QUI SOMMES-NOUS (planche 2 du PDF).
 *
 * Fond crème, portrait à découpe diagonale en haut à droite, bandeau de
 * citation sombre sur photo de pont, cartes Vision / Mission à liseré orange,
 * puis grille de six valeurs séparées par de fins filets.
 */
export default function About() {
  return (
    <section id="apropos" className="content-auto relative overflow-hidden bg-cream py-20 lg:py-28">
      {/* Décor : trame de losanges en pied de section */}
      <DiamondBand className="pointer-events-none absolute -bottom-6 right-0 hidden h-40 w-52 text-navy-900/[0.06] lg:block" />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <SectionHeader
            num={about.num}
            eyebrow={about.eyebrow}
            titleLead={`${about.titleLead} `}
            titleHighlight={about.titleHighlight}
            intro={about.intro}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <div className="absolute -left-6 top-10 h-32 w-32 bg-orange-500/90" aria-hidden="true" />
            <Media media={media.aboutPortrait} className="clip-diag-br relative aspect-[4/5] w-full shadow-card" />
            <ScriptMark className="absolute -left-4 bottom-10" tone="dark" />
          </Reveal>
        </div>

        {/* ------------------------------------------------- Bandeau de citation */}
        <Reveal delay={80} className="mt-14">
          <Media
            media={media.aboutBridge}
            className="clip-band relative"
            imgClassName="absolute inset-0"
            overlay={
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,#0A1628_0%,rgba(10,22,40,0.9)_55%,rgba(10,22,40,0.6)_100%)]"
                aria-hidden="true"
              />
            }
          >
            <div className="relative flex flex-col gap-6 border-l-4 border-orange-500 px-6 py-9 sm:px-10 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                {about.quoteLead}
                <span className="text-orange-500">{about.quoteHighlight}</span>
                {about.quoteTail}
              </p>

              <ul className="shrink-0 space-y-1.5 md:text-right">
                {about.quotePillars.map((pillar) => (
                  <li key={pillar} className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-white/70">
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </Media>
        </Reveal>

        {/* ------------------------------------------------- Vision & Mission */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {about.visionMission.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 100}
              className="border-l-4 border-orange-500 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-9"
            >
              <span className="flex h-12 w-12 items-center justify-center text-orange-500">
                <Icon name={card.icon} className="h-9 w-9" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 text-xl">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{card.text}</p>
            </Reveal>
          ))}
        </div>

        {/* ------------------------------------------------------- Six valeurs */}
        <div className="mt-12 grid gap-px overflow-hidden border border-cream-deep bg-cream-deep sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value, index) => (
            <Reveal
              key={value.num}
              delay={(index % 3) * 90}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-cream"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm font-extrabold text-orange-500 underline decoration-orange-500/40 underline-offset-4">
                  {value.num}
                </span>
                <Icon
                  name={value.icon}
                  className="h-8 w-8 text-orange-500 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-6 text-lg">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
