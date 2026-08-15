import { useEffect, useRef } from "react";
import {
  UserProfileDetails,
  UserSolvedProblemsStats,
  UserRecentSubmission,
  UserHeatMap,
  UserContestInfo,
} from "react-leetcode";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";

function LeetCodeHeatMap({ username }) {
  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <div className="w-full flex justify-center items-center">
            <UserProfileDetails
              userName={username}
              hideSkills={true}
              hideWebsite={true}
              hideSchool={true}
              hideCompany={true}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <UserSolvedProblemsStats userName={username} />
          </div>
        </Stack>
        <div className="w-full flex justify-center items-center">
          <UserHeatMap
            userName={username}
            theme={{
              // primaryColor: "rgba(34, 211, 238, 1)", // cyan - solved
              // secondaryColor: "rgba(255, 255, 255, 1)", // white - empty/default
              // bgColor: "rgba(24, 24, 27, 1)", // dark background
              primaryColor: "rgba(34, 211, 238, 1)",
              secondaryColor: "rgba(161, 161, 170, 1)",
            }}
          />
        </div>
      </Stack>
    </>
  );
}

LeetCodeHeatMap.propTypes = {
  username: PropTypes.string,
};

export default LeetCodeHeatMap;
