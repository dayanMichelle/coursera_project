import React from "react";

export const Chicago = () => {
  const container = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop:"80px",
    paddingBottom:"20px",
    textAlign:"left",
    justifyContent:"center",
  };
  return (
    <section style={container}>
      <div style={{ maxWidth: "300px" }}>
        <h2>Little Lemon</h2>
        <span>Chicago</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          accusamus cum. Id vitae alias fugiat illo repellendus officiis dicta
          sapiente cumque, distinctio commodi voluptatem dolor culpa ut deserunt
          possimus nostrum!
        </p>
      </div>
      <div style={{position:"relative"}}>
        <img
          width="272px"
          height="338px"
          style={{ objectFit: "cover"}}
          src="/photo1.jpg"
          tabindex="0"
          alt=""
        />
        <img
          width="272px"
          height="338px"
          style={{ objectFit: "cover", position:"absolute", top:"-60px", left:"200px" }}
          src="/photo2.jpg"
          tabindex="0"
          alt=""
          
        />
      </div>
    </section>
  );
};
