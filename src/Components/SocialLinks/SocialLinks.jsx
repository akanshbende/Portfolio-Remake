import { Container, Stack } from "@mui/material";
import React from "react";

import SocialIcons from "../../Data/SocialIconsData.jsx";
import { Link } from "react-router-dom";
function SocialLinks() {
  return (
    <>
      <div className=" social-links fixed m-5 bottom-10 flex text-lg">
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            zIndex: 50,
            width: "fit-content",
            position: "sticky",
            padding: "15px",
            border: "2px solid",
            borderColor: "#464d5b",
            borderRadius: "15px",
            color: "white",
            alignSelf: "center",
            boxShadow: "0px 5px 10px #3a3f64",
            backdropFilter: "blur 5px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {SocialIcons &&
            SocialIcons.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex align-middle justify-between gap-1 cursor-pointer">
                    <span className="flex self-center text-3xl">
                      <a target="_blank" href={item?.url}>
                        {item?.icon}
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
        </Stack>
      </div>
    </>
  );
}

export default SocialLinks;
