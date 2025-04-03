
import React, { useEffect, useState } from 'react';
import BackgroundEffect from '@/components/BackgroundEffect';
import PageHeader from '@/components/PageHeader';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import PageFooter from '@/components/PageFooter';
import StarCatchGame from '@/components/StarCatchGame';
import BoardingPassPuzzle from '@/components/BoardingPassPuzzle';
import '@/components/BoardingPassPuzzle.css';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundEffect />
      
      <PageHeader />
      
      <StarCatchGame />
      
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
