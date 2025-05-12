
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { SuccessStepBoardingPass } from './types';
import Confetti from './Confetti';

export interface SuccessStepProps {
  boardingPass: SuccessStepBoardingPass;
  onDownloadBoardingPass?: () => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ boardingPass, onDownloadBoardingPass }) => {
  return (
    <div className="text-center">
      <Confetti />
      <div className="passport-cover mb-6 mx-auto max-w-sm">
        <div className="boarding-pass-header bg-gradient-to-r from-trav-primary to-trav-accent p-3 rounded-t-lg">
          <h2 className="text-white text-xl font-bold">Boarding Pass Unlocked!</h2>
        </div>
        <div className="boarding-pass-body bg-white p-6 rounded-b-lg border-2 border-trav-primary">
          <div className="mb-4">
            <p className="text-trav-muted uppercase text-xs">Passenger</p>
            <p className="font-bold text-lg">{boardingPass.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-trav-muted uppercase text-xs">Destination</p>
            <p className="font-bold text-lg">{boardingPass.destination}</p>
          </div>
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-trav-muted uppercase text-xs">Travel Date</p>
              <p className="font-medium">{boardingPass.date}</p>
            </div>
            <div>
              <p className="text-trav-muted uppercase text-xs">Traveler ID</p>
              <p className="font-medium">{boardingPass.id.slice(0, 8).toUpperCase()}</p>
            </div>
          </div>
          {onDownloadBoardingPass && (
            <Button 
              onClick={onDownloadBoardingPass}
              className="w-full mt-4 bg-trav-primary hover:bg-trav-dark"
            >
              <Download className="h-4 w-4 mr-2" /> Download Boarding Pass
            </Button>
          )}
        </div>
      </div>
      <p className="text-center text-trav-muted">
        Thank you for joining our early access. We'll notify you when it's time to board!
      </p>
    </div>
  );
};

export default SuccessStep;
