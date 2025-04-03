
import React, { useEffect, useState } from 'react';
import BackgroundEffect from '@/components/BackgroundEffect';
import PageHeader from '@/components/PageHeader';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import PageFooter from '@/components/PageFooter';
import BoardingPassPuzzle from '@/components/BoardingPassPuzzle';
import '@/components/BoardingPassPuzzle.css';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Add Poppins font for the boarding pass
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundEffect />
      
      <PageHeader />
      
      <BoardingPassPuzzle />
      
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center">
        <HeroSection isVisible={isVisible} />
        <FeatureCards />
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Index;
