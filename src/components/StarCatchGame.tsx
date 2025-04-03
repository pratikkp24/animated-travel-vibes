
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Star } from 'lucide-react';

interface StarProps {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  rotation: number;
  caught: boolean;
}

const StarCatchGame: React.FC = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState<StarProps[]>([]);
  const [showInstructions, setShowInstructions] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gameIntervalRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  
  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setStars([]);
    setShowInstructions(false);
    
    // Generate stars at interval
    if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    gameIntervalRef.current = window.setInterval(() => {
      if (stars.length < 10) { // Limit number of stars on screen
        const newStar = {
          id: Date.now(),
          x: Math.random() * 100, // Random horizontal position (percentage)
          y: 0, // Start at top
          speed: 1 + Math.random() * 2, // Random speed
          size: 20 + Math.random() * 15, // Random size between 20-35px
          rotation: Math.random() * 360, // Random rotation
          caught: false
        };
        
        setStars(prevStars => [...prevStars, newStar]);
      }
    }, 1000); // New star every second
    
    // Start animation loop
    animateStars();
  };
  
  const animateStars = () => {
    const updateStars = () => {
      setStars(prevStars => 
        prevStars
          .map(star => ({
            ...star,
            y: star.caught ? star.y : star.y + star.speed // Move uncaught stars down
          }))
          .filter(star => star.y < 100 || star.caught) // Remove stars that fell off bottom
      );
      
      animationFrameRef.current = requestAnimationFrame(updateStars);
    };
    
    animationFrameRef.current = requestAnimationFrame(updateStars);
  };
  
  const catchStar = (id: number) => {
    setStars(prevStars => 
      prevStars.map(star => 
        star.id === id && !star.caught 
          ? { ...star, caught: true } 
          : star
      )
    );
    
    setScore(prevScore => prevScore + 1);
    
    // Remove caught star after animation
    setTimeout(() => {
      setStars(prevStars => prevStars.filter(star => star.id !== id));
    }, 500);
  };
  
  const endGame = () => {
    if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    setIsGameActive(false);
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <div className="absolute top-6 right-6 z-30">
      {!isGameActive ? (
        <div 
          onClick={() => setShowInstructions(true)}
          className="cursor-pointer group"
        >
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm shadow-md border border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse">
            <Star className="h-6 w-6 text-yellow-300 group-hover:scale-110 transition-transform" />
          </div>
          <span className="absolute -bottom-2 right-0 text-xs font-medium px-2 py-0.5 bg-trav-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Play!
          </span>
        </div>
      ) : (
        <div ref={gameAreaRef} className="relative">
          <div className="absolute -top-4 left-0 right-0 flex justify-between items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
              Score: {score}
            </div>
            <button 
              onClick={endGame}
              className="bg-white/20 backdrop-blur-sm rounded-full p-1 hover:bg-white/30 transition-colors"
            >
              <span className="sr-only">Close game</span>
              ✕
            </button>
          </div>
          
          <div className="h-[300px] w-[200px] relative overflow-hidden bg-gradient-to-b from-purple-900/40 to-indigo-900/20 rounded-xl backdrop-blur-sm border border-white/10">
            {stars.map(star => (
              <div
                key={star.id}
                onClick={() => catchStar(star.id)}
                className={`absolute cursor-pointer transition-transform ${star.caught ? 'scale-150 opacity-0' : ''}`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  transform: `rotate(${star.rotation}deg)`,
                }}
              >
                <Star 
                  className="text-yellow-300 animate-pulse" 
                  style={{ width: `${star.size}px`, height: `${star.size}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showInstructions && !isGameActive && (
        <div className="absolute top-14 right-0 w-64 p-4 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <h3 className="font-bold text-lg mb-2">Catch Falling Stars!</h3>
          <p className="text-sm mb-3">Click or tap on the stars before they fall off the screen.</p>
          <div className="flex gap-2">
            <button 
              onClick={startGame}
              className="flex-1 bg-trav-primary text-white py-1 px-3 rounded-md hover:bg-trav-primary/80 transition-colors"
            >
              Start
            </button>
            <button 
              onClick={() => setShowInstructions(false)}
              className="bg-white/30 py-1 px-3 rounded-md hover:bg-white/40 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarCatchGame;
