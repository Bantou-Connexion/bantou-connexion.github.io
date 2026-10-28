import Logo from './Logo';
import { brand, navLinks } from '../../data/site';

/*
 * Pied de page sombre.
 *
 * La barre basse reprend exactement le bandeau présent au pied de chaque
 * planche du PDF : filet orange + mots-clés à gauche, filet blanc + nom de la
 * marque à droite.
 */
export default function Footer() {
  return (
    <footer className="border-t border-navy-600/60 bg-navy-950">
      <div className="shell py-12">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 font-script text-xl text-orange-500">{brand.script}</p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="font-display text-eyebrow font-extrabold uppercase text-white/50">Navigation</h2>
            <ul className="mt-4 grid grid-cols-3 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-white/70 transition-colors hover:text-orange-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-navy-600/60 pt-6 text-xs text-white/45">{brand.legal}</p>
      </div>
    </footer>
  );
}
