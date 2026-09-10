/*
 * Éléments graphiques décoratifs du PDF : chevrons orange, losanges « wax »
 * et voiles diagonaux. Purement ornementaux, donc masqués aux lecteurs d'écran.
 */

/** Grand chevron orange (angle supérieur droit des planches). */
export function Chevron({ className = '' }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" aria-hidden="true">
      <path d="M0 0h58l62 100-62 100H0l62-100z" fill="currentColor" />
    </svg>
  );
}

/** Trame de losanges inspirée des motifs textiles africains. */
export function DiamondBand({ className = '' }) {
  return (
    <div className={`pattern-diamonds ${className}`} aria-hidden="true" />
  );
}

/** Voile diagonal sombre utilisé pour fondre les photos dans les aplats. */
export function DiagonalVeil({ className = '', from = 'from-navy-900' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${from} via-navy-900/70 to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}

/** Filet orange + libellé en capitales espacées (signature « eyebrow » du PDF). */
export function RuleLabel({ children, tone = 'dark', className = '' }) {
  const text = tone === 'dark' ? 'text-navy-900/70' : 'text-white/70';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="block h-[3px] w-9 shrink-0 bg-orange-500" aria-hidden="true" />
      <span className={`font-display text-eyebrow font-extrabold uppercase ${text}`}>{children}</span>
    </div>
  );
}
