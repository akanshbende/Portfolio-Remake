import { Container, Stack, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import items from "../../Data/SidebarItemData";
import { Link } from "react-router-dom";
import HamBurger from "../HamBurger/HamBurger";
import "./sidebar.css";
function Sidebar() {
  var marker = document.querySelector(".marker");
  var item = document.querySelector("a");
  function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }

  // item.forEach((Link) => {
  //   Link.addEventListener("click", (e) => {
  //     indicator(e.target);
  //   });
  // });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth < 500) {
      setToggle(!toggle);
    }
  };
  // const innerWidth = document.window.innerWidth();
  // console.log(innerWidth);

  const [toggle, setToggle] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // Function to update innerWidth when the window is resized
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    // Add an event listener to the window to listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);
  useEffect(() => {
    if (innerWidth < 500) {
      setToggle(false);
    }
  }, []);
  console.log(innerWidth);
  // console.log(toggle);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          zIndex: 1000000,
        }}
        className="mb-16 sm:mb-0"
      >
        {toggle && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              zIndex: 50,
              width: "fit-content",
              fontSize: "1.5rem",
              margin: "20px",
              padding: "10px",
              border: "2px solid",
              borderColor: "#464d5b",
              borderRadius: "15px",
              color: "white",
              alignSelf: "center",
              boxShadow: "0px 8px 15px #3a3f64",

              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            className="sidebar hidden sm:block transition-all ease-in-out duration-500 "
            // sx={{
            //   width: "100%",
            // }}
          >
            {/* <div sx={{}}> */}
            {items.map((item, index) => {
              return (
                <div key={index} className="flex relative">
                  {activeIndex === index && (
                    <div className="marker absolute"></div>
                  )}
                  <Link
                    to={item?.url}
                    onClick={() => handleItemClick(index)}
                    className="nav-link w-full flex justify-between items-center p-1 alignItems: 'center',"
                  >
                    {/* <div className="flex justify-between items-center"> */}
                    <div className="mx-1">{item.icon}</div>
                    <div className="">{item.title}</div>
                    {/* </div> */}
                  </Link>
                </div>
              );
            })}
            {/* </div> */}
          </Stack>
        )}
        <HamBurger handleToggle={handleToggle} />
      </Container>
    </>
  );
}

export default Sidebar;
