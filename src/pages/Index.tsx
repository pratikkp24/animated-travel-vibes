
import React, { useEffect, useState } from 'react';
import BackgroundEffect from '@/components/BackgroundEffect';
import PageHeader from '@/components/PageHeader';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import PageFooter from '@/components/PageFooter';
import BoardingPassPuzzle from '@/components/BoardingPassPuzzle';
import '@/components/BoardingPassPuzzle.css';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

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
  
  const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/trav.tribe/', '_blank');
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundEffect />
      
      <PageHeader />
      
      <BoardingPassPuzzle />
      
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center">
        <HeroSection isVisible={isVisible} />
        <FeatureCards />
        
        <Button
          onClick={handleInstagramRedirect}
          className="mt-8 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:bg-gradient-to-r hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90 text-white border-none"
        >
          <Instagram size={18} className="mr-2" />
          Follow us on Instagram
        </Button>
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Index;
