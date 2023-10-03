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
        className="wrapper "
        style={{
          width: "300px",
          height: "15rem",
        }}
      >
        <div className="content flex-col">
          <div className="project-image rounded-xl">
            <img
              src={img}
              alt=""
              className="project-img "
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
          <div className="project-title text-white m-2">
            <h3>{title}</h3>
          </div>
          <div className="project-links m-2 text-white flex ">
            <a
              target="_blank"
              className="deploy text-white text-2xl m-2"
              href={deploy}
            >
              <FaRocket className="ease-in-out duration-300  hover:rotate-12 hover:text-teal-200" />
            </a>
            <a target="_blank" className="repo text-2xl m-2" href={repo}>
              <BsGithub className="ease-in-out duration-300  hover:rotate-12 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
