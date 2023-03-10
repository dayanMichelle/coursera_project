import React, { useState } from "react";
import "./booking.css";
import { Loading } from "./Loading";

export const BookingForm = ({
  availableTimes,
  dispatch,
  submitForm,
  setReservate,
}) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nGuests, setNGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitForm(date, selectedTime, nGuests, occasion);
    setReservate(true);
  };

  return (
    <>
      {!loading ? (
        <>
          <h4 className="title">Reservate a Table</h4>
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <label htmlFor="res-date">Choose date *</label>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({ type: "AVAILABLE_TIMES", payload: e.target.value });
              }}
              type="date"
              id="res-date"
              data-testid="res-date"
            />
            <label htmlFor="res-time">Choose time *</label>
            <select
              value={selectedTime}
              onChange={(e) => {
                setSelectedTime(e.target.value);
              }}
              id="res-time"
              data-testid="res-time"
            >
              <option>-- select --</option>
              {availableTimes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests *</label>
            <input
              value={nGuests}
              onChange={(e) => setNGuests(e.target.value)}
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
            {nGuests <= 0 || nGuests > 10 ? (<span style={{color:'red', fontSize:"12px"}}>Enter a number between 1 and 10</span>):''}
            <label htmlFor="occasion">Occasion *</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              id="occasion"
              data-testid="res-occasion"
            >
              <option>-- select --</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input
              disabled={
                date === "" ||
                selectedTime === "" ||
                nGuests === "" ||
                nGuests <= 0 ||
                nGuests > 10 ||
                occasion === ""
              }
              type="submit"
              value="Make Your reservation"
            />
          </form>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
