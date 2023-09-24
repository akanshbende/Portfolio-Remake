import { Container, Stack, Box } from "@mui/material";
import React from "react";
import items from "../../Data/SidebarItemData";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack
          direction={"row"}
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
            backdropFilter: "blur 5px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}

          // sx={{
          //   width: "100%",
          // }}
        >
          {/* <div sx={{}}> */}
          {items.map((item, index) => {
            return (
              <div key={index} className="flex">
                <Link
                  to={item.url}
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
