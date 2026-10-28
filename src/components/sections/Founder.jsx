import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import media from '../../data/media';
import { founder, references } from '../../data/site';

/*
 * 03 — À PROPOS (planche 3 de la maquette V2).
 *
 * Partie haute sombre à lueurs orange : portrait du fondateur et texte de
 * présentation. Partie basse blanche : références, en deux grilles de logos.
 */

/** Sur-titre « 03 — À PROPOS | LE FONDATEUR » : filet orange puis libellés. */
function Eyebrow({ num, label, tail, tone }) {
  const isLight = tone === 'light';
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-eyebrow font-extrabold uppercase">
      <span className="block h-[3px] w-9 shrink-0 bg-orange-500" aria-hidden="true" />
      <span className={isLight ? 'text-orange-500' : 'text-orange-text'}>
        {num ? `${num} — ` : ''}
        {label}
      </span>
      <span className={isLight ? 'text-white/40' : 'text-navy-900/30'} aria-hidden="true">
        |
      </span>
      <span className={isLight ? 'text-white/80' : 'text-navy-900/80'}>{tail}</span>
    </div>
  );
}

function LogoGroup({ group }) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <h3 className="text-lg">{group.title}</h3>
        <span className="block h-[2px] w-12 bg-orange-500" aria-hidden="true" />
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {group.logos.map((logo) => (
          <li key={logo.name} className="flex h-16 items-center justify-center border border-cream-deep bg-white p-1.5">
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Founder() {
  return (
    <section id="fondateur" className="content-auto relative overflow-hidden">
      {/* ---------------------------------------------------------- Fondateur */}
      <div className="relative isolate bg-navy-900 py-16 lg:py-20">
        {/* Lueurs orange en fond */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left_center,rgba(241,90,41,0.55)_0%,transparent_45%),radial-gradient(ellipse_at_right_bottom,rgba(241,90,41,0.25)_0%,transparent_40%)]"
          aria-hidden="true"
        />

        <div className="shell grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-start lg:gap-14">
          <Reveal variant="left" className="mx-auto w-full max-w-xs lg:max-w-none">
            <Media media={media.founderPortrait} fit="cover" className="aspect-[900/1285] w-full shadow-card-hover" />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow num={founder.num} label={founder.eyebrow} tail={founder.eyebrowTail} tone="light" />
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-display-lg text-white">
                {founder.titleLead}
                <span className="block text-orange-500">{founder.titleHighlight}</span>
              </h2>
            </Reveal>

            <Reveal delay={150} className="mt-6 max-w-3xl space-y-4 leading-relaxed text-white/85">
              {founder.paragraphs.map((segments) => (
                <p key={segments[0].text}>
                  {segments.map((segment) =>
                    segment.highlight ? (
                      <strong key={segment.text} className="font-bold text-orange-500">
                        {segment.text}
                      </strong>
                    ) : (
                      segment.text
                    ),
                  )}
                </p>
              ))}
              <p className="max-w-xl font-bold leading-snug text-orange-500">{founder.closing}</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- Références */}
      <div className="bg-white py-16 lg:py-20">
        <div className="shell">
          <Reveal>
            <Eyebrow label={references.eyebrow} tail={references.eyebrowTail} tone="dark" />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-display-lg text-navy-900">
              {references.titleLead}
              <span className="text-orange-500">{references.titleHighlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">{references.intro}</p>
          </Reveal>

          {references.groups.map((group) => (
            <Reveal key={group.title} delay={100}>
              <LogoGroup group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
