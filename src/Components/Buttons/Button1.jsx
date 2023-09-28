import React from "react";
import { Link } from "react-router-dom";

function Button1({ to, title, icon, onclick }) {
  return (
    <>
      <Link
        onClick={onclick}
        className="px-3"
        style={{
          width: "fit-content",

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
          backdropFilter: "blur(10px)",
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

export default Button1;
