import { useMemo, useState } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import media from '../../data/media';
import { offersSection } from '../../data/site';

/*
 * 04 — NOS OFFRES & TARIFS (planche 5 du PDF).
 *
 * Filtres par typologie de client, grille de formules alternant cartes sombres
 * et claires (la formule mise en avant est sur fond orange), puis les quatre
 * moteurs de valeur.
 *
 * « Choisir cette offre » conserve son ancre vers le tunnel de vente et
 * pré-remplit en plus le message du formulaire de contact.
 */
export default function Offers({ onSelectOffer }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleOffers = useMemo(
    () =>
      activeFilter === 'all'
        ? offersSection.offers
        : offersSection.offers.filter((offer) => offer.categories.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section id="offres" className="content-auto relative overflow-hidden bg-cream-dim py-20 lg:py-28">
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            num={offersSection.num}
            eyebrow={offersSection.eyebrow}
            titleLead={offersSection.titleLead}
            titleHighlight={offersSection.titleHighlight}
            intro={offersSection.intro}
          />

          <Reveal delay={120} variant="right" className="relative hidden lg:block">
            <div className="absolute -right-4 -top-4 h-24 w-24 bg-orange-500/90" aria-hidden="true" />
            <Media media={media.offersDesk} className="clip-diag-tl relative aspect-[4/3] w-full shadow-card" />
          </Reveal>
        </div>

        {/* --------------------------------------------- Promesses transverses */}
        <Reveal
          delay={80}
          as="ul"
          className="mt-10 grid gap-6 border-y border-cream-deep py-6 sm:grid-cols-3 sm:divide-x sm:divide-cream-deep"
        >
          {offersSection.highlights.map((item, index) => (
            <li key={item.label} className={`flex items-center gap-3.5 ${index > 0 ? 'sm:pl-6' : ''}`}>
              <Icon name={item.icon} className="h-8 w-8 shrink-0 text-orange-500" strokeWidth={1.5} />
              <span className="text-sm font-semibold leading-snug text-navy-900">{item.label}</span>
            </li>
          ))}
        </Reveal>

        {/* ------------------------------------------------------------ Filtres */}
        <Reveal delay={100} className="mt-10">
          <div role="tablist" aria-label="Filtrer les offres par public" className="flex flex-wrap gap-2.5">
            {offersSection.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-sharp border-2 px-5 py-2.5 font-display text-[0.76rem] font-extrabold uppercase tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'border-orange-500 bg-orange-500 text-white'
                      : 'border-navy-900/15 text-navy-900/70 hover:border-orange-500 hover:text-orange-500'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---------------------------------------------------- Grille d'offres */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleOffers.map((offer, index) => {
            const isFeatured = Boolean(offer.featured);
            // Alternance sombre / clair reprise du PDF ; la formule vedette passe en orange.
            const isDark = !isFeatured && index % 2 === 0;

            return (
              <Reveal
                key={offer.id}
                as="li"
                delay={(index % 4) * 80}
                className={`flex flex-col p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  isFeatured ? 'bg-orange-sweep' : isDark ? 'bg-navy-900' : 'bg-white'
                }`}
              >
                <span
                  className={`self-start rounded-sharp px-2.5 py-1 font-display text-[0.6rem] font-extrabold uppercase tracking-[0.16em] ${
                    isFeatured ? 'bg-white/20 text-white' : 'bg-orange-500/10 text-orange-500'
                  }`}
                >
                  {offer.tag}
                </span>

                <h3 className={`mt-4 text-lg ${isFeatured || isDark ? 'text-white' : 'text-navy-900'}`}>{offer.title}</h3>

                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    isFeatured ? 'text-white/85' : isDark ? 'text-white/65' : 'text-ink-muted'
                  }`}
                >
                  {offer.text}
                </p>

                <p
                  className={`mt-6 border-t pt-5 font-display text-2xl font-black ${
                    isFeatured ? 'border-white/25 text-white' : isDark ? 'border-navy-600 text-orange-500' : 'border-cream-deep text-orange-500'
                  }`}
                >
                  {offer.price}
                  {offer.priceUnit ? (
                    <span
                      className={`ml-1.5 font-sans text-xs font-semibold ${
                        isFeatured ? 'text-white/75' : isDark ? 'text-white/55' : 'text-ink-muted'
                      }`}
                    >
                      {offer.priceUnit}
                    </span>
                  ) : null}
                </p>

                <Button
                  href="#tunnel-vente"
                  onClick={() => onSelectOffer?.(offer)}
                  variant={isFeatured ? 'navy' : isDark ? 'orange' : 'ghost'}
                  className="mt-5 w-full"
                >
                  {offersSection.ctaLabel}
                </Button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
