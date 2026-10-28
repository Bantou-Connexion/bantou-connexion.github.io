/*
 * Logo Bantou Connexion de la maquette V2 : monogramme « BC », filet vertical,
 * « BANTOU » et « CONNEXION ». Le fichier est un PNG à fond transparent conçu
 * pour les fonds sombres (285×81).
 */
export default function Logo({ compact = false, className = '' }) {
  return (
    <img
      src="/images/logo.png"
      alt="Bantou Connexion"
      width="285"
      height="81"
      decoding="async"
      className={`w-auto transition-[height] duration-300 ${compact ? 'h-9 sm:h-10' : 'h-11 sm:h-14'} ${className}`}
    />
  );
}
