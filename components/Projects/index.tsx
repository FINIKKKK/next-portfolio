import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../Project";

import ss from "./Projects.module.scss";

type ProjectsProps = {};

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className={ss.projects} data-scroll-section>
      <div className="container">
        <div
          className={ss.title}
          data-scroll
          data-scroll-offset="200"
        >
          <h3>Последнии работы</h3>
        </div>

        <div className={ss.inner}>
          {Array(3)
            .fill(0)
            .map((index: number) => (
              <Project key={index} />
            ))}
        </div>

        <Link
          href="/works"
          className={ss.btn}
          data-scroll
          data-scroll-offset="200"
        >
          <span>П</span>
          <span>о</span>
          <span>с</span>
          <span>м</span>
          <span>о</span>
          <span>т</span>
          <span>р</span>
          <span>е</span>
          <span>т</span>
          <span>ь</span>
          <span className={ss.empty}> </span>
          <span>В</span>
          <span>С</span>
          <span>е</span>
          <span className={ss.empty}> </span>
          <span>Р</span>
          <span>а</span>
          <span>б</span>
          <span>о</span>
          <span>т</span>
          <span>ы</span>
        </Link>
      </div>
    </section>
  );
};
