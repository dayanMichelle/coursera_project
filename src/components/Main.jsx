import React from "react";
import { Route, Routes } from "react-router";
import { submitAPI } from "../apis";
import { About } from "./About";
import { BookingPage } from "./BookingPage";
import { Homepage } from "./Homepage";
import { Menu } from "./Menu";


export const Main = () => {
  const submitForm = (formData) => {
    submitAPI (formData)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage submitForm={submitForm} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </>
  );
};
