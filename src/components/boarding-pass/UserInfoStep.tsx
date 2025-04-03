
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardTitle, CardDescription } from "@/components/ui/card";

interface UserInfoStepProps {
  name: string;
  setName: (name: string) => void;
  departureCity: string;
  setDepartureCity: (city: string) => void;
  onContinue: () => void;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({
  name,
  setName,
  departureCity,
  setDepartureCity,
  onContinue
}) => {
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
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default UserInfoStep;
