import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
function Button2({ to, title, icon, onclick }) {
  // const transformButton = document.getElementById("");
  // let transformed = false;

  // transformButton.addEventListener("click", () => {
  //   if (transformed) {
  //     button_2.style.transform = "translate(0, 0)";
  //   } else {
  //     button_2.style.transform = "translate(-10px, 10px)";
  //   }
  //   transformed = !transformed;
  // });
  return (
    <>
      <Link
        onClick={onclick}
        className="button_2 px-3"
        style={{
          width: "250px",
          height: "60px",
          lineHeight: "1.2rem",
          fontSize: "1.2rem",
          display: "flex",
          padding: "8px 20px",
          border: "2px solid",
          borderColor: "#464d5b",
          borderRadius: "10px",
          color: "white",
          alignSelf: "center",
          gap: "5px",
          alignItems: "center",

          // boxShadow: "0px 8px 15px #3a3f64",
          // backdropFilter: "blur 5px",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
        to={to}
      >
        <span className="">{icon}</span>
        <span className="text-center">{title}</span>
      </Link>
    </>
  );
}

export default Button2;
