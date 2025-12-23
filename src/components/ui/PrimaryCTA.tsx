import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import type { IconProps } from '@phosphor-icons/react';

// Type for Phosphor icons
type IconType = ComponentType<IconProps>;

interface PrimaryCTAProps {
  children?: React.ReactNode;
  icon?: IconType;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  id?: string;
  'aria-label'?: string;
  'data-track'?: string;
}

export function PrimaryCTA({ 
  children = 'Get My Conversion Audit', 
  icon: IconComponent,
  onClick,
  href,
  to,
  className = '',
  id,
  'aria-label': ariaLabel,
  'data-track': dataTrack,
}: PrimaryCTAProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-10 py-4 text-base md:text-lg font-semibold text-white shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2 active:scale-95 ${className}`;
  
  const content = (
    <>
      {children}
      {IconComponent && <IconComponent className="w-5 h-5 group-hover:translate-x-1 transition-transform" weight="bold" />}
    </>
  );
  
  // React Router Link for internal navigation
  if (to) {
    return (
      <Link 
        to={to} 
        className={classes}
        id={id}
        aria-label={ariaLabel}
        data-track={dataTrack}
      >
        {content}
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        id={id}
        aria-label={ariaLabel}
        data-track={dataTrack}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={classes}
      id={id}
      aria-label={ariaLabel}
      data-track={dataTrack}
    >
      {content}
    </button>
  );
}
