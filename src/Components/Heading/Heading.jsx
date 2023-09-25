import { Container } from "@mui/material";
import React from "react";

function Heading({ title }) {
  return (
    <>
      <Container
        sx={{
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(0px)",
          boxShadow: "0px 5px 10px #3a3f64",
        }}
      >
        {/* <div className="text-white">Timeline</div> */}
        <h1
          className="text-white
          text-5xl "
        >
          #{title}
        </h1>
      </Container>
    </>
  );
}

export default Heading;
