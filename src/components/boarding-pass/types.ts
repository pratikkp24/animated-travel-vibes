
export interface TravelRiddle {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface BoardingPassData {
  passenger: string;
  flightCode: string;
  gate: string;
  departure: string;
  arrival: string;
  boardingTime: string;
  seat: string;
}

// For the SuccessStep component specifically
export interface SuccessStepBoardingPass {
  name: string;
  email: string;
  id: string;
  date: string;
  destination: string;
}

export type BoardingPassStep = 1 | 3 | 5;
