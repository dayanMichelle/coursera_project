import React from "react";
import { Link } from "react-router-dom";
import './calltoaction.css'

export const CallToAction = () => {
  const container = {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "20px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    flexWrap:"wrap"
  };
  const button = {
    backgroundColor: "#F4CE14",
    color: "black",
    borderRadius: "5px",
    border: "none",
    width: "200px",
    textDecoration:"none",
    textAlign:"center",
    padding:"20px 0px"
  };

  return (
    <section style={container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h1
            style={{
              color: "rgba(244,206,20,0.6)",
              fontSize: "64px",
              margin: 0,
            }}
          >
            Little Lemon
          </h1>
          <span style={{ color: "white", fontWeight: "bold" }}>Chicago</span>
        </div>

        <p style={{ color: "white", width: "422px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          natus numquam delectus doloribus quasi quam similique voluptate quos,
          accusantium, saepe quia aut eos in? Laboriosam aspernatur sit tenetur
          ullam animi..
        </p>
        <Link
          style={button}
          className="reserve"
          tabindex="0"
          data-message="button to reservate a table"
          to="/booking"
          aria-label="On Click"
          
        >
          Reserve a Table
        </Link>
      </div>
      <img
        style={{ width: "375px", height: "325px", objectFit: "cover" }}
        src="restauranfood.jpg"
        alt="food"
      />
    </section>
  );
};
