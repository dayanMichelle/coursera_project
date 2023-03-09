import React from "react";

export const Footer = () => {
  const ul ={
    listStyle:"none",
  }
  const a = {
    color:"black",
  }
  return (
    <footer style={{display:"flex",flexDirection:"row", backgroundColor:"rgba(0,0,0,0.3)", justifyContent:"center", gap:"50px"}}>
      <img src="/Logo.svg" />
      <nav style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", }}>
       <ul style={ul}>
        <p>Doormat Navegation</p>
          <li><a style={a} href="">Home</a></li>
          <li><a style={a} href="">About</a></li>
          <li><a style={a} href="">Menu</a></li>
          <li><a style={a} href="">Reservations</a></li>
          <li><a style={a} href="">Order Online</a></li>
          <li><a style={a} href="">Login</a></li>
       </ul>
       <ul style={ul}>
        <p>Contact</p>
          <li><a style={a} href="">Adress</a></li>
          <li><a style={a} href="">Phone Number</a></li>
          <li><a style={a} href="">Email</a></li>
       </ul>
       <ul  style={ul}>
        <p>Social Media Links</p>
          <li><a style={a} href="">Adress</a></li>
          <li><a style={a} href="">Phone Number</a></li>
          <li><a style={a} href="">Email</a></li>
       </ul>
      </nav>
    </footer>
  );
};
