import React from "react";

export const CustomersSay = () => {
  const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    flexWrap:"wrap"
  };
  const img = {
    width: "47px",
    height: "47px",
  };
  const card = {
    width: "180px",
    height: "155px",
    padding: "20px",
    backgroundColor:"white"
  };
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor:"rgba(0,0,0,0.3)",
        paddingBottom:"100px",
        marginTop:"20px"
      }}
    >
      <h6 style={{textAlign:"center", fontSize:"36px"}}>Testimonials</h6>
      <div style={container}>
        <div style={card}>
          <p>Rating</p>
          <div style={{ display: "flex" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              tabindex="0"
              style={img}
            />{" "}
            <p style={{ marginLeft: "20px" }}>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div style={card}>
          <p>Rating</p>
          <div style={{ display: "flex" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              tabindex="0"
              style={img}
            />{" "}
            <p style={{ marginLeft: "20px" }}>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div style={card}>
          <p>Rating</p>
          <div style={{ display: "flex" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              tabindex="0"
              style={img}
            />{" "}
            <p style={{ marginLeft: "20px" }}>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div style={card}>
          <p>Rating</p>
          <div style={{ display: "flex" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              tabindex="0"
              style={img}
            />{" "}
            <p style={{ marginLeft: "20px" }}>Name</p>
          </div>
          <p>Review Text</p>
        </div>
      </div>
    </section>
  );
};
