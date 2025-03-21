
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import BackgroundEffect from '@/components/BackgroundEffect';
import { Globe } from 'lucide-react';

const Index = () => {
  // Set launch date to 45 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 45);
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Format date as Month DD, YYYY
  const formattedDate = launchDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundEffect />
      
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mb-12">
          <div className={`mb-8 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}>
            <Logo size="lg" animated={true} />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            Something exciting is <span className="text-gradient">coming soon</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
            We're working on creating the ultimate travel experience. Get ready to discover the world with us.
          </p>
          
          <div className={`text-xl font-medium text-trav-primary opacity-0 ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
            Launching {formattedDate}
          </div>
        </div>
        
        <div className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4 max-w-md w-full">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Globe className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Your journey begins soon</h3>
          <p className="text-trav-muted">Plan trips, explore destinations, and connect with travelers worldwide - all in one place.</p>
        </div>
      </div>
      
      <footer className="w-full py-8 px-6 border-t border-trav-primary/10">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center">
          <p className="text-sm text-trav-muted">© {new Date().getFullYear()} trav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
