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
        <div className="skills-wrapper flex flex-wrap p-2 m-2 align-middle justify-center sm:align-middle sm:justify-center gap-3 sm:gap-5">
          {SkillData &&
            SkillData?.map((skill, index) => {
              return (
                <SkillCard
                  key={index}
                  icon={skill?.icon}
                  name={skill?.name}
                  type={skill?.type}
                  Proficiency={skill?.Proficiency}
                />
              );
            })}
        </div>
      </Container>
      <Heading title={"Tools"} />
      <Container sx={{ padding: 0 }}>
        <div className="skills-wrapper flex flex-wrap p-2 m-2 sm:align-middle sm:justify-center gap-3 sm:gap-5">
          {ToolsData &&
            ToolsData?.map((skill, index) => {
              return (
                <SkillCard
                  key={index}
                  icon={skill?.icon}
                  name={skill?.name}
                  type={skill?.type}
                  Proficiency={skill?.Proficiency}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Skills;
