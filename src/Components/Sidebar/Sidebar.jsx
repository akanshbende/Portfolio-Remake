import { Container, Stack, Box } from "@mui/material";
import React, { useState } from "react";
import items from "../../Data/SidebarItemData";
import { Link } from "react-router-dom";
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
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          zIndex: 100,
        }}
      >
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
          className="sidebar"
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
      </Container>
    </>
  );
}

export default Sidebar;
