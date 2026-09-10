import { useEffect, useState } from 'react';

/*
 * Surligne l'entrée de menu correspondant à la section visible.
 *
 * On observe les sections plutôt que la position de scroll : pas de calcul
 * de layout à chaque frame, et le résultat reste juste quelle que soit la
 * hauteur des sections.
 */
export default function useScrollSpy(ids, { offset = 96 } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });

        if (visible.size === 0) return;
        // La section la plus visible l'emporte.
        const [best] = [...visible.entries()].sort((a, b) => b[1] - a[1]);
        setActiveId(best[0]);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.05, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
