import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  return (
    <>
      <div
        className="scrolltotop"
        style={{
          width: "50px",
          height: "50px",
          zIndex: 1000,
          width: "fit-content",
          padding: "15px",
          border: "2px solid",
          borderColor: "#464d5b",
          borderRadius: "15px",
          color: "white",
          cursor: "pointer",
          boxShadow: "0px 5px 10px #3a3f64",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <button className="text-white w-full" style={{ width: "100%" }}>
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}

export default ScrollToTop;
