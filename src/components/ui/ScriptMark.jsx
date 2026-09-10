/*
 * Accent manuscrit « Des Territoires qui inspirent », présent sur presque
 * toutes les planches du PDF, souligné d'un trait orange.
 */
export default function ScriptMark({ className = '', tone = 'light', text = 'Des Territoires qui inspirent' }) {
  const color = tone === 'light' ? 'text-white' : 'text-navy-900';

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <p className={`font-script text-2xl leading-[1.05] -rotate-6 sm:text-3xl ${color}`}>{text}</p>
      <svg viewBox="0 0 120 12" className="mt-1 ml-6 h-2.5 w-24 text-orange-500" fill="none">
        <path d="M2 8c22-6 60-8 116-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
