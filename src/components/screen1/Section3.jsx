import React from "react";
import FlightInfoCard from "../cards/FlightInfoCard";

const Section3 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto py-1 flex flex-col ">
        <h1>Flight Details</h1>
        <div className="flex flex-col gap-2">
          <FlightInfoCard />
          <FlightInfoCard />
          <FlightInfoCard />
          <FlightInfoCard />
        </div>
        <p>Note : All flights includes meals, seat selection, and baggage.</p>
      </div>
      <hr className="w-full border-t border-gray-300 my-6" />
    </>
  );
};

export default Section3;
