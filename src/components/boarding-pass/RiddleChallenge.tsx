
import React from 'react';
import { TravelRiddle } from './types';
import { MapPin } from 'lucide-react';

interface RiddleChallengeProps {
  riddle: TravelRiddle;
  selectedOption: string | null;
  isCorrect: boolean;
  onOptionSelect: (option: string) => void;
}

const RiddleChallenge: React.FC<RiddleChallengeProps> = ({
  riddle,
  selectedOption,
  isCorrect,
  onOptionSelect
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <h3 className="font-medium mb-3 flex items-center">
        <MapPin size={16} className="mr-2 text-trav-primary" />
        Travel Riddle Challenge
      </h3>
      <p className="text-sm mb-5 text-gray-700">{riddle.question}</p>
      
      <div className="flex flex-wrap gap-2">
        {riddle.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className={`px-4 py-2 rounded-full text-sm riddle-option ${
              selectedOption === option 
                ? option === riddle.correctAnswer
                  ? 'correct' 
                  : 'incorrect'
                : 'bg-gray-100 border border-gray-300 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {selectedOption && (
        <div className={`mt-4 py-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'} font-medium`}>
          {isCorrect 
            ? "🎉 You got it! Your Wander Pack is ready for stamping." 
            : "Try again! Your destination's still a mystery."}
        </div>
      )}
    </div>
  );
};

export default RiddleChallenge;
