import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  const container = {
    display:"flex",
    listStyle:"none",
    flexWrap:"wrap"
  }
  const links = {
    textDecoration:"none",
    color:"black",
    margin:"0 20px"
  }
  return (
    <nav>
     <ul style={container}>
      <li><Link style={links} to="/">Home</Link></li>
      <li><Link style={links} to="/about">About</Link></li>
      <li><Link style={links} to="/menu">Menu</Link></li>
      <li><Link style={links} to="/booking">Reservations</Link></li>
      <li><Link style={links} to="/order">Order Online</Link></li>
      <li><Link style={links} to="/login">Login</Link></li>
     </ul>
    </nav>
  )
}
