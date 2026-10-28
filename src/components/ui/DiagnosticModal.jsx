import { useEffect, useRef } from 'react';
import Button from './Button';
import Icon from './Icon';
import Media from './Media';
import media from '../../data/media';
import { diagnostic } from '../../data/site';

/*
 * Modale « Le diagnostic » (planche 7 de la maquette V2).
 *
 * Repose sur l'élément natif <dialog> : focus piégé dans la fenêtre, fermeture
 * à Échap et reste de la page inerte, sans dépendance. Un clic sur le fond
 * assombri ou sur un lien interne ferme la modale.
 */

const CARD_STYLES = {
  dark: { card: 'bg-navy-900 text-white', eyebrow: 'text-white/70', accent: 'text-orange-500', text: 'text-white/85' },
  light: { card: 'bg-slate-100 text-navy-900', eyebrow: 'text-navy-900/70', accent: 'text-orange-text', text: 'text-ink-muted' },
};

export default function DiagnosticModal({ open, onClose, onAction }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();

    // Le <dialog> ne bloque pas le défilement de la page derrière lui.
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="diagnostic-titre"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[92vh] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto bg-white p-0 text-navy-900 shadow-card-hover backdrop:bg-navy-950/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-6 sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label={diagnostic.closeLabel}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-sharp bg-navy-900 text-white transition-colors hover:bg-orange-500 sm:right-4 sm:top-4"
        >
          <Icon name="close" className="h-5 w-5" strokeWidth={2.2} />
        </button>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-4">
              <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
              <span className="font-display text-eyebrow font-extrabold uppercase text-navy-900/70">{diagnostic.eyebrow}</span>
            </div>

            <h2 id="diagnostic-titre" className="mt-5 text-display-lg text-navy-900">
              {diagnostic.titleLead}
              <span className="block text-orange-500">
                {diagnostic.titleHighlight}
                <span className="text-navy-900">.</span>
              </span>
            </h2>

            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-muted">{diagnostic.intro}</p>
          </div>

          <Media media={media.diagnosticTeam} className="aspect-[698/401] w-full" />
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {diagnostic.options.map((option) => {
            const style = CARD_STYLES[option.tone];
            return (
              <li key={option.eyebrow} className={`flex gap-5 p-6 sm:p-7 ${style.card}`}>
                <Icon name="target" className="hidden h-14 w-14 shrink-0 text-orange-500 sm:block" strokeWidth={1.4} />
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className={`font-display text-xs font-semibold uppercase tracking-[0.16em] ${style.eyebrow}`}>
                    {option.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl leading-tight text-inherit">
                    {option.titleLead}
                    <span className={`block ${style.accent}`}>
                      {option.titleHighlight}
                      <span className="text-inherit">.</span>
                    </span>
                  </h3>
                  <p className={`mt-3 flex-1 leading-relaxed ${style.text}`}>{option.text}</p>
                  <Button
                    as="button"
                    type="button"
                    onClick={() => onAction(option.cta.action)}
                    variant="gradient"
                    className="mt-5 self-start uppercase"
                  >
                    {option.cta.label}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </dialog>
  );
}
