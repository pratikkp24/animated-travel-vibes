
import React from 'react';
import { MapPin, Globe, User, Clock, MapIcon, Plane, TicketIcon } from 'lucide-react';
import { BoardingPassData } from './types';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Logo from '@/components/Logo';

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
      className="boarding-pass relative bg-white rounded-xl border-2 border-[#D1EADC] p-4 max-w-md mx-auto shadow-md overflow-hidden font-poppins transform scale-[0.95]"
    >
      {/* Trav Logo */}
      <div className="absolute top-3 left-3 z-10">
        <Logo size="sm" className="text-[#079768]" />
      </div>
      
      {/* Flight code badge */}
      <Badge 
        className="absolute top-3 right-3 bg-[#079768] text-white border-none font-semibold px-3 py-1"
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
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        {/* Left side - Boarding details */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-dashed border-gray-300 pb-4 md:pb-0 md:pr-4">
          <h3 className="font-bold text-sm text-gray-600 mb-4 uppercase tracking-wider">YOUR BOARDING DETAILS</h3>
          
          <div className="space-y-4">
            {/* Section 1: Passenger Info */}
            <div className="space-y-1">
              <div className="text-xs text-gray-500 uppercase mb-1 font-medium">PASSENGER</div>
              <div className="font-semibold text-base flex items-center">
                <User size={14} className="mr-2 text-[#079768]" />
                {boardingPass.passenger}
              </div>
            </div>
            
            {/* Section 2: Seat & Gate */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase font-medium">SEAT</div>
                <div className="font-semibold text-sm flex items-center">
                  <TicketIcon size={14} className="mr-2 text-[#079768]" />
                  {boardingPass.seat}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase font-medium">GATE</div>
                <div className="font-semibold text-sm flex items-center">
                  <Plane size={14} className="mr-2 text-[#079768]" />
                  {boardingPass.gate}
                </div>
              </div>
            </div>
            
            <Separator className="border-dotted border-gray-200 my-2" />
            
            {/* Section 3: Departure & Boarding */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase font-medium">DEPARTURE</div>
                <div className="font-semibold text-sm flex items-center">
                  <MapPin size={14} className="mr-2 text-[#079768]" />
                  {boardingPass.departure}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase font-medium">BOARDING TIME</div>
                <div className="font-semibold text-sm flex items-center">
                  <Clock size={14} className="mr-2 text-[#079768]" />
                  {boardingPass.boardingTime}
                </div>
              </div>
            </div>
            
            <Separator className="border-dotted border-gray-200 my-2" />
            
            {/* Section 4: Arrival */}
            <div className="mt-1">
              <div className="text-xs text-gray-500 uppercase mb-1 font-medium">ARRIVAL</div>
              <div className="font-semibold text-base relative boarding-pass-field">
                <MapIcon size={14} className="mr-2 text-[#079768] inline" />
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
        
        {/* Right side - QR Code */}
        <div className="flex-1 flex flex-col items-center justify-between pt-2">
          <div className="flex space-x-3 mb-3 justify-center w-full">
            <div className="flex items-center justify-center bg-[#D1EADC] rounded-full p-1.5">
              <Globe size={14} className="text-[#079768]" />
            </div>
            <div className="flex items-center justify-center bg-[#D1EADC] rounded-full p-1.5">  
              <Plane size={14} className="text-[#079768] rotate-45" />
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center justify-center rounded-lg mb-2">
            <div className="qr-container relative w-full max-w-[150px] mx-auto">
              <img 
                src="/lovable-uploads/a8a4555e-f167-4b20-b907-12b658481ed2.png" 
                alt="Scan QR Code" 
                className="w-full object-contain"
              />
              <div className="text-center text-xs font-semibold text-gray-500 mt-1">SCAN ME</div>
            </div>
          </div>
          
          {isStamped && (
            <div className="mt-1 px-3 py-1 bg-[#D1EADC] border border-[#079768]/20 rounded-full text-xs font-semibold text-[#079768]">
              BOARDING COMPLETE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardingPassDisplay;
