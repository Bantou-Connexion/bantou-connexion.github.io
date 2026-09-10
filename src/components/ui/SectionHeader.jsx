import Reveal from './Reveal';

/*
 * En-tête de section reprise à l'identique du PDF :
 * gros numéro orange, filet, surtitre en capitales espacées,
 * puis titre ultra-bold dont une partie est mise en orange.
 */
export default function SectionHeader({ num, eyebrow, titleLead, titleHighlight, intro, tone = 'dark', className = '' }) {
  const isDark = tone === 'dark'; // « dark » = texte sombre sur fond clair
  const titleColor = isDark ? 'text-navy-900' : 'text-white';
  const introColor = isDark ? 'text-ink-muted' : 'text-white/70';
  const eyebrowColor = isDark ? 'text-navy-900/60' : 'text-white/60';

  return (
    <header className={`max-w-3xl ${className}`}>
      <Reveal className="flex items-center gap-4">
        <span className="font-display text-[2.8rem] font-black leading-none text-orange-500 sm:text-[3.4rem]">{num}</span>
        <span className="block h-[3px] w-8 shrink-0 bg-orange-500" aria-hidden="true" />
        <span className={`font-display text-eyebrow font-extrabold uppercase ${eyebrowColor}`}>{eyebrow}</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className={`mt-4 text-display-lg ${titleColor}`}>
          {titleLead}
          <span className="text-orange-500">{titleHighlight}</span>
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={140}>
          <p className={`mt-5 max-w-2xl text-[1.02rem] leading-relaxed ${introColor}`}>{intro}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
