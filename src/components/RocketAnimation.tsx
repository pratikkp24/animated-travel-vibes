
import React, { useEffect, useState } from 'react';

interface RocketAnimationProps {
  isVisible: boolean;
}

const RocketAnimation: React.FC<RocketAnimationProps> = ({ isVisible }) => {
  const [showLaunchingText, setShowLaunchingText] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !animationStarted) {
      setAnimationStarted(true);
      
      // Trigger "Launching Soon" text after rocket passes mid-screen (2.5s into 3.2s animation)
      const textTimer = setTimeout(() => {
        setShowLaunchingText(true);
      }, 2500);
      
      return () => {
        clearTimeout(textTimer);
      };
    }
  }, [isVisible, animationStarted]);

  // Reset animation for loop behavior when it completes
  useEffect(() => {
    if (animationStarted) {
      const resetTimer = setTimeout(() => {
        setAnimationStarted(false);
        setShowLaunchingText(false);
      }, 6000); // Animation (3.2s) + extra time for text visibility
      
      return () => {
        clearTimeout(resetTimer);
      };
    }
  }, [animationStarted]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Rocket Animation - Desktop */}
      <div className={`
        hidden md:block absolute 
        ${animationStarted ? 'animate-rocket-fly-desktop' : '-left-20 top-1/3'}
        transition-all duration-300
      `}>
        <div className="relative">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.5 16.5L3 18L4.5 19.5L6 21L7.5 19.5M12 15L9 18H13.5L15 16.5M16.5 9L15 10.5V15L16.5 16.5L18 15L19.5 13.5L21 12L19.5 10.5L18 9L16.5 7.5L15 6L13.5 7.5L12 9L10.5 10.5L9 12L10.5 13.5L12 15L13.5 13.5L15 12M4.5 12L3 13.5L4.5 15L6 13.5L7.5 12L9 10.5L7.5 9L6 7.5L4.5 9L3 10.5L4.5 12Z"
              className="stroke-trav-primary"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <div className="rocket-trail absolute -right-8 -top-2 w-8 h-4">
              <div className="absolute w-2 h-2 bg-trav-primary/20 rounded-full animate-trail-1"></div>
              <div className="absolute w-3 h-3 bg-trav-primary/30 rounded-full animate-trail-2"></div>
              <div className="absolute w-1 h-1 bg-trav-primary/40 rounded-full animate-trail-3"></div>
            </div>
          </svg>
        </div>
      </div>
      
      {/* Rocket Animation - Mobile */}
      <div className={`
        md:hidden absolute
        ${animationStarted ? 'animate-rocket-fly-mobile' : '-bottom-10 -left-10'}
        transition-all duration-300
      `}>
        <div className="relative rotate-45">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.5 16.5L3 18L4.5 19.5L6 21L7.5 19.5M12 15L9 18H13.5L15 16.5M16.5 9L15 10.5V15L16.5 16.5L18 15L19.5 13.5L21 12L19.5 10.5L18 9L16.5 7.5L15 6L13.5 7.5L12 9L10.5 10.5L9 12L10.5 13.5L12 15L13.5 13.5L15 12M4.5 12L3 13.5L4.5 15L6 13.5L7.5 12L9 10.5L7.5 9L6 7.5L4.5 9L3 10.5L4.5 12Z"
              className="stroke-trav-primary"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <div className="rocket-trail absolute -right-6 -top-1 w-6 h-3">
              <div className="absolute w-1.5 h-1.5 bg-trav-primary/20 rounded-full animate-trail-mobile-1"></div>
              <div className="absolute w-2 h-2 bg-trav-primary/30 rounded-full animate-trail-mobile-2"></div>
              <div className="absolute w-1 h-1 bg-trav-primary/40 rounded-full animate-trail-mobile-3"></div>
            </div>
          </svg>
        </div>
      </div>
      
      {/* Launching Soon Text */}
      <div className={`
        absolute left-1/2 transform -translate-x-1/2
        md:top-1/3 md:mt-16 
        top-1/2 -mt-12
        transition-opacity duration-1000
        ${showLaunchingText ? 'opacity-100' : 'opacity-0'}
      `}>
        <p className="text-trav-primary text-lg md:text-xl font-light animate-fade-up">
          Launching Soon
        </p>
      </div>
    </div>
  );
};

export default RocketAnimation;
