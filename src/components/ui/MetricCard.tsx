import type { ComponentType } from 'react';
import type { IconProps } from '@phosphor-icons/react';

type IconType = ComponentType<IconProps>;

interface MetricCardProps {
  icon: IconType;
  label: string;
  value: string | number;
  subtext: string | React.ReactNode;
  benchmark?: {
    label: string;
    value: string;
  };
  colorScheme: 'teal' | 'magenta' | 'emerald' | 'orange';
  className?: string;
}

export function MetricCard({ 
  icon: IconComponent, 
  label, 
  value, 
  subtext, 
  benchmark,
  colorScheme,
  className = ''
}: MetricCardProps) {
  const colorClasses = {
    teal: 'bg-teal-50 border-teal-100',
    magenta: 'bg-pink-50 border-2 border-brand-magenta',
    emerald: 'bg-emerald-50 border-emerald-100',
    orange: 'bg-orange-50 border-orange-100',
  };

  return (
    <div className={`flex flex-col items-center rounded-2xl ${colorClasses[colorScheme]} p-6 text-center h-full overflow-hidden ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <IconComponent className="w-5 h-5 text-slate-500 flex-shrink-0" weight="duotone" />
        <span className="text-sm text-slate-600 font-medium text-center leading-tight">{label}</span>
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-brand-navy mb-1">{value}</div>
      <div className="text-xs text-slate-500 mb-2">{subtext}</div>
      
      {benchmark && (
        <div className="text-[11px] text-slate-400 border-t border-slate-300/30 pt-2 mt-2 w-full">
          ↳ {benchmark.label}: <span className="font-semibold">{benchmark.value}</span>
        </div>
      )}
    </div>
  );
}
