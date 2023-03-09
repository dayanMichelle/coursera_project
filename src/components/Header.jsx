import React from "react";

export const Header = ({ children }) => {
  const container = {
    display:"flex",
    margin:"0 20px",
    justifyContent:"center"
  }
  return (
    <header style={container} >
      {" "}
      <img src="/Logo.svg" alt="Logo Little Lemon" />
      {children}
    </header>
  );
};
