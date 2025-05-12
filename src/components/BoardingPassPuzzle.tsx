
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  UserInfoStep,
  RiddleChallenge,
  SuccessStep,
  travelRiddles
} from './boarding-pass';
import { BoardingPassData, TravelRiddle } from './boarding-pass/types';

enum BoardingPassStep {
  USER_INFO = 'USER_INFO',
  RIDDLE = 'RIDDLE',
  SUCCESS = 'SUCCESS',
}

const BoardingPassPuzzle: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<BoardingPassStep>(BoardingPassStep.USER_INFO);
  const [boardingPass, setBoardingPass] = useState<BoardingPassData | null>(null);
  const [name, setName] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [selectedRiddle, setSelectedRiddle] = useState<TravelRiddle | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Select a random riddle when component mounts
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * travelRiddles.length);
    setSelectedRiddle(travelRiddles[randomIndex]);
  }, []);
  
  const handleUserSubmit = (userData: { name: string, email: string }) => {
    // Create boarding pass with user data
    setBoardingPass({
      passenger: userData.name,
      flightCode: 'TV-' + Math.floor(1000 + Math.random() * 9000),
      gate: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Math.floor(1 + Math.random() * 20),
      departure: departureCity || 'Your City',
      arrival: 'Trav Early Access',
      boardingTime: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      }),
      seat: String.fromCharCode(65 + Math.floor(Math.random() * 8)) + Math.floor(1 + Math.random() * 30),
    });
    
    setCurrentStep(BoardingPassStep.RIDDLE);
  };
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const correct = selectedRiddle?.correctAnswer === option;
    setIsCorrect(correct);
    
    if (correct) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };
  
  const handleRiddleSuccess = () => {
    setCurrentStep(BoardingPassStep.SUCCESS);
    
    toast({
      title: "Congratulations!",
      description: "You've unlocked your early access boarding pass.",
    });
  };
  
  const handleDownloadBoardingPass = () => {
    // Here you would implement the download logic
    // For this example, we'll just show a toast
    toast({
      title: "Boarding Pass Downloaded",
      description: "Your boarding pass has been downloaded successfully!",
    });
  };
  
  const renderCurrentStep = () => {
    switch (currentStep) {
      case BoardingPassStep.USER_INFO:
        return (
          <UserInfoStep 
            name={name}
            setName={setName}
            departureCity={departureCity}
            setDepartureCity={setDepartureCity}
            onContinue={() => handleUserSubmit({ name, email: '' })}
          />
        );
      case BoardingPassStep.RIDDLE:
        return selectedRiddle && boardingPass ? (
          <RiddleChallenge
            riddle={selectedRiddle}
            selectedOption={selectedOption}
            isCorrect={isCorrect}
            onOptionSelect={handleOptionSelect}
          />
        ) : null;
      case BoardingPassStep.SUCCESS:
        return boardingPass ? (
          <SuccessStep 
            boardingPass={{
              name: boardingPass.passenger,
              email: '',
              id: crypto.randomUUID(),
              date: new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              }),
              destination: boardingPass.arrival
            }} 
            onDownloadBoardingPass={handleDownloadBoardingPass} 
          />
        ) : null;
      default:
        return null;
    }
  };
  
  return (
    <div className="boarding-pass-puzzle">
      {renderCurrentStep()}
    </div>
  );
};

export default BoardingPassPuzzle;
