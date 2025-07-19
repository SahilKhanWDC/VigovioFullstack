import React from "react";
import AddressCard from "../cards/AddressCard";
import FlightInfoCard from "../cards/FlightInfoCard";
import BookingListCard from "../cards/BookingListCard";

const Section7 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col gap-4 pb-20">
        <AddressCard className="my-20" />
        <h1>Payment plan</h1>
        <FlightInfoCard />
        <FlightInfoCard />
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BookingListCard
            className="flex-1"
            title="Installment"
            items={["Installment 1", "Installment 2", "Installment 3"]}
          />
          <BookingListCard
            className="flex-2"
            title="Amount"
            items={["3,50,000", "2,50,000", "Remaining"]}
          />
          <BookingListCard
            className="flex-1"
            title="Due Date"
            items={[
              "Initial payment",
              "post visa approval",
              "20 days before travel",
            ]}
          />
        </div>
        <div>
          <h1>Visa Information</h1>
          <div className="flex text-center justify-around py-2 border-1 rounded-2xl">
            <div>
              <h5>Visa type</h5>
              <p>Tourist</p>
            </div>
            <div>
              <h5>Validity</h5>
              <p>30 days</p>
            </div>
            <div>
              <h5>Processing date</h5>
              <p>14/06/2025</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-6" />
      <div className="text-center space-y-4 p-10">
        <h1 className="text-2xl font-bold text-purple-900 tracking-wide">
          PLAN.PACK.GO!
        </h1>
        <button className="w-[312px] h-12 bg-purple-600 text-white font-bold hover:bg-purple-800 rounded-full transition duration-300">
          Book now
        </button>
      </div>
    </>
  );
};

export default Section7;
