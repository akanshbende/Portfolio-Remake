import React, { useState } from "react";
import { FaBurger } from "react-icons/fa6";

function HamBurger({ handleToggle }) {
  return (
    <>
      <div
        className="HamBurger block sm:hidden "
        style={{
          position: "absolute",
          right: "10px",
          width: "50px",
          height: "50px",
          zIndex: 1000000,
          width: "fit-content",
          padding: "15px",
          margin: "1rem",
          border: "2px solid",
          borderColor: "#464d5b",
          borderRadius: "15px",
          color: "white",
          cursor: "pointer",
          boxShadow: "0px 5px 10px #16171d",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
        onClick={handleToggle}
      >
        <button className="text-white w-full">
          <FaBurger sx={{ fontSize: "2rem" }} />
        </button>
      </div>
    </>
  );
}

export default HamBurger;
