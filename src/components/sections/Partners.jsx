import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import media from '../../data/media';
import { partners } from '../../data/site';

/*
 * INSTITUTIONS & ENTREPRISES (planche 5 de la maquette V2).
 *
 * Bandeau sombre : titre, présentation et poignée de main. Dessous : quatre
 * offres, la méthode en quatre temps et le bouton « Présenter mon besoin ».
 */
export default function Partners({ onQuote }) {
  return (
    <section id="partenaires" className="content-auto relative overflow-hidden bg-white">
      {/* ---------------------------------------------------------------- Bandeau */}
      <div className="bg-navy-900 pb-14 pt-28 lg:pb-0 lg:pt-0">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="lg:py-20">
            <Reveal className="flex items-center gap-4">
              <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
              <span className="font-display text-eyebrow font-extrabold uppercase text-white/80">{partners.eyebrow}</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-display-lg text-white">
                {partners.titleLead}
                <span className="block text-orange-500">{partners.titleHighlight}</span>
                {partners.titleTail}
                <span className="text-orange-500">.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/80">{partners.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={120} variant="right" className="lg:self-stretch">
            <Media
              media={media.partnersHandshake}
              className="clip-diag-tl aspect-[716/410] w-full lg:h-full lg:min-h-[22rem]"
            />
          </Reveal>
        </div>
      </div>

      <div className="shell py-12 lg:py-14">
        {/* ----------------------------------------------------------- Offres */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.offers.map((offer, index) => (
            <Reveal
              key={offer.title}
              as="li"
              delay={index * 90}
              className="flex items-start gap-4 rounded-sharp border border-slate-200/70 bg-slate-50 p-5"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sharp bg-orange-500 text-white">
                <Icon name={offer.icon} className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-base leading-snug">{offer.title}</h3>
                <p className="mt-2 text-sm leading-snug text-ink-muted">{offer.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* ----------------------------------------------------------- Méthode */}
        <Reveal className="mt-10 bg-slate-100 px-5 py-8 sm:px-8">
          <div className="flex items-center gap-4">
            <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
            <h3 className="text-2xl">{partners.method.title}</h3>
          </div>
          <p className="mt-2 text-ink-muted">{partners.method.intro}</p>

          <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-4">
            {partners.method.steps.map((step, index) => (
              <li key={step.num} className="flex items-start gap-4 lg:contents">
                <div className="flex items-start gap-4 lg:max-w-[16rem]">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-500 font-display text-xl font-extrabold text-white">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-base">{step.title}</h4>
                    <p className="mt-1 text-sm leading-snug text-ink-muted">{step.text}</p>
                  </div>
                </div>
                {index < partners.method.steps.length - 1 ? (
                  <Icon name="arrow" className="mt-5 hidden h-7 w-7 shrink-0 text-orange-500 lg:block" strokeWidth={1.8} />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <Button
            as="button"
            type="button"
            onClick={onQuote}
            aria-haspopup="dialog"
            variant="gradient"
            className="px-8 py-4 uppercase"
          >
            {partners.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
