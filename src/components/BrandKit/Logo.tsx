import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
        id="sales-iq-logo-svg"
      >
        {/* Background rounded squircle */}
        <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
        
        {/* Network connections (Memory Layer) */}
        <circle cx="10" cy="22" r="2.5" fill="white" />
        <circle cx="22" cy="22" r="2.5" fill="white" />
        <circle cx="16" cy="11" r="3.5" fill="white" />
        
        {/* Connecting lines */}
        <line x1="10" y1="22" x2="16" y2="11" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 1" />
        <line x1="22" y1="22" x2="16" y2="11" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="1 1" />
        <line x1="10" y1="22" x2="22" y2="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        
        {/* Glowing pulse rings around the central cognitive node */}
        <circle cx="16" cy="11" r="6" stroke="white" strokeWidth="1" strokeOpacity="0.3" className="animate-pulse" />
        
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Text Label */}
      {showText && (
        <span className="font-display font-bold tracking-tight text-slate-900 text-lg transition-colors hover:text-brand-blue">
          Sales<span className="text-brand-blue">IQ</span>
        </span>
      )}
    </div>
  );
};
