import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import "./projectcard.css";
import { FaRocket } from "react-icons/fa";
function ProjectCard({ img, title, deploy, repo }) {
  return (
    <>
      <div
        className="wrapper flex align-middle justify-between items-center"
        style={{
          width: "300px",
          height: "15.5rem",
          borderRadius: "12px",
          // border: "2px solid rgba(255, 255, 255, 0.56)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="flex-col justify-between ">
          <div className="project-image flex items-center justify-center ">
            <img
              src={img ? img : "./public/Github-Symbol.png"}
              alt=""
              className="project-img"
              loading="lazy"
              style={{
                borderRadius: "12px 12px 0 0",
                width:
                  img == "./public/TransactIQ_Logo.png" ||
                  img == "./public/NearX_logo.png"
                    ? "50%"
                    : "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div className="project-title text-white m-2">
            <h3 className="text-3xl">{title}</h3>
          </div>
          <div className="project-links m-2  text-white flex ">
            {deploy == "" ? (
              <div></div>
            ) : (
              <a
                target="_blank"
                className="deploy text-white text-3xl m-2"
                href={deploy ? deploy : ""}
              >
                <FaRocket className="ease-in-out duration-300  hover:rotate-12 hover:text-teal-200" />
              </a>
            )}
            <a target="_blank" className="repo text-3xl m-2" href={repo}>
              <BsGithub className="ease-in-out duration-300  hover:rotate-12 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
