import React from "react";
import BookingListCard from "../cards/BookingListCard";
import AddressCard from "../cards/AddressCard";

const Section5 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h1>Important Notes</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BookingListCard
            className="flex-1"
            title="Point"
            items={[
              "Flight No: AI-202",
              "From: Delhi (DEL)",
              "To: Bengaluru (BLR)",
              "Date: 20 July 2025",
              "Status: Confirmed",
            ]}
          />
          <BookingListCard
            className="flex-2"
            title="Details"
            items={[
              "Visa Type: Tourist",
              "Validity: 30 Days",
              "Issue Date: 10 July 2025",
              "Visa Status: Approved",
              "Passport No: M1234567",
            ]}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <h1>Scope of Service</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BookingListCard
            className="flex-1"
            title="Service"
            items={[
              "Flight No: AI-202",
              "From: Delhi (DEL)",
              "To: Bengaluru (BLR)",
              "Date: 20 July 2025",
              "Status: Confirmed",
            ]}
          />
          <BookingListCard
            className="flex-2"
            title="Details"
            items={[
              "Visa Type: Tourist",
              "Validity: 30 Days",
              "Issue Date: 10 July 2025",
              "Visa Status: Approved",
              "Passport No: M1234567",
            ]}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <h1>Inclusion Summary</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BookingListCard
            className="flex-1"
            title="Category"
            items={["Flight", "Tourist Tax", "Hotel"]}
          />
          <BookingListCard
            className="flex-1"
            title="Count"
            items={["2", "2", "2"]}
          />
          <BookingListCard
            className="flex-2"
            title="Details"
            items={[
              "All flights mentioned",
              "singapore-sydney-mercure-melbourne",
              "airport to hotel to attractions",
            ]}
          />
          <BookingListCard
            className="flex-1"
            title="Status"
            items={["waiting", "waiting", "confirmed"]}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <b>Transfer policy</b>
        <p>
          We value your privacy and are committed to protecting your personal
          information. All data collected is used solely to improve your
          experience and is never shared without your consent.
        </p>
        <AddressCard />
      </div>
    </>
  );
};

export default Section5;
