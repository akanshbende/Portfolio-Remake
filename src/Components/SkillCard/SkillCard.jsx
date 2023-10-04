import React from "react";
import "./skillcard.css";
function SkillCard({ icon, name, type, Proficiency }) {
  return (
    <>
      <div
        className="skillcard-wrapper w-1/3 h-4/5  sm:w-56 sm:h-72 "
        style={{
          // width: "200px",
          // height: "260px",
          border: "3px solid rgb(80, 83, 105,0.7)",
          //   height: "cal(100vh-200px)",
          borderRadius: "15px",
          marginTop: "1.5rem",
          padding: "1.5rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 5px 10px #3a3f64",
        }}
      >
        <div className="flex align-middle justify-center card-icon w-full sm:h-5/6">
          <img
            src={icon}
            alt=""
            className="skill-card-img bg-cover bg-center object-contain"
            loading="lazy"
          />
        </div>
        <div className="skillcard-data text-white flex align-middle first-letter justify-center text-center text-bold mb-1 text-lg  my-3 sm:text-lg sm:my-0">
          {name}
        </div>
      </div>
    </>
  );
}

export default SkillCard;
