import { useEffect, useRef, useState } from 'react';

/*
 * Révélation au scroll via IntersectionObserver.
 *
 * Un seul observateur partagé par élément, déconnecté dès le déclenchement :
 * pas d'écouteur de scroll, donc aucun coût sur le thread principal après coup.
 * Si l'API est absente (très vieux navigateurs) ou si l'utilisateur a demandé
 * moins d'animations, le contenu est affiché immédiatement.
 */
export default function useReveal({ threshold = 0.14, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
