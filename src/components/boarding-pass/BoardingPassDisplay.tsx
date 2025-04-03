
import React from 'react';
import { MapPin, Globe, Barcode, User, Clock, MapIcon } from 'lucide-react';
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
      className="boarding-pass relative bg-white rounded-lg border-2 border-trav-primary p-4 max-w-md mx-auto shadow-md"
    >
      <div className="absolute top-2 right-2 text-trav-primary font-bold text-sm bg-trav-secondary px-2 py-1 rounded">
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
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Boarding details */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-dashed border-gray-300 pb-4 md:pb-0 md:pr-6">
          <h3 className="font-bold text-sm text-gray-600 mb-4 uppercase tracking-wider">YOUR BOARDING DETAILS</h3>
          
          <div className="space-y-5">
            {/* Section 1: Passenger Info */}
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">PASSENGER</div>
              <div className="font-bold text-base flex items-center">
                <span className="mr-2 bg-gray-100 rounded-full p-1 inline-flex items-center justify-center">
                  <User size={14} />
                </span>
                {boardingPass.passenger}
              </div>
            </div>
            
            {/* Section 2: Seat & Gate */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 uppercase mb-1">SEAT</div>
                <div className="font-bold text-base">{boardingPass.seat}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 uppercase mb-1">GATE</div>
                <div className="font-bold text-base">{boardingPass.gate}</div>
              </div>
            </div>
            
            {/* Section 3: Departure & Boarding */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="text-xs text-gray-500 uppercase mb-1">DEPARTURE</div>
                <div className="font-bold text-base flex items-center">
                  <MapPin size={14} className="mr-1 text-trav-primary" />
                  {boardingPass.departure}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 uppercase mb-1">BOARDING TIME</div>
                <div className="font-bold text-base flex items-center">
                  <Clock size={14} className="mr-1 text-trav-primary" />
                  {boardingPass.boardingTime}
                </div>
              </div>
            </div>
            
            {/* Section 4: Arrival */}
            <div className="mt-2 pt-3 border-t border-dotted border-gray-200">
              <div className="text-xs text-gray-500 uppercase mb-1">ARRIVAL</div>
              <div className="font-bold text-base relative boarding-pass-field">
                <MapIcon size={14} className="mr-1 text-trav-primary inline" />
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
          <div className="flex space-x-3 mb-4 justify-center w-full">
            <div className="flex items-center justify-center bg-trav-secondary rounded-full p-1.5">
              <Globe size={16} className="text-trav-primary" />
            </div>
            <div className="flex items-center justify-center bg-trav-secondary rounded-full p-1.5">  
              <MapPin size={16} className="text-trav-primary" />
            </div>
          </div>
          
          <div className="bg-gray-100 h-24 w-full flex items-center justify-center rounded mb-4 border border-gray-200">
            <Barcode size={70} className="text-gray-700" />
          </div>
          
          <div className="bg-gray-100 h-20 w-20 flex items-center justify-center rounded border border-gray-200">
            <div className="h-16 w-16 border border-gray-300 flex items-center justify-center bg-white">
              QR
            </div>
          </div>
          
          {isStamped && (
            <div className="mt-4 px-3 py-1 bg-trav-secondary border border-trav-primary/20 rounded-full text-xs font-semibold text-trav-primary">
              BOARDING COMPLETE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardingPassDisplay;
