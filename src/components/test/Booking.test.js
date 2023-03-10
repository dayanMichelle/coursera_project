import { render, screen, describe } from "@testing-library/react";
import { BookingForm } from "../BookingForm";
import { initializeTimes, updateTimes } from "../reducers/reducerBooking";


test('Renders the BookingForm heading', () => {
    render(<BookingForm  availableTimes={initializeTimes}
        dispatch={updateTimes} />);
    const headingElement = screen.getByText("Reservate a Table");
    expect(headingElement).toBeInTheDocument();
})


test("devuelve el array de horas correcto", () => {
      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      const result = initializeTimes;
      expect(result).toEqual(expectedTimes);
});


test("devuelve el mismo estado  se proporciona", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "AVAILABLE_TIMES", payload: "13/02/2024" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});
