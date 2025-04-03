
import React from 'react';
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Instagram, Share2, MessageSquare } from 'lucide-react';
import BoardingPassDisplay from './BoardingPassDisplay';
import { BoardingPassData } from './types';

interface SuccessStepProps {
  boardingPass: BoardingPassData;
  onDownloadBoardingPass: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({
  boardingPass,
  onDownloadBoardingPass
}) => {
  const handleShareToWhatsApp = () => {
    const text = `Check out my Trav boarding pass to ${boardingPass.arrival}! Join me on this adventure! 🌍✈️`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  };

  const handleShareToInstagram = () => {
    // Instagram doesn't have a direct sharing API, so we'll show a toast with instructions
    // The user needs to take a screenshot and post it manually
    alert("To share on Instagram: Take a screenshot of your boarding pass and share it as a story or post. Tag @trav.tribe in your story!");
  };

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
        
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Button 
            onClick={handleShareToWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white border-none"
          >
            <MessageSquare size={16} className="mr-2" /> 
            Share on WhatsApp
          </Button>
          
          <Button 
            onClick={handleShareToInstagram}
            className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:bg-gradient-to-r hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90 text-white border-none"
          >
            <Instagram size={16} className="mr-2" /> 
            Share on Instagram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
