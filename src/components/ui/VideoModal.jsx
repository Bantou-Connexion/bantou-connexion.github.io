import { useEffect, useRef } from 'react';
import Icon from './Icon';

/*
 * Modale vidéo basée sur <dialog> (focus piégé, fermeture à Échap).
 * La vidéo n'est montée que lorsque la modale est ouverte : rien n'est
 * téléchargé avant le clic, et la lecture s'arrête à la fermeture.
 */
export default function VideoModal({ open, onClose, src, title, closeLabel }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();

    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto w-[calc(100%-1.5rem)] max-w-5xl bg-navy-950 p-0 shadow-card-hover backdrop:bg-navy-950/90 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-sharp bg-navy-900 text-white transition-colors hover:bg-orange-500"
        >
          <Icon name="close" className="h-5 w-5" strokeWidth={2.2} />
        </button>

        {open && (
          <video className="block max-h-[85vh] w-full bg-black" src={src} controls autoPlay playsInline preload="metadata" />
        )}
      </div>
    </dialog>
  );
}
