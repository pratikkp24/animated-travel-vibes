
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  UserInfoStep,
  RiddleChallenge,
  SuccessStep,
} from './boarding-pass';
import { BoardingPassData } from './boarding-pass/types';

enum BoardingPassStep {
  USER_INFO = 'USER_INFO',
  RIDDLE = 'RIDDLE',
  SUCCESS = 'SUCCESS',
}

const BoardingPassPuzzle: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<BoardingPassStep>(BoardingPassStep.USER_INFO);
  const [boardingPass, setBoardingPass] = useState<BoardingPassData | null>(null);
  
  const handleUserSubmit = (userData: Partial<BoardingPassData>) => {
    setBoardingPass(prev => ({
      ...prev as BoardingPassData,
      name: userData.name || '',
      email: userData.email || '',
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      }),
      destination: 'Trav Early Access',
    }));
    
    setCurrentStep(BoardingPassStep.RIDDLE);
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
        return <UserInfoStep onSubmit={handleUserSubmit} />;
      case BoardingPassStep.RIDDLE:
        return <RiddleChallenge onSuccess={handleRiddleSuccess} />;
      case BoardingPassStep.SUCCESS:
        return boardingPass ? (
          <SuccessStep 
            boardingPass={boardingPass} 
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
