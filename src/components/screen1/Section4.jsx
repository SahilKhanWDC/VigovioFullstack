import React from 'react'
import BookingListCard from '../cards/BookingListCard'
import AddressCard from '../cards/AddressCard'

const Section4 = () => {
  return (
    <>
        <div className='w-[90%] mx-auto py-6 flex flex-col gap-6'>
      <h1 className="text-2xl font-bold mb-4">Hotel Booking</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        <BookingListCard
          title="Taj Hotel"
          items={["Deluxe Room", "Free Wi-Fi", "Breakfast Included", "City View", "2 Guests"]}
        />
        <BookingListCard
          title="Marina Bay Sands"
          items={["Infinity Pool", "SkyPark Access", "Spa", "Luxury Suite", "5 Guests"]}
        />
        <BookingListCard
          title="Orchard Inn"
          items={["Standard Room", "Near MRT", "Budget Friendly", "AC", "1 Guest"]}
        />
        <BookingListCard
          title="Raffles Hotel"
          items={["Historical Place", "5-Star Service", "Colonial Style", "2 Guests", "Fine Dining"]}
        />
        <BookingListCard
          title="Sentosa Resort"
          items={["Beachside", "Family Rooms", "Pool", "Theme Park Nearby", "4 Guests"]}
        />
      </div>
      <div>
        <p>1. All hotels are tentative and can be raplcaed with similar.</p>
        <p>2. Breakfast included for all hotels stays.</p>
        <p>3. All hotels will be 4* and above.</p>
        <p>4. A maximum occupancy of 3 person in a hotel room.</p>
      </div>
      <AddressCard/>
    </div>
      <hr className="w-full border-t border-gray-300 my-6" />
    </>
  )
}

export default Section4
