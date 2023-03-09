import React from "react";

export const Header = ({ children }) => {
  return (
    <header>
      {" "}
      <img src="/Logo.svg" alt="Logo Little Lemon" />
      {children}
    </header>
  );
};
