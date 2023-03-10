import React, { useState } from "react";
import "./booking.css";
export const BookingForm = ({ availableTimes, dispatch,submitForm,setReservate }) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nGuests, setNGestst] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(date,selectedTime, nGuests, occasion)
    setReservate(true)
  }
  return (
    <>
    <h4 className="title">Reservate a Table</h4>
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date *</label>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "AVAILABLE_TIMES", payload: e.target.value });
          }}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time *</label>
        <select
          value={selectedTime}
          onChange={(e) => {
            setSelectedTime(e.target.value);
          }}
          id="res-time "
        >
          {availableTimes.map((t) => (
            <option>{t}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests *</label>
        <input
          value={nGuests}
          onChange={(e) => setNGestst(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion *</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};
