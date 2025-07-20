import React from 'react';

const ItineraryCard = ({num}) => {
  return (
    <div className="flex w-[90%] border rounded-lg shadow-md overflow-hidden bg-white">
      
      {/* Left Column */}
      <div className="bg-[#2F215F] text-white flex flex-col justify-center items-center px-4 py-8 min-w-[80px]">
        <div className="transform -rotate-90 text-lg font-semibold tracking-wide whitespace-nowrap">
          Day {num}
        </div>
      </div>

      {/* Middle Column with Image and Date */}
      <div className="flex flex-col items-center justify-center px-4 py-6 border-r">
        <img
          src="/assets/pexels-pixabay-158063.jpg" // replace with your actual image path
          alt="Singapore"
          className="w-24 h-24 rounded-full object-cover"
        />
        <p className="mt-4 font-bold text-lg text-black">27th November</p>
        <p className="text-sm text-gray-600 text-center">Arrival In Singapore & City Exploration</p>
      </div>

      {/* Right Column with Timeline */}
      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col gap-6">

          {/* Morning */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#2F215F] mt-1"></div>
              <div className="w-px h-16 bg-gray-300"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-700">Morning</p>
              <ul className="list-disc pl-4 text-sm text-gray-600">
                <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
              </ul>
            </div>
          </div>

          {/* Afternoon */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#2F215F] mt-1"></div>
              <div className="w-px h-16 bg-gray-300"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-700">Afternoon</p>
              <ul className="list-disc pl-4 text-sm text-gray-600">
                <li>Check Into Your Hotel.</li>
                <li>Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
                <li>Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</li>
              </ul>
            </div>
          </div>

          {/* Evening */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#2F215F] mt-1"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-700">Evening</p>
              <ul className="list-disc pl-4 text-sm text-gray-600">
                <li>Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours).</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
