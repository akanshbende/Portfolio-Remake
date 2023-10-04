import React from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container } from "@mui/material";
import GithubRepo from "../Components/GithubContributes/GithubRepo";
import LeetcodeCode from "../Components/LeetcodeSolutions/LeetcodeCode";

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
          width: "90%",
        }}
      >
        <div className="about-wrapper text-white ">
          <h4 className="about-hello ">Hello!</h4>
          <br />
          <div className="about-intro text-3xl ">
            I am <span className="about-name"> Akansh Bende </span> from
            <span className="about-country"> India. </span>
            <br /> An Aspiring Full-Stack Developer looking for Opportunities
            <br />
            Apart from Coding I have a wide range of interests:
            <div className="about-hobby m-2">
              <ul className="about-hobby-list list-disc font-extrabold">
                <li>Astronomy</li>
                <li>Graphic Designing</li>
                <li>Playing Games</li>
              </ul>
            </div>
            <h4>I am always looking forward to New Technologies.</h4>
          </div>
        </div>
      </Container>

      <Heading title={"Github Contributions"} />
      <Container
        sx={{
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 5px 10px #3a3f64",
          width: "90%",
        }}
      >
        <GithubRepo />
      </Container>
      {/* <Heading title={"Days I Code"} />
      <Container
        sx={{
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 5px 10px #3a3f64",
        }}
      >
        <LeetcodeCode />
      </Container> */}
    </>
  );
}

export default About;
