import React from "react";

import { NextPage } from "next";
import {
  Auth,
  MainSlide,
  ProjectsSlide,
  Sidebar,
  SkillsSlide,
} from "components";

import ss from "../../styles/modules/root.module.scss";

interface RootPageProps {}

const RootPage: NextPage<RootPageProps> = ({}) => {
  const [activeComponent, setActiveComponent] = React.useState(0);

  if (false) {
    return <Auth />;
  }

  return (
    <section className={ss.root}>
      <div className="container">
        <div className={ss.inner}>
          <Sidebar active={activeComponent} setActive={setActiveComponent} />

          <main className={ss.main}>
            {activeComponent === 0 && <MainSlide />}
            {activeComponent === 1 && <ProjectsSlide />}
            {activeComponent === 2 && <SkillsSlide />}
          </main>
        </div>
      </div>
    </section>
  );
};

export default RootPage;
