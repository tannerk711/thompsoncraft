interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  variant = 'light',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = variant === 'light' ? 'text-charcoal' : 'text-white';
  const subtitleColor =
    variant === 'light' ? 'text-slate-600' : 'text-slate-300';

  return (
    <div className={`${alignClass} mb-16`}>
      <h2
        className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-xl ${subtitleColor} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
