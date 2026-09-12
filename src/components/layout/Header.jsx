import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from '../ui/Icon';
import useScrollSpy from '../../hooks/useScrollSpy';
import { brand, navCta, navLinks } from '../../data/site';

/*
 * Header fixe sombre du PDF : liseré orange à gauche, logotype, menu central,
 * filet orange + baseline à droite. En dessous de 1024px, le menu bascule en
 * panneau plein écran piloté par un bouton hamburger.
 */

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  /* Fond opaque du header dès que la page a défilé. */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Menu mobile ouvert : on bloque le défilement de la page et on écoute Échap. */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Voile plein écran derrière le menu mobile ouvert : ferme au clic. */}
      {isMenuOpen ? (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-0 z-40 cursor-default bg-navy-950/80 backdrop-blur-sm lg:hidden"
        />
      ) : null}

      <header
      className={`fixed inset-x-0 top-0 z-50 border-l-[5px] border-orange-500 transition-[background-color,padding,box-shadow] duration-300 ${
        isScrolled || isMenuOpen ? 'bg-navy-900/95 py-3 shadow-header backdrop-blur-md' : 'bg-navy-900/85 py-4 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'
      }`}
    >
      <div className="shell flex items-center justify-between gap-6">
        <a href="#accueil" onClick={closeMenu} className="shrink-0">
          <Logo compact={isScrolled} />
        </a>

        {/* Menu principal — desktop */}
        <nav aria-label="Navigation principale" className="hidden shrink-0 lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative whitespace-nowrap font-display text-[0.78rem] font-extrabold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-orange-500' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Baseline — visible à partir de xl pour ne jamais tasser le menu */}
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <span className="block h-[3px] w-10 bg-orange-500" aria-hidden="true" />
          <p className="max-w-[13rem] text-[0.76rem] leading-snug text-white/75">{brand.tagline}</p>
        </div>

        <a
          href={navCta.href}
          className="hidden shrink-0 rounded-sharp bg-orange-500 px-5 py-2.5 font-display text-[0.76rem] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-orange-400 lg:inline-block xl:hidden 2xl:inline-block"
        >
          {navCta.label}
        </a>

        {/* Bouton hamburger — mobile / tablette */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-sharp border border-white/20 text-white transition-colors hover:border-orange-500 lg:hidden"
        >
          <span
            className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-[2px] w-5 bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-[2px] w-5 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Panneau de navigation mobile */}
      <nav
        id="menu-mobile"
        aria-label="Navigation mobile"
        hidden={!isMenuOpen}
        className="shell mt-4 border-t border-navy-600 pt-4 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-navy-600/60 py-3.5 font-display text-sm font-extrabold uppercase tracking-[0.12em] transition-colors ${
                  activeId === link.id ? 'text-orange-500' : 'text-white/85'
                }`}
              >
                {link.label}
                <Icon name="chevron" className="h-4 w-4" strokeWidth={2.4} />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={navCta.href}
          onClick={closeMenu}
          className="mt-5 mb-2 flex items-center justify-center gap-2 rounded-sharp bg-orange-500 px-5 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-white"
        >
          {navCta.label}
          <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
        </a>

        <p className="pb-2 text-center text-[0.76rem] text-white/60">{brand.tagline}</p>
      </nav>
      </header>
    </>
  );
}
