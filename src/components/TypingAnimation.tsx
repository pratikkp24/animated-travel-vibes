
import React, { useState, useEffect } from 'react';

const greetings = [
  { text: "Hi", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "Hola", language: "Spanish" },
  { text: "Bonjour", language: "French" },
  { text: "Ciao", language: "Italian" },
  { text: "Konnichiwa", language: "Japanese" },
];

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentGreeting = greetings[currentIndex].text + " trav-eler";
    
    const typeEffect = () => {
      if (!isDeleting && displayText.length < currentGreeting.length) {
        setDisplayText(currentGreeting.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      } else if (!isDeleting && displayText.length === currentGreeting.length) {
        // Pause at the end of typing
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(displayText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % greetings.length);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed]);

  return (
    <div className="flex items-center justify-center min-h-[36px]">
      <p className="text-xl font-medium text-trav-accent relative">
        {displayText}
        <span className="inline-block w-0.5 h-5 bg-trav-accent ml-0.5 animate-pulse"></span>
      </p>
    </div>
  );
};

export default TypingAnimation;
