import React from "react";

import { Helmet } from "react-helmet";
import Typed from "typed.js";
import PageTitle from "../Components/PageTitle";
import { Box, Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import CustomizedTimeline from "../Components/Timeline/TimeLine";

import { CiLocationArrow1 } from "react-icons/ci";
// import ChatBubble from "../Components/ChatBubble/ChatBubbleComp";
// import ChatBubbleComp from "../Components/ChatBubble/ChatBubbleComp";

// or
// import { Timeline } from "@mui/lab";

function Home() {
  const el = React.useRef(null);
  // var typed = new Typed(".auto-type", {
  //   strings: ["Akansh Bende ^1000", "a Web Developer ^1000"],
  //   typeSpeed: 100,
  //   backSpeed: 50,
  //   loop: true,
  // });
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Akansh Bende ^1000",
        "a Student ^1000",
        "a Full-Stack Developer ^1000",
        "a Coder ^1000",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // {
  //   const blurDivs = document.querySelector("blur-load");
  // }

  // const img = blurDivs.querySelector("img");
  // function loaded() {
  //   // div. classList.add("Ioaded")
  // }
  // if (img.complete) {
  //   loaded();
  // } else {
  //   img.addEventListener("load", loaded);
  // }

  return (
    <>
      <PageTitle title="Home" />
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
          position: "relative",
          fontWeight: 600,
          width: "93%",
        }}
        className="home-container"
      >
        {/* <div className="anim-box1 absolute "></div>
        <div className="anim-box2 absolute "></div> */}
        <div className="block justify-between px-2 z-50  sm:flex">
          <div
            className="p-2 m-2 w-full  sm:w-1/2"
            style={
              {
                // border: "1px solid #ffffff",
              }
            }
          >
            {/* <h1 className="text-white">home page content</h1> */}
            <div className="text-white text-5xl sm:text-6xl w-full text-bold">
              <h1>I'm</h1>
              <span
                className=""
                style={{
                  color: "#53efeb",
                }}
                ref={el}
              />
            </div>
            <div className="text-white text-2xl sm:text-3xl mt-4 font-thin sm:w-full">
              <p
                className="break-normal  text-900"
                style={{ letterSpacing: "2px", fontWeight: 700 }}
              >
                <span className="home-hello text-4xl text-bold text-lime-400">
                  HOLA!
                </span>
                , If you are looking for a web designer and developer, here is a
                portfolio!!
              </p>
            </div>
            <div className="buttons mt-7">
              <div
                className="px-3"
                style={{
                  width: "max-content",
                  fontSize: "1.2rem",

                  padding: "8px 20px",
                  border: "2px solid",
                  borderColor: "#464d5b",
                  borderRadius: "10px",
                  color: "white",
                  alignSelf: "center",
                  // boxShadow: "0px 8px 15px #3a3f64",
                  // backdropFilter: "blur 5px",
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              >
                <Link
                  to="/projects"
                  className="flex"
                  style={{ letterSpacing: "2px", fontWeight: 700 }}
                >
                  Projects
                  <CiLocationArrow1 className="home-arrow self-center mx-1 text-bold text-xl ease-in-out duration-300  hover:rotate-45" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="blur-load m-2 p-2"
            style={
              {
                // border: "1px solid #ffffff",
              }
            }
          >
            <img
              src="/akansh.webp"
              width={350}
              alt=""
              style={{ borderRadius: "5px" }}
              loading="lazy"
            />
          </div>
        </div>
        {/* <div className="text-white">Timeline</div> */}
      </Container>

      {/* <motion.div
        animate={{
          x: 100,
          y: -50,
          scale: 1,
          rotate: 0,
        }}
      /> */}
      <Container
        sx={{
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "2rem",
          marginBottom: "2rem",
          // padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 5px 10px #3a3f64",
          width: "95%",
        }}
        className="text-xs"
      >
        <h1
          className="text-white text-5xl "
          // style={{ textShadow: "1px 5px #000000" }}
        >
          #Timeline
        </h1>

        <CustomizedTimeline />
      </Container>
    </>
  );
}

export default Home;
