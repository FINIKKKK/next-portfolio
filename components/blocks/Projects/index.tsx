import Image from "next/image";
import React from "react";

import projectImg1 from "../../../public/assets/img/design__img1.jpg";

import ss from "./Projects.module.scss";

type ProjectsProps = {};

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="projects__ss" data-scroll-section>
      <div className="container">
        <div className="last-works__title">
          <h3>Последнии работы</h3>
          <p>И это еще не всё</p>
        </div>
        <div className="projects__inner">
          <div className="project">
            <div className="img">
              <Image src={projectImg1} alt="" />
            </div>
            <div className="content">
              <h2>
                <span>01. </span>Crypto
              </h2>
              <p>
                В данном проекте реализованы: кастомный курсор, множество
                разного рода анимаций, анимации при скролле, параллакс эффекты
                при скролле, каст
              </p>
              <a href="#" className="project__btn">
                Смотреть проект
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img">
              <Image src={projectImg1} alt="" />
            </div>
            <div className="content">
              <h2>
                <span>01. </span>Crypto
              </h2>
              <p>
                В данном проекте реализованы: кастомный курсор, множество
                разного рода анимаций, анимации при скролле, параллакс эффекты
                при скролле, каст
              </p>
              <a href="#" className="project__btn">
                Смотреть проект
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img">
              <Image src={projectImg1} alt="" />
            </div>
            <div className="content">
              <h2>
                <span>01. </span>Crypto
              </h2>
              <p>
                В данном проекте реализованы: кастомный курсор, множество
                разного рода анимаций, анимации при скролле, параллакс эффекты
                при скролле, каст
              </p>
              <a href="#" className="project__btn">
                Смотреть проект
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="inner__btn">
          Посмотреть Все работы
        </a>
      </div>
    </section>
  );
};
