import React from "react";

import { ProjectComponent } from "components";

import ss from "./ProjectsSlide.module.scss";

interface ProjectsSlideProps {}

export const ProjectsSlide: React.FC<ProjectsSlideProps> = ({}) => {
  return (
    <div className={ss.projects}>
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
    </div>
  );
};
