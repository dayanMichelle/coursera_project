import React, { useState } from "react";
import "./booking.css";
export const BookingForm = () => {
  const [date, setDate] = useState("")
  const [nGuests, setNGestst] = useState("")
  const [occasion, setOccasion] = useState("")
  const [time, setTime] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label for="res-date">Choose date</label>
      <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" id="res-date" />
      <label for="res-time">Choose time</label>
      <select value={time} onChange={(e)=> setTime(e.target.value)}  id="res-time ">
        {time.map(t=> (<option>{t}</option>))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={nGuests} onChange={(e)=> setNGestst(e.target.value)}  type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select value={occasion} onChange={(e)=> setOccasion(e.target.value)}  id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
