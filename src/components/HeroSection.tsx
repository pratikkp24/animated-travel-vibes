
import React from 'react';
import TypingAnimation from './TypingAnimation';
import EarlyAccessForm from './EarlyAccessForm';
import RocketAnimation from './RocketAnimation';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 md:mb-12 relative">
      <RocketAnimation isVisible={isVisible} />
      
      <div className={`mb-4 opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
        <TypingAnimation />
      </div>
      
      <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
        Something exciting is <span className="text-gradient">coming soon</span>
      </h1>
      
      <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
        A whole new world of travel is landing soon — are you packed?
      </p>
      
      <div className={`opacity-0 ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
        <EarlyAccessForm />
      </div>
    </div>
  );
};

export default HeroSection;
