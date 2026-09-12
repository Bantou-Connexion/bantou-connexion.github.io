import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { founder } from '../../data/site';

/*
 * 02 — LE FONDATEUR (planche 3 du PDF).
 *
 * Section sombre : portrait plein bord à gauche, biographie et grille
 * d'expertises à droite, bandeau de citation signé, puis barre de statistiques
 * posée sur une skyline au coucher du soleil.
 */
export default function Founder() {
  return (
    <section id="fondateur" className="content-auto relative overflow-hidden bg-navy-900">
      <div className="shell pt-20 lg:pt-24">
        <SectionHeader
          num={founder.num}
          eyebrow={founder.eyebrow}
          titleLead={founder.titleLead}
          titleHighlight={founder.titleHighlight}
          tone="light"
        />
      </div>

      <div className="shell mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal variant="left" className="relative">
          <Media media={media.founderPortrait} className="clip-diag-br aspect-[4/5] w-full max-w-sm shadow-card-hover" />
          <div className="absolute -bottom-4 -right-2 hidden h-24 w-24 bg-orange-500/90 sm:block lg:right-6" aria-hidden="true" />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-white">{founder.lead}</p>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-5 leading-relaxed text-white/70">{founder.body}</p>
          </Reveal>

          {/* Domaines d'expertise, en deux colonnes séparées d'un filet */}
          <Reveal delay={150} as="ul" className="mt-9 grid gap-x-10 gap-y-5 sm:grid-cols-2 sm:divide-x sm:divide-navy-600">
            {founder.expertise.map((item, index) => (
              <li key={item.label} className={`flex items-start gap-3.5 ${index % 2 === 1 ? 'sm:pl-10' : ''}`}>
                <Icon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-sm leading-snug text-white/85">{item.label}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>

      {/* -------------------------------------------------- Citation signée */}
      <div className="shell mt-14">
        <Reveal className="flex flex-col gap-6 border-l-4 border-orange-500 bg-navy-800 px-6 py-8 sm:px-9 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg leading-snug text-white sm:text-xl">
            {founder.quoteLead}
            <span className="text-orange-500">{founder.quoteHighlight}</span>
            {founder.quoteTail}
          </p>

          <div className="shrink-0 md:text-right">
            <p className="font-script text-3xl text-white">{founder.signature.name}</p>
            <p className="mt-1 font-display text-[0.66rem] font-extrabold uppercase tracking-[0.34em] text-white/60">
              {founder.signature.role}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ------------------------------------------- Statistiques sur skyline */}
      <Media
        media={media.founderCity}
        className="mt-14 min-h-[220px]"
        imgClassName="absolute inset-0"
        overlay={
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,#0A1628_0%,rgba(10,22,40,0.72)_55%,rgba(10,22,40,0.9)_100%)]"
            aria-hidden="true"
          />
        }
      >
        <div className="relative shell py-12">
          <dl className="grid gap-8 sm:grid-cols-2 sm:divide-navy-600 lg:grid-cols-4 lg:divide-x">
            {founder.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 90}
                className={`text-center ${index > 0 ? 'lg:pl-8' : ''}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-black text-orange-500 sm:text-5xl">{stat.value}</span>
                  <span className="mt-2 block text-sm text-white/75">{stat.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Media>
    </section>
  );
}
