import React from 'react';

const FlightInfoCard = () => {
  return (
    <div className="flex items-center border-2 border-purple-400 rounded-lg overflow-hidden shadow-md">
      <div className="bg-purple-100 p-4 flex items-center">
        <span className="text-purple-600 font-bold">Thu 10 Jan'24</span>
        <div className="w-2 h-2 bg-purple-600 rounded-full mx-2"></div>
        <span className="text-purple-600">Fly Air India</span>
      </div>
      <div className="p-4 flex-grow text-center">
        <p className="text-gray-800 font-medium text-xl">
          From Delhi (DEL) To Singapore (SIN).
        </p>
      </div>
    </div>
  );
};

export default FlightInfoCard;
