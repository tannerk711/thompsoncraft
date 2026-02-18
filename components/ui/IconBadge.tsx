import type { LucideIcon } from 'lucide-react';

type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeVariant = 'bronze' | 'cream' | 'white';

interface IconBadgeProps {
  icon: LucideIcon;
  size?: BadgeSize;
  variant?: BadgeVariant;
  className?: string;
}

const sizeStyles: Record<BadgeSize, { container: string; icon: string }> = {
  sm: { container: 'w-10 h-10', icon: 'w-5 h-5' },
  md: { container: 'w-14 h-14', icon: 'w-7 h-7' },
  lg: { container: 'w-16 h-16', icon: 'w-8 h-8' },
};

const variantStyles: Record<BadgeVariant, { bg: string; icon: string }> = {
  bronze: { bg: 'bg-bronze', icon: 'text-white' },
  cream: { bg: 'bg-cream-dark', icon: 'text-bronze' },
  white: { bg: 'bg-white', icon: 'text-bronze' },
};

export default function IconBadge({
  icon: Icon,
  size = 'md',
  variant = 'cream',
  className = '',
}: IconBadgeProps) {
  const { container, icon } = sizeStyles[size];
  const { bg, icon: iconColor } = variantStyles[variant];

  return (
    <div
      className={`${container} rounded-full ${bg} flex items-center justify-center ${className}`}
    >
      <Icon className={`${icon} ${iconColor}`} />
    </div>
  );
}
