import React from "react";
import { CallToAction } from "./CallToAction";
import { Chicago } from "./Chicago";
import { CustomersSay } from "./CustomersSay";
import { Specials } from "./Specials";
export const Homepage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      
    </>
  );
};
