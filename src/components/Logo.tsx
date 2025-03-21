
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

  if (imageSrc) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <img 
          src={imageSrc} 
          alt="trav logo" 
          className={cn(
            "rounded-lg", 
            sizeClasses[size]
          )}
        />
        {!hideText && (
          <span className={cn(
            "font-bold tracking-tight",
            size === 'sm' && "text-xl",
            size === 'md' && "text-2xl",
            size === 'lg' && "text-3xl"
          )}>
            trav
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "relative rounded-lg border-2 border-trav-primary overflow-hidden bg-white", 
        sizeClasses[size],
        "w-auto aspect-square",
        animated && "animate-pulse"
      )}>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-trav-primary"></div>
        <div className={cn(
          "absolute -right-3 -bottom-3 w-8 h-8 rounded-tl-lg bg-trav-primary",
          animated && "animate-wave"
        )}></div>
      </div>
      {!hideText && (
        <span className={cn(
          "font-bold tracking-tight",
          size === 'sm' && "text-xl",
          size === 'md' && "text-2xl",
          size === 'lg' && "text-3xl"
        )}>
          trav
        </span>
      )}
    </div>
  );
};

export default Logo;
