import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export const Nav = () => {
  const [activeLink, setActiveLink] = useState(0);
  const container = {
    display:"flex",
    listStyle:"none",
    flexWrap:"wrap"
  }
 
  const listOptions = [
    { text: "Home", route: "/" },
    { text: "About", route: "/about" },
    { text: "Menu", route: "/menu" },
    { text: "Reservations", route: "/booking" },
    { text: "Order Online", route: "/order" },
    { text: "Login", route: "/login" }
  ];

  return (
    <nav className='navbar'>
     <ul style={container}>
     {listOptions.map((li, index) => (
      <li 
      onClick={() => setActiveLink(index)}
      className={`${
        activeLink === index ? "active" : ""
      }`}
      key={li.text}><Link  className='link' to={li.route}>{li.text}</Link></li>
     ))}
     </ul>
    </nav>
  )
}
