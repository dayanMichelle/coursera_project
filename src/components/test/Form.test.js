import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { initializeTimes } from "../reducers/reducerBooking";
import { BookingForm } from "../BookingForm";

test("if the number of guests it's lower than 1 don't send the form", () => {
  const submitFormSpy = jest.fn(() => {});
  render(
    <BookingForm
      availableTimes={initializeTimes}
      dispatch={() => {}}
      submitForm={submitFormSpy}
      setReservate={() => {}}
    />
  );

  fullFilledForm({
    calendar: "2024-02-02",
    time: initializeTimes[0],
    guests: "0",
    ocassion: "Birthday",
  });
  sendReservation();
  notSendFormOK(submitFormSpy);
});

test("if the number of guests it's greater than 11 don't send the form", () => {
    const submitFormSpy = jest.fn(() => {});
    render(
      <BookingForm
        availableTimes={initializeTimes}
        dispatch={() => {}}
        submitForm={submitFormSpy}
        setReservate={() => {}}
      />
    );
  
    fullFilledForm({
      calendar: "2024-02-02",
      time: initializeTimes[0],
      guests: "12",
      ocassion: "Birthday",
    });
    sendReservation();
    notSendFormOK(submitFormSpy);
  });



const fullFilledForm = ({ calendar, time, guests, ocassion }) => {
  //choose date
  writeInputCalendar(calendar);

  //choose time
  writeInputTime(time);

  //
  writeInputGuests(guests);

  //
  writeInputOccasion(ocassion);
};

const sendReservation = () => {
  const inputGuests = screen.getByText("Make Your reservation");
  fireEvent.click(inputGuests);
};

const writeInputCalendar = (value) => {
  const inputCalendar = screen.getByTestId("res-date");
  fireEvent.change(inputCalendar, { target: { value } });
};

const writeInputTime = (value) => {
  const select = screen.getByTestId("res-time");
  fireEvent.change(select, { target: { value } });
};

const writeInputGuests = (value) => {
  const inputGuests = screen.getByPlaceholderText("1");
  fireEvent.change(inputGuests, { target: { value } });
};

const writeInputOccasion = (value) => {
  const select = screen.getByTestId("res-occasion");
  fireEvent.change(select, { target: { value } });
};

const sendFormOK = (submitFormSpy) => {
  expect(submitFormSpy).toHaveBeenCalled();
};

const notSendFormOK = (submitFormSpy) => {
  expect(submitFormSpy).not.toHaveBeenCalled();
};
