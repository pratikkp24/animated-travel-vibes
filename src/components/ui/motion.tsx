
import React, { useEffect, useRef, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  type?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scale';
  threshold?: number;
}

export const motion = {
  div: ({ 
    children, 
    delay = 0, 
    duration = 0.5, 
    className = '', 
    type = 'fadeIn',
    threshold = 0.1
  }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              
              switch (type) {
                case 'fadeIn':
                  element.style.transform = 'translateY(0)';
                  break;
                case 'slideUp':
                  element.style.transform = 'translateY(0)';
                  break;
                case 'slideDown':
                  element.style.transform = 'translateY(0)';
                  break;
                case 'scale':
                  element.style.transform = 'scale(1)';
                  break;
              }
            }, delay * 1000);
            
            observer.unobserve(element);
          }
        },
        { threshold }
      );
      
      element.style.opacity = '0';
      element.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
      
      switch (type) {
        case 'fadeIn':
          element.style.transform = 'translateY(10px)';
          break;
        case 'slideUp':
          element.style.transform = 'translateY(20px)';
          break;
        case 'slideDown':
          element.style.transform = 'translateY(-20px)';
          break;
        case 'scale':
          element.style.transform = 'scale(0.95)';
          break;
      }
      
      observer.observe(element);
      
      return () => {
        if (element) observer.unobserve(element);
      };
    }, [delay, duration, type, threshold]);
    
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
};
