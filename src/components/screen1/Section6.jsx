import React from 'react'
import BookingListCard from "../cards/BookingListCard";

const Section6 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto pb-20">
        <h1>Activity table</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <BookingListCard
            className="flex-1"
            title="City"
            items={["Rio de Janeiro", "Singapore", "Sydney", "Melbourne", "Brisbane","Perth", "Adelaide", "Canberra", "Hobart", "Darwin"]}
          />
          <BookingListCard
            className="flex-2"
            title="Activity"
            items={["City Tour", "Beach Day", "Cultural Experience", "Wildlife Safari", "Shopping Spree", "Food Tour", "Adventure Sports", "Nightlife Exploration", "Historical Tour", "Nature Walk"]}
          />
          <BookingListCard
            className="flex-1"
            title="Type"
            items={["Sightseeing", "Relaxation", "Cultural", "Adventure", "Shopping", "Culinary", "Sports", "Nightlife", "Historical", "Nature"]}
          />
          <BookingListCard
            className="flex-1"
            title="Time required"
            items={["2 hours", "1 day", "3 hours", "4 hours", "5 hours", "6 hours", "7 hours", "8 hours", "9 hours", "10 hours"]}
          />
        </div>
        <h2>Terms and Conditions</h2>
        <a className='text-blue-500 text-2xl underline' href="#">View Terms and Conditions</a>
      </div>
    </>
  )
}

export default Section6
