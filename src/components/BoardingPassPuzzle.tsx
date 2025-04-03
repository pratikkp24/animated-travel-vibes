
import React, { useState, useEffect } from 'react';
import { Check, Unlock, Plane, Ticket, X, Download, Luggage, Map } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

interface TravelRiddle {
  question: string;
  options: string[];
  correctAnswer: string;
}

const travelRiddles: TravelRiddle[] = [
  {
    question: "This city is home to the world's busiest pedestrian crossing, ancient shrines tucked between skyscrapers, and vending machines that sell ramen.",
    options: ["Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    question: "This city has canals instead of streets, gondolas instead of cars, and is famous for masks and romance.",
    options: ["Amsterdam", "Venice", "Bruges"],
    correctAnswer: "Venice"
  },
  {
    question: "This country has the world's most pyramids, but it's not Egypt. It's in Africa and rich in Nubian history.",
    options: ["Sudan", "Morocco", "Kenya"],
    correctAnswer: "Sudan"
  },
  {
    question: "Swim in hot springs, walk on black sand beaches, and visit a capital starting with 'R' in this island nation.",
    options: ["Greenland", "Iceland", "Norway"],
    correctAnswer: "Iceland"
  },
  {
    question: "Tango in the streets, eat steak like royalty, and walk the world's widest avenue here.",
    options: ["Rio de Janeiro", "Buenos Aires", "Lima"],
    correctAnswer: "Buenos Aires"
  },
  {
    question: "City of tulips, houseboats, and bike bells — where art and canals meet.",
    options: ["Copenhagen", "Bruges", "Amsterdam"],
    correctAnswer: "Amsterdam"
  },
  {
    question: "Sip mint tea, stroll in souks, and see blue cities and ancient medinas.",
    options: ["Morocco", "Egypt", "Tunisia"],
    correctAnswer: "Morocco"
  },
  {
    question: "Switzerland's lakeside city with the UN, the Alps, and fondue-filled cafés.",
    options: ["Vienna", "Prague", "Geneva"],
    correctAnswer: "Geneva"
  },
  {
    question: "Here, the towers scrape the clouds, malls span miles, and desert meets design.",
    options: ["Dubai", "Doha", "Istanbul"],
    correctAnswer: "Dubai"
  },
  {
    question: "Temples, monkeys, and a hidden valley kingdom in South Asia's mountains.",
    options: ["Thimphu", "Pokhara", "Kathmandu"],
    correctAnswer: "Kathmandu"
  },
  {
    question: "Cinnamon buns, ferries, and endless islands under the Nordic sun.",
    options: ["Helsinki", "Oslo", "Stockholm"],
    correctAnswer: "Stockholm"
  },
  {
    question: "Safari plains, chai breaks, and the Great Migration — in this East African gem.",
    options: ["Tanzania", "Uganda", "Kenya"],
    correctAnswer: "Kenya"
  }
];

interface BoardingPass {
  passenger: string;
  flightCode: string;
  gate: string;
  departure: string;
  arrival: string;
  boardingTime: string;
  seat: string;
}

const BoardingPassPuzzle: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [selectedRiddle, setSelectedRiddle] = useState<TravelRiddle | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [boardingPass, setBoardingPass] = useState<BoardingPass>({
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
    // Randomly select a riddle when the component mounts
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
      // Wrong answer animation
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
    toast({
      title: "Boarding Pass Downloaded",
      description: "Your adventure boarding pass has been saved.",
    });
  };

  const handleEnterTrav = () => {
    setIsSheetOpen(false);
    toast({
      title: "Welcome to Trav!",
      description: "Get ready for an amazing journey.",
    });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 p-2">
            <div className="text-center">
              <CardTitle className="text-xl md:text-2xl mb-2">✨ Your Boarding Pass Awaits</CardTitle>
              <CardDescription>Solve the travel riddle. Unlock your Wander Pack.</CardDescription>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What's your name, traveler?</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="departure">Where are you flying from?</Label>
                <Input 
                  id="departure" 
                  value={departureCity} 
                  onChange={(e) => setDepartureCity(e.target.value)} 
                  placeholder="Your departure city"
                />
              </div>

              <Button 
                className="w-full" 
                onClick={handleStartJourney}
              >
                Continue
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <CardTitle className="text-xl md:text-2xl">Your Boarding Pass</CardTitle>
            </div>

            <div 
              id="boarding-pass" 
              className="boarding-pass relative bg-white rounded-lg border-2 border-trav-primary p-4 max-w-md mx-auto"
            >
              <div className="absolute top-2 right-2 text-trav-primary font-bold text-sm">
                {boardingPass.flightCode}
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs md:text-sm text-gray-600">PASSENGER</div>
                <div className="text-xs md:text-sm text-gray-600">SEAT</div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold">{boardingPass.passenger}</div>
                <div className="font-bold">{boardingPass.seat}</div>
              </div>
              
              <div className="flex justify-between mb-4">
                <div>
                  <div className="text-xs md:text-sm text-gray-600">DEPARTURE</div>
                  <div className="font-bold">{boardingPass.departure}</div>
                </div>
                <div className="flex items-center mx-2">
                  <Plane className="rotate-90 text-trav-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600">ARRIVAL</div>
                  <div className="font-bold relative">
                    {boardingPass.arrival}
                    {isCorrect && (
                      <div className="absolute -top-5 -right-5 rotate-12">
                        <div className="text-red-600 border-2 border-red-600 rounded px-1 text-xs font-bold">
                          APPROVED
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs md:text-sm text-gray-600">GATE</div>
                  <div className="font-bold">{boardingPass.gate}</div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600">BOARDING TIME</div>
                  <div className="font-bold">{boardingPass.boardingTime}</div>
                </div>
              </div>
              
              <div className="mt-4 pt-2 border-t border-dashed border-gray-300 flex justify-between items-center">
                <div className="flex space-x-1">
                  <Ticket size={16} className="text-trav-primary" />
                  <Map size={16} className="text-trav-primary" />
                </div>
                <div className="bg-gray-100 h-16 w-16 flex items-center justify-center rounded">
                  <div className="h-14 w-14 border border-gray-300"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Travel Riddle Challenge</h3>
                <p className="text-sm mb-4">{selectedRiddle?.question}</p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedRiddle?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedOption === option 
                          ? option === selectedRiddle.correctAnswer
                            ? 'bg-green-100 border border-green-500 text-green-700' 
                            : 'bg-red-100 border border-red-500 text-red-700'
                          : 'bg-gray-100 border border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {selectedOption && (
                  <div className={`mt-4 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect 
                      ? "🎉 You got it! Your Wander Pack is ready." 
                      : "Try again! Your destination's still a mystery."}
                  </div>
                )}
              </div>

              {isCorrect && (
                <Button 
                  className="w-full"
                  onClick={handleStampBoardingPass}
                >
                  <Unlock size={16} className="mr-2" /> 
                  Stamp My Boarding Pass
                </Button>
              )}
            </div>

            {showConfetti && (
              <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i} 
                    className="confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CardTitle className="text-xl md:text-2xl mb-2">🎉 Your Wander Pack is Unlocked!</CardTitle>
              <CardDescription>You've successfully completed the travel challenge.</CardDescription>
            </div>

            <div 
              className="boarding-pass relative bg-white rounded-lg border-2 border-trav-primary p-4 max-w-md mx-auto"
            >
              {/* Same boarding pass with stamp */}
              <div className="absolute top-2 right-2 text-trav-primary font-bold text-sm">
                {boardingPass.flightCode}
              </div>
              
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-red-600 text-white rounded-full p-1 border-2 border-white rotate-12">
                  <Check size={20} />
                </div>
              </div>
              
              {/* ... Boarding Pass Content */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs md:text-sm text-gray-600">PASSENGER</div>
                <div className="text-xs md:text-sm text-gray-600">SEAT</div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold">{boardingPass.passenger}</div>
                <div className="font-bold">{boardingPass.seat}</div>
              </div>
              
              <div className="flex justify-between mb-4">
                <div>
                  <div className="text-xs md:text-sm text-gray-600">DEPARTURE</div>
                  <div className="font-bold">{boardingPass.departure}</div>
                </div>
                <div className="flex items-center mx-2">
                  <Plane className="rotate-90 text-trav-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600">ARRIVAL</div>
                  <div className="font-bold relative">
                    {boardingPass.arrival}
                    <div className="absolute -top-5 -right-5 rotate-12">
                      <div className="text-red-600 border-2 border-red-600 rounded px-1 text-xs font-bold">
                        APPROVED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs md:text-sm text-gray-600">GATE</div>
                  <div className="font-bold">{boardingPass.gate}</div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600">BOARDING TIME</div>
                  <div className="font-bold">{boardingPass.boardingTime}</div>
                </div>
              </div>
              
              <div className="mt-4 pt-2 border-t border-dashed border-gray-300 flex justify-between items-center">
                <div className="flex space-x-1">
                  <Ticket size={16} className="text-trav-primary" />
                  <Map size={16} className="text-trav-primary" />
                </div>
                <div className="bg-gray-100 h-16 w-16 flex items-center justify-center rounded">
                  <div className="h-14 w-14 border border-gray-300 flex items-center justify-center">
                    QR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                onClick={handleDownloadBoardingPass}
                className="w-full"
              >
                <Download size={16} className="mr-2" /> 
                Download Boarding Pass
              </Button>
              
              <Button 
                onClick={handleEnterTrav}
                className="w-full"
              >
                <Luggage size={16} className="mr-2" /> 
                Enter Trav → Start Exploring
              </Button>
            </div>
          </div>
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
            <Unlock size={16} className="mr-2 group-hover:animate-pulse" /> 
            Unlock Early Access
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto max-h-screen">
          <SheetHeader className="mb-2">
            <SheetTitle className="text-trav-primary">
              <div className="flex items-center justify-center">
                <Plane className="mr-2" size={20} />
                <span>One riddle away from takeoff</span>
              </div>
            </SheetTitle>
            <SheetDescription>
              Solve the travel riddle to unlock your personalized Wander Pack.
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
