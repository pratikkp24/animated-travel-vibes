
import React from 'react';
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Unlock } from 'lucide-react';
import BoardingPassDisplay from './BoardingPassDisplay';
import RiddleChallenge from './RiddleChallenge';
import { BoardingPassData, TravelRiddle } from './types';
import Confetti from './Confetti';

interface RiddleStepProps {
  boardingPass: BoardingPassData;
  selectedRiddle: TravelRiddle | null;
  selectedOption: string | null;
  isCorrect: boolean;
  showConfetti: boolean;
  onOptionSelect: (option: string) => void;
  onStampBoardingPass: () => void;
}

const RiddleStep: React.FC<RiddleStepProps> = ({
  boardingPass,
  selectedRiddle,
  selectedOption,
  isCorrect,
  showConfetti,
  onOptionSelect,
  onStampBoardingPass
}) => {
  if (!selectedRiddle) return null;
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <CardTitle className="text-xl md:text-2xl">Your Boarding Pass</CardTitle>
      </div>

      <BoardingPassDisplay 
        boardingPass={boardingPass} 
        isCorrect={isCorrect} 
      />

      <div className="space-y-4">
        <RiddleChallenge 
          riddle={selectedRiddle}
          selectedOption={selectedOption}
          isCorrect={isCorrect}
          onOptionSelect={onOptionSelect}
        />

        {isCorrect && (
          <Button 
            className="w-full"
            onClick={onStampBoardingPass}
          >
            <Unlock size={16} className="mr-2" /> 
            Stamp My Boarding Pass
          </Button>
        )}
      </div>

      {showConfetti && <Confetti />}
    </div>
  );
};

export default RiddleStep;
