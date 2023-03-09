import React from "react";
import { Route, Routes } from "react-router";
import { About } from "./About";
import { Booking } from "./Booking";
import { Homepage } from "./Homepage";
import { Menu } from "./Menu";


export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </>
  );
};
