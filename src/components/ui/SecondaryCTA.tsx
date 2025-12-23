import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import type { IconProps } from '@phosphor-icons/react';

type IconType = ComponentType<IconProps>;

interface SecondaryCTAProps {
  children: React.ReactNode;
  icon?: IconType;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  id?: string;
  'aria-label'?: string;
  'data-track'?: string;
}

export function SecondaryCTA({ 
  children, 
  icon: IconComponent,
  onClick,
  href,
  to,
  className = '',
  id,
  'aria-label': ariaLabel,
  'data-track': dataTrack,
}: SecondaryCTAProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base md:text-lg font-medium text-slate-900 hover:border-brand-magenta hover:text-brand-magenta hover:bg-pink-50 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 ${className}`;
  
  const content = (
    <>
      {children}
      {IconComponent && <IconComponent className="w-5 h-5" weight="bold" />}
    </>
  );
  
  // React Router Link for internal navigation
  if (to) {
    return <Link to={to} className={classes} id={id} aria-label={ariaLabel} data-track={dataTrack}>{content}</Link>;
  }
  
  // External link
  if (href) {
    return <a href={href} className={classes} id={id} aria-label={ariaLabel} data-track={dataTrack}>{content}</a>;
  }
  
  return <button onClick={onClick} className={classes} id={id} aria-label={ariaLabel} data-track={dataTrack}>{content}</button>;
}
