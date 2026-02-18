import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

type ButtonVariant = 'bronze' | 'outline' | 'white' | 'charcoal';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const variantStyles: Record<ButtonVariant, string> = {
  bronze:
    'bg-bronze text-white shadow-lg hover:bg-bronze/90 hover:shadow-xl',
  outline:
    'border-2 border-cream text-cream hover:bg-cream hover:text-charcoal',
  white:
    'bg-white text-charcoal shadow-lg hover:bg-cream',
  charcoal:
    'bg-charcoal text-white shadow-lg hover:bg-charcoal-light',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'bronze',
  size = 'md',
  icon: Icon,
  className = '',
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all hover-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze disabled:opacity-50 disabled:pointer-events-none';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
