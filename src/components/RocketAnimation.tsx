
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
      
      // Show "Launching Soon" text after the rocket has traveled some distance
      // Now showing text after 4s (80% through 5s animation)
      const textTimer = setTimeout(() => {
        setShowLaunchingText(true);
      }, 4000);
      
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
      }, 9000); // Animation (5s) + extra time for text visibility (4s)
      
      return () => {
        clearTimeout(resetTimer);
      };
    }
  }, [animationStarted]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Clouds */}
      <div className="absolute inset-0 z-0">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>
      
      {/* Rocket Animation - Desktop */}
      <div className={`
        hidden md:block absolute 
        ${animationStarted ? 'animate-rocket-fly-desktop' : '-left-20 top-1/3'}
        transition-all duration-300 z-10
      `}>
        <div className="relative">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rocket Flame */}
            <path className="rocket-flame" d="M40 90 L30 120 L40 105 L50 120 L40 90" fill="#F6B93B" />
            
            {/* Rocket Body */}
            <ellipse cx="40" cy="60" rx="20" ry="40" fill="#F5F7FA" stroke="#E1E8ED" strokeWidth="1" />
            
            {/* Rocket Bottom */}
            <path d="M20 80 Q40 90, 60 80" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Fins */}
            <path d="M15 75 L5 90 L20 80 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <path d="M65 75 L75 90 L60 80 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Top */}
            <path d="M20 20 Q40 0, 60 20" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Window */}
            <circle cx="40" cy="40" r="8" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <path d="M37 40 L43 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 37 L40 43" stroke="white" strokeWidth="2" strokeLinecap="round" />
            
            {/* Rocket Porthole */}
            <circle cx="40" cy="65" r="3" fill="#4A4A4A" />
          </svg>
          
          {/* Rocket Trail */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="absolute w-6 h-6 bg-orange-300/30 rounded-full animate-trail-1"></div>
            <div className="absolute w-5 h-5 bg-orange-400/40 rounded-full animate-trail-2"></div>
            <div className="absolute w-4 h-4 bg-orange-500/50 rounded-full animate-trail-3"></div>
          </div>
        </div>
      </div>
      
      {/* Rocket Animation - Mobile */}
      <div className={`
        md:hidden absolute
        ${animationStarted ? 'animate-rocket-fly-mobile' : '-bottom-20 -left-20'}
        transition-all duration-300 z-10
      `}>
        <div className="relative">
          <svg width="60" height="90" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rocket Flame */}
            <path className="rocket-flame" d="M40 90 L30 120 L40 105 L50 120 L40 90" fill="#F6B93B" />
            
            {/* Rocket Body */}
            <ellipse cx="40" cy="60" rx="20" ry="40" fill="#F5F7FA" stroke="#E1E8ED" strokeWidth="1" />
            
            {/* Rocket Bottom */}
            <path d="M20 80 Q40 90, 60 80" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Fins */}
            <path d="M15 75 L5 90 L20 80 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <path d="M65 75 L75 90 L60 80 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Top */}
            <path d="M20 20 Q40 0, 60 20" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            
            {/* Rocket Window */}
            <circle cx="40" cy="40" r="8" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <path d="M37 40 L43 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 37 L40 43" stroke="white" strokeWidth="2" strokeLinecap="round" />
            
            {/* Rocket Porthole */}
            <circle cx="40" cy="65" r="3" fill="#4A4A4A" />
          </svg>
          
          {/* Rocket Trail */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="absolute w-4 h-4 bg-orange-300/30 rounded-full animate-trail-mobile-1"></div>
            <div className="absolute w-3 h-3 bg-orange-400/40 rounded-full animate-trail-mobile-2"></div>
            <div className="absolute w-2 h-2 bg-orange-500/50 rounded-full animate-trail-mobile-3"></div>
          </div>
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
