
import React from 'react';
import { MapPin, Globe, Barcode, User, Clock, MapIcon, Plane, TicketIcon } from 'lucide-react';
import { BoardingPassData } from './types';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
      className="boarding-pass relative bg-white rounded-xl border-2 border-trav-primary/30 p-5 max-w-md mx-auto shadow-md overflow-hidden"
    >
      {/* Flight code badge */}
      <Badge 
        className="absolute top-3 right-3 bg-trav-secondary text-trav-primary border-trav-primary/20 font-semibold px-3 py-1"
      >
        {boardingPass.flightCode}
      </Badge>
      
      {/* Stamp animation overlay */}
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
          <h3 className="font-bold text-sm text-gray-600 mb-5 uppercase tracking-wider">YOUR BOARDING DETAILS</h3>
          
          <div className="space-y-6">
            {/* Section 1: Passenger Info */}
            <div className="space-y-1.5">
              <div className="text-xs text-gray-500 uppercase mb-1">PASSENGER</div>
              <div className="font-bold text-lg flex items-center">
                <User size={16} className="mr-2 text-trav-primary" />
                {boardingPass.passenger}
              </div>
            </div>
            
            {/* Section 2: Seat & Gate */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase">SEAT</div>
                <div className="font-bold text-base flex items-center">
                  <TicketIcon size={16} className="mr-2 text-trav-primary" />
                  {boardingPass.seat}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase">GATE</div>
                <div className="font-bold text-base flex items-center">
                  <Plane size={16} className="mr-2 text-trav-primary" />
                  {boardingPass.gate}
                </div>
              </div>
            </div>
            
            <Separator className="border-dotted border-gray-200 my-3" />
            
            {/* Section 3: Departure & Boarding */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase">DEPARTURE</div>
                <div className="font-bold text-base flex items-center">
                  <MapPin size={16} className="mr-2 text-trav-primary" />
                  {boardingPass.departure}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase">BOARDING TIME</div>
                <div className="font-bold text-base flex items-center">
                  <Clock size={16} className="mr-2 text-trav-primary" />
                  {boardingPass.boardingTime}
                </div>
              </div>
            </div>
            
            <Separator className="border-dotted border-gray-200 my-3" />
            
            {/* Section 4: Arrival */}
            <div className="mt-1">
              <div className="text-xs text-gray-500 uppercase mb-1">ARRIVAL</div>
              <div className="font-bold text-lg relative boarding-pass-field">
                <MapIcon size={16} className="mr-2 text-trav-primary inline" />
                <span className="relative">{boardingPass.arrival}</span>
                
                {isCorrect && !isStamped && (
                  <div className="absolute -top-4 -right-4 rotate-12">
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
        <div className="flex-1 flex flex-col items-center justify-between pt-2">
          <div className="flex space-x-3 mb-6 justify-center w-full">
            <div className="flex items-center justify-center bg-trav-secondary rounded-full p-1.5">
              <Globe size={16} className="text-trav-primary" />
            </div>
            <div className="flex items-center justify-center bg-trav-secondary rounded-full p-1.5">  
              <Plane size={16} className="text-trav-primary rotate-45" />
            </div>
          </div>
          
          <div className="bg-gray-50 h-28 w-full flex items-center justify-center rounded-lg mb-6 border border-gray-200">
            <Barcode size={100} className="text-gray-800" />
          </div>
          
          <div className="bg-gray-50 h-24 w-24 flex items-center justify-center rounded-lg border border-gray-200 mb-4">
            <div className="h-20 w-20 border border-gray-300 flex items-center justify-center bg-white rounded-md">
              <span className="text-xs text-gray-500 font-mono">QR</span>
            </div>
          </div>
          
          {isStamped && (
            <div className="mt-2 px-4 py-1.5 bg-trav-secondary border border-trav-primary/20 rounded-full text-xs font-semibold text-trav-primary">
              BOARDING COMPLETE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardingPassDisplay;
