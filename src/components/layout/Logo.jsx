/*
 * Logotype Bantou Connexion tel qu'il apparaît en tête de chaque planche du PDF :
 * « BANTOU » en Montserrat black, dont le A est remplacé par un chevron orange,
 * puis « CONNEXION » en capitales très espacées sur la ligne du dessous.
 */
export default function Logo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="sr-only">Bantou Connexion</span>

      <span
        aria-hidden="true"
        className={`flex items-baseline font-display font-black tracking-[0.02em] text-white ${
          compact ? 'text-lg' : 'text-xl sm:text-[1.6rem]'
        }`}
      >
        B
        {/* Le « A » du logotype : chevron plein orange. */}
        <svg viewBox="0 0 24 24" className="mx-[0.06em] h-[0.78em] w-[0.66em] self-center text-orange-500" fill="none">
          <path d="M12 3 22 21h-4.6L12 11.4 6.6 21H2z" fill="currentColor" />
        </svg>
        NTOU
      </span>

      <span
        aria-hidden="true"
        className={`mt-1 font-display font-semibold text-white/75 ${
          compact ? 'text-[0.5rem] tracking-[0.42em]' : 'text-[0.56rem] tracking-[0.46em] sm:text-[0.62rem]'
        }`}
      >
        CONNEXION
      </span>
    </span>
  );
}
