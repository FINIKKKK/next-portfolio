import React from "react";
import Image from "next/image";

import projectImg1 from "../../public/assets/img/57.jpg";

import ss from "./Project.module.scss";

type ProjectProps = {};

export const Project: React.FC<ProjectProps> = () => {
  return (
    <div className="project" data-scroll data-scroll-offset="250">
      <a
        href="#"
        className="img o-image_wrapper reveal-img"
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <div data-scroll data-scroll-speed="-2">
          <Image src={projectImg1} alt="" />
        </div>
      </a>
      <div className="content">
        <h2>
          <span className="number">
            <b>0</b>
            <b>1</b>
            <b>.</b>
          </span>
          <span className="title">Crypto</span>
        </h2>
        <p>
          В данном проекте реализованы: кастомный курсор, множество разного рода
          анимаций, анимации при скролле, параллакс эффекты при скролле, каст
        </p>
      </div>
    </div>
  );
};
