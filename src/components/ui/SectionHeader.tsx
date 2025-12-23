interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = '', 
  titleClassName = '',
  dark = false 
}: SectionHeaderProps) {
  const textColor = dark ? 'text-white' : 'text-brand-navy';
  const subtextColor = dark ? 'text-slate-300' : 'text-slate-600';
  
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtextColor} max-w-3xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
