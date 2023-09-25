import React from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container } from "@mui/material";
function About() {
  return (
    <>
      <PageTitle title="About" />
      <Heading title={"About"} />
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
        <div className="about-wrapper">
          <h4>Hello!</h4>
          <br /> I am Akansh Bende from India.
          <br /> An Aspiring Full-Stack Developer looking for Opportunities
          <br />
          Apart from Coding I have a wide range of interests:
          <ul>
            <li>Astronomy</li>
            <li>Graphic Designing</li>
            <li>Playing Games</li>
          </ul>
        </div>
      </Container>
      <Heading title={"Days I Code"} />
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
      ></Container>
    </>
  );
}

export default About;
