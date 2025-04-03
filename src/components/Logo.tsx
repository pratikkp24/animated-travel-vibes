
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  imageSrc?: string;
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  imageSrc,
  hideText = false
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt="Trav Logo" 
          className={cn(sizeClasses[size], "object-contain")}
        />
      )}
      <span className={cn(
        "font-semibold tracking-tight text-[#079768] font-poppins",
        size === 'sm' && "text-xl",
        size === 'md' && "text-2xl",
        size === 'lg' && "text-3xl"
      )}>
        trav
      </span>
    </div>
  );
};

export default Logo;
