import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { process } from '../../data/site';

/*
 * 08 — PROCESSUS DE COLLABORATION (planche 9 du PDF).
 *
 * Cinq colonnes alternant fond sombre et fond clair, chacune surmontée d'un
 * grand numéro orange et refermée par une photo. Manifeste et piliers en pied.
 */
export default function Process() {
  return (
    <section id="processus" className="content-auto relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={process.num}
            eyebrow={process.eyebrow}
            titleLead={process.titleLead}
            titleHighlight={process.titleHighlight}
            intro={process.intro}
          />

          {/* Verbes de la méthode, alignés à droite comme sur la planche */}
          <Reveal delay={120} variant="right" as="ul" className="hidden lg:block lg:pt-4 lg:text-right">
            {process.verbs.map((verb) => (
              <li
                key={verb}
                className="font-display text-[0.72rem] font-extrabold uppercase leading-[2.2] tracking-[0.24em] text-navy-900/50"
              >
                {verb}
              </li>
            ))}
          </Reveal>
        </div>

        {/* ------------------------------------------------------ Cinq étapes */}
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, index) => {
            const isDark = index % 2 === 0;
            const illustration = media.processSteps[index % media.processSteps.length];

            return (
              <Reveal
                key={step.num}
                as="li"
                delay={index * 90}
                className={`flex flex-col overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  isDark ? 'bg-navy-900' : 'bg-white'
                }`}
              >
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-display text-3xl font-black leading-none text-orange-500">{step.num}</span>
                  <span className="mt-2 block h-[3px] w-8 bg-orange-500" aria-hidden="true" />

                  <h3 className={`mt-4 text-base uppercase tracking-wide ${isDark ? 'text-white' : 'text-navy-900'}`}>
                    {step.title}
                  </h3>

                  <Icon name={step.icon} className="mt-5 h-9 w-9 text-orange-500" strokeWidth={1.5} />

                  <p className={`mt-4 flex-1 text-sm leading-relaxed ${isDark ? 'text-white/65' : 'text-ink-muted'}`}>
                    {step.text}
                  </p>
                </div>

                <Media media={illustration} className="h-36 w-full" />
              </Reveal>
            );
          })}
        </ol>
      </div>

      {/* --------------------------------------------- Manifeste et piliers */}
      <div className="shell mt-12">
        <Reveal className="grid gap-8 bg-navy-900 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <blockquote className="flex gap-4">
            <span className="font-display text-4xl font-black leading-none text-orange-500" aria-hidden="true">
              “
            </span>
            <div>
              <p className="text-lg leading-snug text-white sm:text-xl">
                {process.manifesto.lead}
                <span className="text-orange-500">{process.manifesto.highlight}</span>
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="block h-[2px] w-7 bg-orange-500" aria-hidden="true" />
                <span className="text-sm text-white/60">{process.manifesto.author}</span>
              </footer>
            </div>
          </blockquote>

          <ul className="grid gap-6 border-t border-navy-600 pt-7 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {process.pillars.map((pillar) => (
              <li key={pillar.title} className="text-center">
                <Icon name={pillar.icon} className="mx-auto h-8 w-8 text-orange-500" strokeWidth={1.5} />
                <p className="mt-3 text-sm leading-snug text-white/80">{pillar.title}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
