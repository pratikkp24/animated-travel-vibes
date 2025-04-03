
import React from 'react';
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Luggage } from 'lucide-react';
import BoardingPassDisplay from './BoardingPassDisplay';
import { BoardingPassData } from './types';

interface SuccessStepProps {
  boardingPass: BoardingPassData;
  onDownloadBoardingPass: () => void;
  onEnterTrav: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({
  boardingPass,
  onDownloadBoardingPass,
  onEnterTrav
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <CardTitle className="text-xl md:text-2xl mb-2">🎉 Your Wander Pack is Unlocked!</CardTitle>
        <CardDescription>You've successfully completed the travel challenge.</CardDescription>
      </div>

      <BoardingPassDisplay 
        boardingPass={boardingPass} 
        isCorrect={true}
        isStamped={true}
      />

      <div className="flex flex-col space-y-3">
        <Button 
          variant="outline" 
          onClick={onDownloadBoardingPass}
          className="w-full"
        >
          <Download size={16} className="mr-2" /> 
          Download Boarding Pass
        </Button>
        
        <Button 
          onClick={onEnterTrav}
          className="w-full"
        >
          <Luggage size={16} className="mr-2" /> 
          Enter Trav → Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;
