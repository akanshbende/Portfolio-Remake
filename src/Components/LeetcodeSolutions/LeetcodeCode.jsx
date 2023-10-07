import React, { useState, useEffect } from "react";
// leetcode api-1 :https://leetcode-api-faisalshohag.vercel.app/akansh29
// leetcode api-2 :https://leetcode-stats-api.herokuapp.com/akansh29
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

function LeetcodeCode() {
  const apiUrl = "https://leetcode-api-faisalshohag.vercel.app/akansh29";

  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response) {
        const jsonData = await response.json();

        setData(jsonData);
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("data", data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <div className="text-white">
        <GitHubCalendar
          blockSize={22}
          blockMargin={8}
          blockRadius={6}
          // transformData={(e) => {
          //   return isMobile ? e.slice(196) : e;
          // }}
          username={"akansh29"}
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
              title={`${activity.count} solutions on ${activity.date}`}
            >
              {block}
            </Tooltip>
          )}
        />
      </div> */}
    </>
  );
}

export default LeetcodeCode;
