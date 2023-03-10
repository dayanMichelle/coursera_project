import React, { useReducer, useState } from "react";
import { BookingForm } from "./BookingForm";
import { ConfirmedBooking } from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "./reducers/reducerBooking";

export const BookingPage = ({ submitForm }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const [reservate, setReservate] = useState(false);
  return (
    <>
      {!reservate ? (
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
          setReservate={setReservate}
        ></BookingForm>
      ) : (
        <ConfirmedBooking />
      )}
    </>
  );
};
