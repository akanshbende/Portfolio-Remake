import React from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container } from "@mui/material";
import SkillCard from "../Components/SkillCard/SkillCard";
import { ToolsData, SkillData } from "../Data/SkillsData";
ToolsData;

function Skills() {
  return (
    <>
      <PageTitle title="Skills" />
      <Heading title={"Skills"} />
      <Container sx={{ padding: 0 }}>
        <div className="skills-wrapper flex flex-wrap p-1 m-2 w-full">
          {SkillData &&
            SkillData?.map((skill, index) => {
              return (
                <div className="" key={index}>
                  <SkillCard
                    icon={skill?.icon}
                    name={skill?.name}
                    type={skill?.type}
                    Proficiency={skill?.Proficiency}
                  />
                </div>
              );
            })}
        </div>
      </Container>
      <Heading title={"Tools"} />
      <Container sx={{ padding: 0 }}>
        <div className="skills-wrapper flex flex-wrap p-1 m-2 w-full">
          {ToolsData &&
            ToolsData?.map((skill, index) => {
              return (
                <div className="" key={index}>
                  <SkillCard
                    icon={skill?.icon}
                    name={skill?.name}
                    type={skill?.type}
                    Proficiency={skill?.Proficiency}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Skills;
