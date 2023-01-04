import Image from "next/image";
import React from "react";
import { Project } from "../Project";

import ss from "./Projects.module.scss";

type ProjectsProps = {};

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="projects__ss" data-scroll-section>
      <div className="container">
        <div className="last-works__title" data-scroll data-scroll-offset="200">
          <h3>Последнии работы</h3>
          <p>И это еще не всё</p>
        </div>

        <div className="projects__inner">
          {Array(3)
            .fill(0)
            .map((index: number) => (
              <Project key={index} />
            ))}
        </div>

        <a
          href="#"
          className="inner__btn"
          data-scroll
          data-scroll-offset="200"
          data-name="Посмотреть все пректы"
        >
          {/* <span>Посмотреть все пректы</span> */}
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
          <span className="empty-letter"> </span>
          <span>В</span>
          <span>С</span>
          <span>е</span>
          <span className="empty-letter"> </span>
          <span>Р</span>
          <span>а</span>
          <span>б</span>
          <span>о</span>
          <span>т</span>
          <span>ы</span>
        </a>
      </div>
    </section>
  );
};
