/*
 * Jeu d'icônes « line » unique du site.
 *
 * Style repris du PDF : traits fins et arrondis, couleur héritée du contexte
 * (orange sur fond clair, orange ou blanc sur fond sombre). Aucune dépendance
 * externe : le tree-shaking garde le bundle minimal.
 */

const paths = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  play: <path d="M8 5.2v13.6L19 12z" />,
  users: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M2 21v-1.8A5 5 0 0 1 7 14.2h4a5 5 0 0 1 5 5V21" />
      <circle cx="18" cy="8" r="2.4" />
      <path d="M18.4 13.2A4 4 0 0 1 22 17.1V21" />
    </>
  ),
  binoculars: (
    <>
      <path d="M7 4h3v6H7zM14 4h3v6h-3z" />
      <path d="M7 10 4.5 17.4a3 3 0 1 0 5.7 1.9L11 15M17 10l2.5 7.4a3 3 0 1 1-5.7 1.9L13 15" />
      <path d="M10 7h4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9.2 17.5h5.6M10 20.5h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2h5.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    </>
  ),
  star: <path d="m12 3.2 2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17l-5.4 2.9 1.2-6.1L3.3 9.6l6.1-.8z" />,
  handshake: (
    <>
      <path d="m3 12.5 3.4-3.4a2 2 0 0 1 2.8 0L12 12l1.4-1.4a2 2 0 0 1 2.8 0L21 15.3" />
      <path d="M12 12 9.6 14.4a1.7 1.7 0 0 0 2.4 2.4l.6-.6.9.9a1.7 1.7 0 0 0 2.4-2.4" />
      <path d="M3 9.5 6.5 6h4M21 12.5 17.5 9h-3" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5.5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="18.5" r="2.6" />
      <path d="m8.4 10.7 7.2-3.9M8.4 13.3l7.2 3.9" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V13M10 20V7M16 20v-5M22 20V4" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6.5l11-2V16" />
      <circle cx="6.5" cy="18" r="2.6" />
      <circle cx="17.5" cy="16" r="2.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6.5" rx="7" ry="3" />
      <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      <path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.2 14.6a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.4 14H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9.8 3.4V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.6 1.1z" />
    </>
  ),
  shield: <path d="M12 2.5 3.5 6.4v6.1c0 5 3.7 8 8.5 9.1 4.8-1.1 8.5-4.1 8.5-9.1V6.4z" />,
  trending: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M8.5 9 12 3l3.5 6M8.5 9 12 21l3.5-12" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-9 5-15 16-16 1 11-4 16-11 16-2.6 0-5-1-5-1z" />
      <path d="M4 20c3-6 7-9 12-11" />
    </>
  ),
  chat: (
    <>
      <path d="M14.5 15.5H8l-4 3v-3H3.5A2.5 2.5 0 0 1 1 13V6.5A2.5 2.5 0 0 1 3.5 4h11A2.5 2.5 0 0 1 17 6.5V13a2.5 2.5 0 0 1-2.5 2.5z" />
      <path d="M19 8.5h1.5A2.5 2.5 0 0 1 23 11v6.5a2.5 2.5 0 0 1-2.5 2.5H20v2.5l-3-2.5h-4" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.4v.1" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.1.4 2.2.7 3.2a2 2 0 0 1-.5 2.1L8 10.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 2.1.6 3.2.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4.5" r="2" />
      <path d="M10 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6h-4z" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9v6l5-3z" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  chevron: <path d="m9 5 7 7-7 7" />,
};

export const iconNames = Object.keys(paths);

/**
 * @param {{ name: keyof typeof paths, className?: string, strokeWidth?: number, title?: string }} props
 */
export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.7, title }) {
  const d = paths[name];
  if (!d) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {d}
    </svg>
  );
}
