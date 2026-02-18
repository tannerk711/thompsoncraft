import { ShieldCheck, Shield, Leaf, Clock, MapPin } from 'lucide-react';
import type { TrustBadgesProps } from '@/types';

const badges = [
  { icon: ShieldCheck, label: 'Licensed' },
  { icon: Shield, label: 'Fully Insured' },
  { icon: Leaf, label: 'Eco-Friendly' },
  { icon: Clock, label: 'Same-Day Service' },
  { icon: MapPin, label: 'Locally Owned' },
];

export default function TrustBadges({
  variant = 'light',
  layout = 'row',
}: TrustBadgesProps) {
  const iconColor = variant === 'dark' ? 'text-bronze-light' : 'text-bronze';
  const labelColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const bgColor = variant === 'dark' ? 'bg-white/10' : 'bg-cream-dark';

  const layoutClass =
    layout === 'row'
      ? 'flex flex-wrap items-center justify-center gap-6'
      : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6';

  return (
    <div className={layoutClass}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`flex items-center gap-3 ${
            layout === 'grid'
              ? `${bgColor} rounded-xl px-4 py-3 justify-center`
              : ''
          }`}
        >
          <badge.icon className={`w-5 h-5 flex-shrink-0 ${iconColor}`} />
          <span className={`text-sm font-medium ${labelColor}`}>
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
