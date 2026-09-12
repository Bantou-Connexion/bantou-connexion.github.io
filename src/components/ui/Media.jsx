import { useState } from 'react';

/*
 * Image du site, avec dégradation gracieuse.
 *
 * Les visuels sont des placeholders distants (voir src/data/media.js). Si l'un
 * d'eux devient indisponible, on retombe sur un aplat géométrique aux couleurs
 * de la charte plutôt que sur une icône d'image cassée. Toutes les photos sont
 * chargées en `lazy` sauf le visuel du hero (`priority`), qui porte le LCP.
 *
 * `position` est un prop et non une classe utilitaire : Tailwind émet `.relative`
 * après `.absolute`, donc une classe `absolute` passée par l'appelant serait
 * silencieusement écrasée par le `relative` du conteneur.
 *
 * `fit` pilote le recadrage de l'image (`object-fit`) ; `imgClassName` ne sert
 * qu'aux classes additionnelles (positionnement, filtres…), la base
 * `h-full w-full` étant toujours appliquée.
 */
const FIT_CLASSES = {
  cover: 'object-cover',
  contain: 'object-contain',
  none: '',
};

export default function Media({
  media,
  position = 'relative',
  className = '',
  imgClassName = '',
  fit = 'cover',
  priority = false,
  overlay = null,
  children = null,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`${position} overflow-hidden bg-navy-800 ${className}`}>
      {failed ? (
        // Repli aux couleurs de la charte : dégradé nuit → golden hour + trame orange.
        <div className="absolute inset-0 bg-[linear-gradient(150deg,#0A1628_0%,#152B45_55%,#8A4326_100%)]" aria-hidden="true">
          <div className="pattern-diamonds absolute inset-0 text-orange-500/15" />
        </div>
      ) : (
        <img
          src={media.src}
          alt={media.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={`h-full w-full ${FIT_CLASSES[fit]} ${imgClassName}`.trim()}
        />
      )}

      {overlay}
      {children}
    </div>
  );
}
