
import React, { useState, useEffect } from 'react';

const greetings = [
  { text: "Hi", language: "English" },
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "Hola", language: "Spanish" },
  { text: "Bonjour", language: "French" },
  { text: "Hallo", language: "German" },
  { text: "Ciao", language: "Italian" },
  { text: "Salve", language: "Italian" },
  { text: "Olá", language: "Portuguese" },
  { text: "Привет", language: "Russian" },
  { text: "مرحبا", language: "Arabic" },
  { text: "नमस्कार", language: "Bengali" },
  { text: "你好", language: "Chinese (Mandarin)" },
  { text: "こんにちは", language: "Japanese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Jambo", language: "Swahili" },
  { text: "Habari", language: "Swahili" },
  { text: "Merhaba", language: "Turkish" },
  { text: "สวัสดี", language: "Thai" },
  { text: "Hai", language: "Malay / Indonesian" },
  { text: "Halo", language: "Malay / Indonesian" },
  { text: "Xin chào", language: "Vietnamese" },
  { text: "Γειά σου", language: "Greek" },
  { text: "Hallo", language: "Dutch" },
];

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentGreeting = greetings[currentIndex].text + "! trav-eler";
    
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
    <div className="flex items-center justify-center min-h-[48px]">
      <p className="text-2xl md:text-3xl font-medium text-trav-accent relative">
        {displayText}
        <span className="inline-block w-0.5 h-6 bg-trav-accent ml-0.5 animate-pulse"></span>
      </p>
    </div>
  );
};

export default TypingAnimation;
