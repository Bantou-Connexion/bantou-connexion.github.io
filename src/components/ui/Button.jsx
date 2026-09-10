import Icon from './Icon';

/*
 * Bouton de la charte : angles quasi vifs, libellé Montserrat capitalisé,
 * flèche « → » à droite. Trois variantes reprises du PDF.
 */
const variants = {
  orange: 'bg-orange-500 text-white border-orange-500 hover:bg-orange-400 hover:shadow-orange',
  outline: 'border-white/55 text-white hover:bg-white/10 hover:border-white',
  navy: 'bg-navy-900 text-white border-navy-900 hover:bg-navy-700 hover:shadow-card-hover',
  ghost: 'border-navy-900/25 text-navy-900 hover:border-orange-500 hover:text-orange-500',
};

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-sharp border-2 px-6 py-3.5 ' +
  'font-display text-[0.82rem] font-extrabold tracking-wide transition-all duration-300 ' +
  'hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-60';

export default function Button({
  as: Tag = 'a',
  variant = 'orange',
  withArrow = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`${base} ${variants[variant] ?? variants.orange} ${className}`} {...rest}>
      <span>{children}</span>
      {withArrow ? (
        <Icon
          name="arrow"
          strokeWidth={2.2}
          className="h-[1.05em] w-[1.05em] shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      ) : null}
    </Tag>
  );
}
