import React from "react";
import ItineraryCard from "../cards/ItineraryCard";
import AddressCard from "../cards/AddressCard";

const Section2 = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 mt-3 items-center justify-center ">
        <ItineraryCard num={1} />
        <ItineraryCard num={2} />
        <ItineraryCard num={3} />
        <div className="w-[90%] mx-auto">
            <AddressCard/>
        </div>
        <ItineraryCard num={4} />
        <hr className="w-full border-t border-gray-300 my-6" />
      </div>
    </>
  );
};

export default Section2;
