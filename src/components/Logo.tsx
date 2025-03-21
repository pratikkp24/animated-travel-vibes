
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "relative rounded-lg border-2 border-trav-primary overflow-hidden bg-white", 
        sizeClasses[size],
        animated && "animate-pulse"
      )}>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-trav-primary"></div>
        <div className={cn(
          "absolute -right-3 -bottom-3 w-8 h-8 rounded-tl-lg bg-trav-primary",
          animated && "animate-wave"
        )}></div>
      </div>
      <span className={cn(
        "font-bold tracking-tight",
        size === 'sm' && "text-xl",
        size === 'md' && "text-2xl",
        size === 'lg' && "text-3xl",
        animated && "animate-fade-in"
      )}>
        trav
      </span>
    </div>
  );
};

export default Logo;
