import React from "react";
import { Link } from "react-router-dom";

export const Specials = () => {
  const button = {
    backgroundColor: "#F4CE14",
    color: "black",
    borderRadius: "5px",
    border: "none",
    width: "200px",
    textDecoration: "none",
    textAlign: "center",
    padding: "10px 0px",
  };
  const article = {
    maxWidth: "264.67px",
    height: "479px",
    backgroundColor: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  };
  const img = {
    width: "265px",
    height: "185px",
    borderTopLeftRadius: "20px",
  };
  return (
    <section
      style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "40px", fontWeight: "bold" }}>
          This weeks specials!
        </h4>
        <Link className="reserve" to="/menu" style={button}>
          <p>Online Menu</p>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <article style={article}>
          <img style={img} alt="food greek" src="/greek.jpg" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>Greek salad</p>{" "}
            <span>$12.99</span>
          </div>
          <p
            style={{
              textAlign: "left",
              margin: "0px 20px",
              color: "#495E57",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            itaque laborum! Distinctio voluptates, quibusdam numquam at ex quo
            provident, ea cupiditate, minima dolorem placeat reprehenderit
            laborum adipisci eligendi harum rem.
          </p>
          <span
            style={{
              textAlign: "left",
              fontSize: "16px",
              margin: "15px 20px",
              fontWeight: "500",
            }}
          >
            Order a delivery
          </span>
        </article>
        <article style={article}>
          <img
            style={{ width: "265px", height: "185px" }}
            alt="food greek"
            src="/greek.jpg"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>Bruchetta</p>{" "}
            <span>$5.99</span>
          </div>
          <p
            style={{
              textAlign: "left",
              margin: "0px 20px",
              color: "#495E57",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            itaque laborum! Distinctio voluptates, quibusdam numquam at ex quo
            provident, ea cupiditate, minima dolorem placeat reprehenderit
            laborum adipisci eligendi harum rem.
          </p>
          <span
            style={{
              textAlign: "left",
              fontSize: "16px",
              margin: "15px 20px",
              fontWeight: "500",
            }}
            
          >
            Order a delivery
          </span>
        </article>
        <article style={article}>
          <img
            style={{ width: "265px", height: "185px" }}
            alt="food greek"
            src="/greek.jpg"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>
              Lemon Dessert
            </p>{" "}
            <span>$5.00</span>
          </div>
          <p
            style={{
              textAlign: "left",
              margin: "0px 20px",
              color: "#495E57",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            itaque laborum! Distinctio voluptates, quibusdam numquam at ex quo
            provident, ea cupiditate, minima dolorem placeat reprehenderit
            laborum adipisci eligendi harum rem.
          </p>
          <span
            style={{
              textAlign: "left",
              fontSize: "16px",
              margin: "15px 20px",
              fontWeight: "500",
            }}
          >
            Order a delivery
          </span>
        </article>
      </div>
    </section>
  );
};
