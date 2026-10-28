import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { expertises } from '../../data/site';

/*
 * 02 — NOS EXPERTISES (planche 2 de la maquette V2).
 *
 * Fond blanc : titre, liste des quatre expertises et paragraphe de clôture à
 * gauche, visuel à découpe diagonale sur aplat orange à droite, puis bandeau
 * de citation sombre en pied de section.
 */
export default function About() {
  return (
    <section id="expertises" className="content-auto relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              num={expertises.num}
              eyebrow={expertises.eyebrow}
              titleLead={expertises.titleLead}
              titleHighlight={expertises.titleHighlight}
              intro={expertises.intro}
              accent="text-orange-500" // grand texte sur fond blanc : 3,4:1, suffisant pour AA (≥ 3:1)
            />

            <Reveal as="ul" delay={140} className="mt-8 space-y-5">
              {expertises.items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-2 block h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg">{item.title}</h3>
                    <p className="mt-0.5 leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl leading-relaxed text-ink-muted">{expertises.outro}</p>
            </Reveal>
          </div>

          <Reveal delay={120} variant="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 top-10 h-32 w-8 bg-orange-500/90 sm:-left-6 sm:w-10" aria-hidden="true" />
            <Media
              media={media.expertisesPortrait}
              className="clip-diag-br relative aspect-[31/32] w-full shadow-card"
            />
          </Reveal>
        </div>

        {/* ------------------------------------------------- Bandeau de citation */}
        <Reveal delay={80} className="mt-14">
          <div className="clip-band flex items-center gap-6 bg-navy-900 px-6 py-8 sm:gap-8 sm:px-12">
            <span className="hidden h-[3px] w-12 shrink-0 bg-orange-500 sm:block" aria-hidden="true" />
            <p className="max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              {expertises.quoteLead}
              <span className="text-orange-500">{expertises.quoteHighlight}</span>
              {expertises.quoteTail}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
