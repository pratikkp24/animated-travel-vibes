
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div 
          key={unit} 
          className="flex flex-col items-center opacity-0 animate-slide-up" 
          style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg glassmorphism flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold">{value}</span>
          </div>
          <span className="mt-2 text-sm text-trav-muted capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
