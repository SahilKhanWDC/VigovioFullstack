import React from 'react'

const Section1 = ({
  name,
  itineraryTitle,
  duration,
  departureFrom,
  departure,
  arrival,
  destination,
  noOfTravellers
}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center first-page">
      <div className="flex-1 w-[90%] flex items-center justify-center">
        <img className='h-30 w-auto logo first-page-logo' src="/assets/Group 116.png" alt="logo" />
      </div>
      <div className="flex-2 w-[90%] bg-gradient-to-br from-[#9e7de4] to-[#3e1f4b] text-white flex flex-col gap-2 items-center justify-center border rounded-4xl">
        <h1>Hi, {name}!</h1>
        <h1>{itineraryTitle}</h1>
        <h2>{duration}</h2>
      </div>
      <div className="w-[90%] flex items-center mt-2 justify-between p-3 border-1 rounded-2xl">
        <div>
          <h5>Departure From</h5>
          <p>{departureFrom}</p>
        </div>
        <div>
          <h5>Departure</h5>
          <p>{departure}</p>
        </div>
        <div>
          <h5>Arrival</h5>
          <p>{arrival}</p>
        </div>
        <div>
          <h5>Destination</h5>
          <p>{destination}</p>
        </div>
        <div>
          <h5>No of Travellers</h5>
          <p>{noOfTravellers}</p>
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-6" />
    </div>
  )
}

export default Section1
