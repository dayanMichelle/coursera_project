import React, { useReducer } from "react";
import { BookingForm } from "./BookingForm";
import { initializeTimes, updateTimes } from "./reducers/reducerBooking";

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    ></BookingForm>
  );
};
