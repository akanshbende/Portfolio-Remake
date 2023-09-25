import React from "react";
import PageTitle from "../Components/PageTitle";
import { Container } from "@mui/material";
import ProjectsData from "../Data/ProjectsData";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <PageTitle title="Projects" />
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
          #Projets
        </h1>
      </Container>
      <Container sx={{}}>
        {/* <div className="text-white">Timeline</div> */}

        <div className="projects flex flex-wrap" style={{ flexWrap: "wrap" }}>
          {ProjectsData &&
            ProjectsData.map((project, index) => {
              return (
                <div
                  className=""
                  key={index}
                  style={{
                    // border: "2px solid rgba(24, 24, 24, 0.5)",
                    height: "cal(100vh-200px)",
                    borderRadius: "12px",
                    margin: "2rem",
                    // padding: "0.5rem",
                    backgroundColor: "rgba(24, 24, 24, 0.5)",
                    backdropFilter: "blur(0px)",
                    boxShadow: "0px 5px 10px #3a3f64",
                  }}
                >
                  <ProjectCard
                    img={project?.img}
                    title={project?.title}
                    deploy={project?.deploy}
                    repo={project?.repo}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Projects;
