import React, { useState, useEffect } from 'react';
import { Ticket, Plane } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

// Import components
import UserInfoStep from './boarding-pass/UserInfoStep';
import RiddleStep from './boarding-pass/RiddleStep';
import SuccessStep from './boarding-pass/SuccessStep';
import { travelRiddles } from './boarding-pass/riddles';
import { BoardingPassData, TravelRiddle, BoardingPassStep } from './boarding-pass/types';

const BoardingPassPuzzle: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [step, setStep] = useState<BoardingPassStep>(1);
  const [name, setName] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [selectedRiddle, setSelectedRiddle] = useState<TravelRiddle | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [boardingPass, setBoardingPass] = useState<BoardingPassData>({
    passenger: '',
    flightCode: 'TRV ' + Math.floor(Math.random() * 900 + 100),
    gate: 'Adventure Gate ' + Math.floor(Math.random() * 50 + 1),
    departure: '',
    arrival: '???',
    boardingTime: 'NOW',
    seat: 'Explorer Class 1A'
  });
  
  const { toast } = useToast();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * travelRiddles.length);
    setSelectedRiddle(travelRiddles[randomIndex]);
  }, []);

  const handleStartJourney = () => {
    if (name.trim() === '' || departureCity.trim() === '') {
      toast({
        title: "Missing Information",
        description: "Please provide your name and departure city to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setBoardingPass(prev => ({
      ...prev,
      passenger: name,
      departure: departureCity
    }));
    
    setStep(3);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    
    if (selectedRiddle && option === selectedRiddle.correctAnswer) {
      setIsCorrect(true);
      setBoardingPass(prev => ({
        ...prev,
        arrival: option
      }));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      const boardingPassEl = document.getElementById('boarding-pass');
      if (boardingPassEl) {
        boardingPassEl.classList.add('shake-animation');
        setTimeout(() => {
          boardingPassEl.classList.remove('shake-animation');
        }, 500);
      }
      setIsCorrect(false);
    }
  };

  const handleStampBoardingPass = () => {
    toast({
      title: "Congratulations!",
      description: "Your boarding pass has been stamped and your Wander Pack is now unlocked!",
    });
    setStep(5);
  };

  const handleDownloadBoardingPass = () => {
    const boardingPassEl = document.getElementById('boarding-pass');
    if (!boardingPassEl) {
      toast({
        title: "Error",
        description: "Could not find boarding pass to download.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Boarding Pass Downloaded",
      description: "Your adventure boarding pass has been saved.",
    });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <UserInfoStep 
            name={name}
            setName={setName}
            departureCity={departureCity}
            setDepartureCity={setDepartureCity}
            onContinue={handleStartJourney}
          />
        );

      case 3:
        return (
          <RiddleStep 
            boardingPass={boardingPass}
            selectedRiddle={selectedRiddle}
            selectedOption={selectedOption}
            isCorrect={isCorrect}
            showConfetti={showConfetti}
            onOptionSelect={handleOptionSelect}
            onStampBoardingPass={handleStampBoardingPass}
          />
        );

      case 5:
        return (
          <SuccessStep 
            boardingPass={boardingPass}
            onDownloadBoardingPass={handleDownloadBoardingPass}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute top-6 right-6 z-30">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-trav-primary border-trav-primary hover:bg-trav-primary/10 group"
          >
            <Ticket size={16} className="mr-2 group-hover:animate-pulse" /> 
            Boarding Pass
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto max-h-screen border-l border-trav-primary/20">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-trav-primary">
              <div className="flex items-center justify-center">
                <Plane className="mr-2" size={20} />
                <span>One riddle away from takeoff</span>
              </div>
            </SheetTitle>
            <SheetDescription>
              {/* Removed the line about solving the travel riddle */}
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6">
            {renderStep()}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BoardingPassPuzzle;
