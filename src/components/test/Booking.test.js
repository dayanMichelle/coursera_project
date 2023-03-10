import { render, screen, describe } from "@testing-library/react";
import { fetchAPI } from "../../apis";
import { BookingForm } from "../BookingForm";
import { initializeTimes, updateTimes } from "../reducers/reducerBooking";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm availableTimes={initializeTimes} dispatch={updateTimes} />
  );
  const headingElement = screen.getByText("Reservate a Table");
  expect(headingElement).toBeInTheDocument();
});

test("devuelve el array de horas correcto", () => {
  const expectedTimes = fetchAPI(new Date());
  const result = initializeTimes;
  expect(result).toEqual(expectedTimes);
});

test("devuelve el mismo estado  se proporciona", () => {
  const initialState = [
    "17:00",
    "17:30",
    "18:30",
    "19:00",
    "20:00",
    "20:30",
    "21:00",
    "23:00",
  ];
  const action = { type: "AVAILABLE_TIMES", payload: "2023-03-11" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});
