import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container } from "@mui/material";
import GithubRepo from "../Components/GithubContributes/GithubRepo";

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
            <span className="about-country"> Pune. </span>
            <br />
            <br />
            <p>
              I'm a <span className="about-name">Java Backend Engineer </span>
              passionate about designing and building scalable, secure, and
              high-performance backend systems.
            </p>
            <br />
            <p>
              I enjoy solving complex engineering problems using modern Java
              technologies and following clean architecture, design patterns,
              and industry best practices.
            </p>
            <br />
            <p>
              My primary expertise includes{" "}
              <span className="text-yellow-200">
                Java, Spring Boot, Spring Security, Microservices, REST APIs,
                Hibernate, JPA, SQL, PostgreSQL, MySQL , Docker, Kubernetes,
                Redis, Apache Kafka, API Gateway, and AWS .
              </span>
              <br />
              <br />I have hands-on experience designing backend applications
              with a strong focus on performance, security, scalability, and
              maintainability.
              <br />
              <br />
              <p>
                I'm continuously expanding my expertise in Distributed Systems,
                System Design, Multithreading & Concurrency, JVM Internals,
                Database Optimization, Caching Strategies, Cloud-Native
                Development, with a focus on building reliable and scalable
                enterprise applications.
                <br />
                <br />
                I'm actively seeking opportunities as a Java Backend Engineer /
                Software Engineer, where I can contribute to building secure,
                scalable, and high-performance systems while continuing to grow
                as an engineer.
                <br />
                <br />
                I've also solved <span className="about-country"> 100+ </span>
                problems on leetcode and 100+ on other platforms.
                <br />
                <br />
              </p>
            </p>
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
