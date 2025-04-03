
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  hideText = false
}) => {
  const textSizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {!hideText && (
        <span className={cn(
          "font-semibold tracking-tight text-[#079768] font-poppins",
          textSizeClasses[size]
        )}>
          trav
        </span>
      )}
    </div>
  );
};

export default Logo;
