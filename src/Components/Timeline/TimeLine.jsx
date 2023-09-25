import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import "./timeline.css";

import { FaBirthdayCake } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";

export default function CustomizedTimeline() {
  return (
    <Timeline
      position="alternate"
      className="text-white"
      sx={{ fontFamily: "Poppins" }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          //   color="text.secondary"
          className="text-white"
        >
          29 Nov 2001
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ padding: "10px", margin: "5px" }}>
            <FaBirthdayCake style={{ fontSize: "1.5rem", color: "#16171d" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            className="timeline-title roboto"
          >
            <strong className="timeline-title">@Day Zero</strong>
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          //   color="text.secondary"
        >
          ~ to 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" sx={{ padding: "10px", margin: "5px" }}>
            <FaSchool style={{ fontSize: "1.5rem" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            <strong className="timeline-title">
              New Orange City Convent
              <br />
              Amravati, IN
            </strong>
          </Typography>
          <Typography>Schooling till 10th</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          //   color="text.secondary"
          className="text-white"
        >
          2018 to 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color="primary"
            variant="outlined"
            sx={{ padding: "10px", margin: "5px" }}
          >
            <BiSolidSchool style={{ fontSize: "1.5rem" }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#ffffff" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            <strong className="timeline-title">
              Prerna Jr College <br /> <h6>Nagpur, IN</h6>
            </strong>
          </Typography>
          <Typography>12th : Science Stream</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          //   color="text.secondary"
          className="text-white"
        >
          2020 to 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#ffffff" }} />
          <TimelineDot color="primary" sx={{ padding: "10px", margin: "5px" }}>
            <FaGraduationCap style={{ fontSize: "1.5rem" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            <strong className="timeline-title">
              Government College of Engineering <br /> <h6>Aurangabad, IN</h6>
            </strong>
          </Typography>
          <Typography>B.Tech : Computer Science Engineering</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          //   color="text.secondary"
          className="text-white"
        >
          Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#ffffff", height: "10px" }} />
          <TimelineDot
            color="secondary"
            sx={{ padding: "10px", marginTop: "5px" }}
          >
            <GrAchievement style={{ fontSize: "1.5rem", color: "#ffffff" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            <strong className="timeline-title">Next Big Thing</strong>
          </Typography>
          {/* <Typography>B.Tech : Computer Science Engineering</Typography> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
