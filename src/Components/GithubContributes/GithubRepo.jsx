import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tooltip from "@mui/material/Tooltip";
const explicitTheme = {
  light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
};

{
  /* <ActivityCalendar data={data} theme={explicitTheme} />; */
}

const minimalTheme = {
  light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
  // for `dark` the default theme will be used
};

{
  /* <ActivityCalendar data={data} theme={minimalTheme} />; */
}
function GithubRepo() {
  return (
    <>
      <div className="text-white ">
        <GitHubCalendar
          blockSize={22}
          blockMargin={8}
          blockRadius={6}
          style={{
            width: "100%",
          }}
          // transformData={(e) => {
          //   return isMobile ? e.slice(196) : e;
          // }}
          username={"akanshbende"}
          // eventHandlers={{
          //   onMouseEnter: (event) => (data) => {
          //     !isMobile ? setSelect(data) : null;
          //   },
          //   onMouseLeave: (event) => (data) => {
          //     !isMobile ? setSelect(null) : null;
          //   },
          // }}
          theme={minimalTheme}
          //   theme={{
          //     level0: "hsl(223, 14%, 15%)",
          //     level1: "hsl(223, 14%, 35%)",
          //     level2: "hsl(223, 14%, 50%)",
          //     level3: "hsl(223, 14%, 65%)",
          //     level4: "hsl(223, 14%, 85%)",
          //   }}
          // labels={
          //   isMobile ? { totalCount: "{{count}} contributions" } : undefined
          // }
          renderBlock={(block, activity) => (
            <Tooltip
              sx={{ fontFamily: "poppins", fontSize: "1rem" }}
              title={`${activity.count} contributions on ${activity.date}`}
            >
              {block}
            </Tooltip>
          )}
        />
      </div>
    </>
  );
}

export default GithubRepo;
