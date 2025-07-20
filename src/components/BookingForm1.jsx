import React, { useState } from "react";
import { generatePDF } from "../utils/pdfGenerator";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    departureFrom: "",
    departureDate: "",
    arrivalDate: "",
    destination: "",
    travellers: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Travel Booking</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="input"
          required
        />
        <input
          type="text"
          name="departureFrom"
          value={form.departureFrom}
          onChange={handleChange}
          placeholder="Departure From"
          className="input"
          required
        />
        <input
          type="date"
          name="departureDate"
          value={form.departureDate}
          onChange={handleChange}
          placeholder="Departure Date"
          className="input"
          required
        />
         <input
          type="date"
          name="arrivalDate"
          value={form.arrivalDate}
          onChange={handleChange}
          placeholder="Arrival Date"
          className="input"
          required
        />
        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="Destination"
          className="input"
          required
        />
        <input
          type="number"
          name="travellers"
          value={form.travellers}
          onChange={handleChange}
          placeholder="Travellers"
          min="1"
          className="input"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full font-semibold hover:bg-blue-700 transition"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
}