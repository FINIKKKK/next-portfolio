import { NextPage } from "next";
import React from "react";
import { AuthPopup } from "../../components/Root/AuthPopup";
import { Sidebar } from "../../components/Root/Sidebar";
import { Main } from "../../components/Root/Slides/Main";
import { Projects } from "../../components/Root/Slides/Projects";
import { Skills } from "../../components/Root/Slides/Skills";

interface RootPageProps {}

const RootPage: NextPage<RootPageProps> = ({}) => {
  const [activeComponent, setActiveComponent] = React.useState(0);

  if (false) {
    return <AuthPopup />;
  }

  return (
    <section className="root">
      <div className="container">
        <div className="inner">
          <Sidebar active={activeComponent} setActive={setActiveComponent} />

          <main className="main">
            {activeComponent === 0 && <Main />}
            {activeComponent === 1 && <Projects />}
            {activeComponent === 2 && <Skills />}
          </main>
        </div>
      </div>
    </section>
  );
};

export default RootPage;
