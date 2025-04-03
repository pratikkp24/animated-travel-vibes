
import React from 'react';
import { Plane, Ticket, Map } from 'lucide-react';
import { BoardingPassData } from './types';

interface BoardingPassDisplayProps {
  boardingPass: BoardingPassData;
  isCorrect: boolean;
  isStamped?: boolean;
}

const BoardingPassDisplay: React.FC<BoardingPassDisplayProps> = ({ 
  boardingPass, 
  isCorrect,
  isStamped = false
}) => {
  return (
    <div 
      id="boarding-pass" 
      className="boarding-pass relative bg-white rounded-lg border-2 border-trav-primary p-4 max-w-md mx-auto"
    >
      <div className="absolute top-2 right-2 text-trav-primary font-bold text-sm">
        {boardingPass.flightCode}
      </div>
      
      {isStamped && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-red-600 text-white rounded-full p-1 border-2 border-white rotate-12 stamp-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
        </div>
      )}
      
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
          <div className="font-bold relative boarding-pass-field">
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
          <div className="h-14 w-14 border border-gray-300 flex items-center justify-center">
            QR
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPassDisplay;
