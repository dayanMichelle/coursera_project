import React from 'react'
import './booking.css'
export const Booking = () => {
  return (
    <div class="form">
    <div class="title">Little lemon 🍋</div>
    <div class="subtitle">Let's Reservate a Table</div>
    <div class="input-container ic1">
      <input id="firstname" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="firstname" class="placeholder">First name</label>
    </div>
    <div class="input-container ic2">
      <input id="lastname" class="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="lastname" class="placeholder">Last name</label>
    </div>
    <div class="input-container ic2">
      <input id="email" class="input" type="text" placeholder=" " />
      <div class="cut cut-short"></div>
      <label for="email" class="placeholder">Email</label>
    </div>
    <button type="text" class="submit">submit</button>
  </div>
  )
}
