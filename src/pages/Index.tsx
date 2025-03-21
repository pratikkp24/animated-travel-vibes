
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import BackgroundEffect from '@/components/BackgroundEffect';
import { Package, Compass, Users, Heart } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import TypingAnimation from '@/components/TypingAnimation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundEffect />
      
      <header className="w-full pt-6 px-6">
        <div className="max-w-screen-xl mx-auto flex justify-start">
          <div className="animate-slide-up">
            <Logo size="md" animated={false} imageSrc="/lovable-uploads/8ef10f67-4be2-44c7-8331-150171b1f4db.png" hideText={true} />
          </div>
        </div>
      </header>
      
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className={`mb-4 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}>
            <Logo size="lg" animated={true} imageSrc="/lovable-uploads/78cc655e-778f-49b2-b0e4-95ee9099c8a0.png" />
          </div>
          
          <div className={`mb-6 opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            <TypingAnimation />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            Something exciting is <span className="text-gradient">coming soon</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
            We're working on creating the ultimate travel experience. Get ready to discover the world with us.
          </p>
          
          <div className={`text-xl font-medium text-trav-primary opacity-0 ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
            Launching Soon
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
          <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
            <CardHeader className="p-0 pb-4">
              <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
                <Package className="text-trav-primary" />
              </div>
              <h3 className="text-xl font-semibold">Wander Pack</h3>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-trav-muted">Soon, you'll unlock access to destination guides, packing tips, and travel hacks curated just for you.</p>
            </CardContent>
          </Card>
          
          <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
            <CardHeader className="p-0 pb-4">
              <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
                <Compass className="text-trav-primary" />
              </div>
              <h3 className="text-xl font-semibold">Explore Mode</h3>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-trav-muted">Get ready to experience our upcoming surprise trip planner — drop a pin, get inspired, and see where the wind might take you!</p>
            </CardContent>
          </Card>
          
          <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
            <CardHeader className="p-0 pb-4">
              <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
                <Users className="text-trav-primary" />
              </div>
              <h3 className="text-xl font-semibold">Travel Tribe</h3>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-trav-muted">In the near future, you'll be able to join exclusive traveler groups, connect with like-minded explorers, and start building your travel community.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="w-full py-8 px-6 border-t border-trav-primary/10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-trav-muted">© {new Date().getFullYear()} trav. All rights reserved.</p>
          <div className="flex items-center text-sm text-trav-muted">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> in India
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
