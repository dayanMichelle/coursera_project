import React, { useReducer } from "react";
import { BookingForm } from "./BookingForm";

function updateTimes(state, action) {
  // action.type => "texto que dice el nombre de la accion" => "availableTimes"
  // action.payload => "data que recibimos desde el dispatch" => "13/02/2024"

  switch (action.type) {
    case "AVAILABLE_TIMES":
    // if (action.payload === "2023-03-15") return ["17:00", "18:00", "19:00"];
      return state;
    default:
      return state;
  }
}

const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    ></BookingForm>
  );
};
