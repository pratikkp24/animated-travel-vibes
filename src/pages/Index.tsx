
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';
import TravelCards from '@/components/TravelCards';
import BackgroundEffect from '@/components/BackgroundEffect';
import { Globe, MapPin, Palm, Mountain, Building } from 'lucide-react';

const Index = () => {
  // Set launch date to 45 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 45);
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const destinations = [
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Indonesia", flag: "🇮🇩" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "France", flag: "🇫🇷" },
  ];
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center relative overflow-hidden">
      <BackgroundEffect />
      
      {/* Navbar */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        <Logo animated={false} />
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-trav-muted hover:text-trav-primary transition-colors">About</a>
          <a href="#" className="text-trav-muted hover:text-trav-primary transition-colors">Features</a>
          <a href="#" className="text-trav-muted hover:text-trav-primary transition-colors">Contact</a>
        </nav>
      </header>
      
      {/* Main content */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <div className={`inline-flex items-center px-3 py-1 rounded-full bg-trav-secondary text-trav-primary text-sm font-medium mb-6 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}>
            <span className="mr-1">✨</span> Coming Soon
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            Discover the world with <span className="text-gradient">trav</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
            Your personal travel companion. Plan trips, explore destinations, and connect with travelers worldwide.
          </p>
          
          <CountdownTimer targetDate={launchDate} />
          
          <EmailSignup />
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-2">
            <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
              <Globe className="text-trav-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore Destinations</h3>
            <p className="text-trav-muted">Discover breathtaking locations and get personalized recommendations based on your travel style.</p>
          </div>
          
          <div className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-3">
            <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
              <MapPin className="text-trav-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Plan Your Journey</h3>
            <p className="text-trav-muted">Create detailed itineraries, book accommodations, and organize your trips all in one place.</p>
          </div>
          
          <div className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
            <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
              <Palm className="text-trav-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect with Travelers</h3>
            <p className="text-trav-muted">Share experiences, get advice, and join a community of passionate travelers from around the world.</p>
          </div>
        </div>
        
        {/* Popular Destinations */}
        <div className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {destinations.map((destination, index) => (
              <div 
                key={index} 
                className="py-2 px-4 rounded-full glassmorphism flex items-center gap-2 opacity-0" 
                style={{ 
                  animationName: 'slideUp', 
                  animationDuration: '0.5s', 
                  animationDelay: `${0.1 * index}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <span>{destination.flag}</span>
                <span>{destination.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-trav-primary text-white opacity-0 animate-slide-up-delay-2">
              <Palm size={18} />
              <span>Beach</span>
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-trav-primary/20 text-trav-primary opacity-0 animate-slide-up-delay-3">
              <Mountain size={18} />
              <span>Mountain</span>
            </button>
            <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-trav-primary/20 text-trav-primary opacity-0 animate-slide-up-delay-4">
              <Building size={18} />
              <span>City</span>
            </button>
          </div>
          
          <TravelCards />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 px-6 border-t border-trav-primary/10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo size="sm" animated={false} />
            <p className="text-sm text-trav-muted mt-2">Your journey begins here.</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-trav-muted">
            <a href="#" className="hover:text-trav-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-trav-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-trav-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
