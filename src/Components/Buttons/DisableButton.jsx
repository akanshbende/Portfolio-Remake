import React from "react";
import { Link } from "react-router-dom";

function DisableButton({ to, title, icon }) {
  return (
    <>
      <Link
        className="px-3"
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
          color: "#505369",
          backgroundColor: "rgba(0,0,0,0.3)",
          alignSelf: "center",
          gap: "5px",
          alignItems: "center",
          cursor: "not-allowed",

          // boxShadow: "0px 8px 15px #3a3f64",
          // backdropFilter: "blur 5px",
        }}
        to={to}
      >
        <span className="">{icon}</span>
        <span className="text-center">{title}</span>
      </Link>
    </>
  );
}

export default DisableButton;
