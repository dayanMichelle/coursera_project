import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const ul ={
    listStyle:"none",
  }
  const a = {
    color:"black",
  }
  return (
    <footer style={{display:"flex",flexDirection:"row", backgroundColor:"rgba(0,0,0,0.3)", justifyContent:"center", gap:"50px"}}>
      <img src="/Logo.svg" alt="logo of little lemmon" />
      <nav style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", }}>
       <ul style={ul}>
        <p>Doormat Navegation</p>
          <li><Link to="/" style={a} href="">Home</Link></li>
          <li><Link to="/about" style={a} href="">About</Link></li>
          <li><Link to="/menu" style={a} href="">Menu</Link></li>
          <li><Link to="/booking" style={a} href="">Reservations</Link></li>
          <li><Link style={a} href="">Order Online</Link></li>
          <li><Link style={a} href="">Login</Link></li>
       </ul>
       <ul style={ul}>
        <p>Contact</p>
          <li><Link style={a} href="">Adress</Link></li>
          <li><Link style={a} href="">Phone Number</Link></li>
          <li><Link style={a} href="">Email</Link></li>
       </ul>
       <ul  style={ul}>
        <p>Social Media Links</p>
          <li><Link style={a} href="">Adress</Link></li>
          <li><Link style={a} href="">Phone Number</Link></li>
          <li><Link style={a} href="">Email</Link></li>
       </ul>
      </nav>
    </footer>
  );
};
