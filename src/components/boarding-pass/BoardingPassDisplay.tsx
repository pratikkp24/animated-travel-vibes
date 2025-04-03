
import React from 'react';
import { MapPin, Globe, Barcode } from 'lucide-react';
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
      
      {/* Horizontal split layout */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left side - Boarding details */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-dashed border-gray-300 pb-4 md:pb-0 md:pr-4">
          <h3 className="font-bold text-sm text-gray-600 mb-3">YOUR BOARDING DETAILS</h3>
          
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600">PASSENGER</div>
              <div className="font-bold flex items-center">
                <span className="mr-2 bg-gray-100 rounded-full p-1 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
                {boardingPass.passenger}
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-600">SEAT</div>
                <div className="font-bold">{boardingPass.seat}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-600">GATE</div>
                <div className="font-bold">{boardingPass.gate}</div>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-600">DEPARTURE</div>
                <div className="font-bold">{boardingPass.departure}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-600">BOARDING TIME</div>
                <div className="font-bold">{boardingPass.boardingTime}</div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-gray-600">ARRIVAL</div>
              <div className="font-bold relative boarding-pass-field">
                {boardingPass.arrival}
                {isCorrect && !isStamped && (
                  <div className="absolute -top-5 -right-5 rotate-12">
                    <div className="text-red-600 border-2 border-red-600 rounded px-1 text-xs font-bold">
                      APPROVED
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Aesthetics */}
        <div className="flex-1 flex flex-col items-center justify-between">
          <div className="flex space-x-2 mb-2">
            <MapPin size={16} className="text-trav-primary" />
            <Globe size={16} className="text-trav-primary" />
          </div>
          
          <div className="bg-gray-100 h-20 w-full flex items-center justify-center rounded mb-2">
            <Barcode size={60} className="text-gray-700" />
          </div>
          
          <div className="bg-gray-100 h-16 w-16 flex items-center justify-center rounded">
            <div className="h-14 w-14 border border-gray-300 flex items-center justify-center">
              QR
            </div>
          </div>
          
          {isStamped && (
            <div className="mt-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs font-medium">
              BOARDING COMPLETE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardingPassDisplay;
