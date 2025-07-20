import React from "react";

const BookingListCard = ({ title = "Default Title", items = [], className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-md p-4 text-center booking-card no-break ${className}`}>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          {title}
        </li>
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );    
};


export default BookingListCard;
