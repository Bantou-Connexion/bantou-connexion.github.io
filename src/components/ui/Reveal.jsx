import useReveal from '../../hooks/useReveal';

/*
 * Enveloppe d'animation d'entrée (fade-in + slide-up).
 *
 * `delay` permet d'échelonner les enfants d'une grille sans multiplier les
 * classes utilitaires ; il est plafonné pour éviter les attentes trop longues.
 */
const variants = {
  up: 'translate-y-7',
  left: '-translate-x-8',
  right: 'translate-x-8',
  none: '',
};

export default function Reveal({ children, as: Tag = 'div', variant = 'up', delay = 0, className = '', ...rest }) {
  const { ref, isVisible } = useReveal();
  const hiddenTransform = variants[variant] ?? variants.up;

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${Math.min(delay, 480)}ms` } : undefined}
      className={[
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `opacity-0 ${hiddenTransform}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
