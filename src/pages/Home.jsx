import React from "react";

import { Helmet } from "react-helmet";
import Typed from "typed.js";
import PageTitle from "../Components/PageTitle";
import { Box, Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

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
        }}
      >
        <div className="flex justify-between px-2">
          <div
            className="p-2 m-2 w-1/2"
            style={
              {
                // border: "1px solid #ffffff",
              }
            }
          >
            {/* <h1 className="text-white">home page content</h1> */}
            <div className="text-white text-6xl w-full">
              <h1>I'm</h1>
              <span
                className=""
                style={{
                  color: "#53efeb",
                }}
                ref={el}
              />
            </div>
            <div className="text-white text-2xl mt-4 font-thin w-full">
              <p className="break-normal tracking-wideer">
                HOLA! , If you are looking for a web designer and developer,
                here is a portfolio !!
              </p>
            </div>
            <div className="buttons mt-7">
              <span
                className="px-3"
                style={{
                  width: "fit-content",
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
                <Link to="/">Projects</Link>
              </span>
            </div>
          </div>
          <div
            className="m-2 p-2"
            style={
              {
                // border: "1px solid #ffffff",
              }
            }
          >
            <img
              src="/akansh.jpg"
              width={350}
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
        {/* <div className="text-white">Timeline</div> */}
      </Container>
      <Container
        sx={{
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(0px)",
          boxShadow: "0px 5px 10px #3a3f64",
        }}
      >
        <h1 className="text-white text-5xl ">#Timeline</h1>
      </Container>
    </>
  );
}

export default Home;
