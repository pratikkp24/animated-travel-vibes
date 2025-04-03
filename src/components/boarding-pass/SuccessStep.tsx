
import React from 'react';
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BoardingPassDisplay from './BoardingPassDisplay';
import { BoardingPassData } from './types';

interface SuccessStepProps {
  boardingPass: BoardingPassData;
}

const SuccessStep: React.FC<SuccessStepProps> = ({
  boardingPass,
}) => {
  const handleFollowOnInstagram = () => {
    window.open('https://www.instagram.com/trav.tribe/', '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CardTitle className="text-xl md:text-2xl mb-2">🎉 Your Wander Pack is Unlocked!</CardTitle>
        <CardDescription>You've successfully completed the travel challenge.</CardDescription>
      </div>

      <div className="max-h-[70vh] overflow-y-auto p-2">
        <BoardingPassDisplay 
          boardingPass={boardingPass} 
          isCorrect={true}
          isStamped={true}
        />
      </div>

      <div className="text-center space-y-4">
        <a href="mailto:info@trav.guide" className="block text-trav-primary hover:underline">
          info@trav.guide
        </a>
        
        <Button 
          onClick={handleFollowOnInstagram}
          className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:bg-gradient-to-r hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90 text-white border-none"
        >
          <Instagram size={16} className="mr-2" /> 
          Follow us on Instagram!
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;
