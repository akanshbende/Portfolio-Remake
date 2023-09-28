import { Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
          width: "max-content",
          fontSize: "1.2rem",
          margin: "1rem",
          padding: "10px",
          border: "2px solid",
          borderColor: "#464d5b",
          borderRadius: "15px",
          color: "white",
          alignSelf: "center",
          boxShadow: "0px 8px 15px #3a3f64",
          backdropFilter: "blur 5px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="text-white">
          <h1>Made with ❤️</h1>
        </div>
      </Container>
    </>
  );
}

export default Footer;
