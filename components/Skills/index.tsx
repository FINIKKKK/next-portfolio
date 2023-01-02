import React from "react";

import ss from "./Skills.module.scss";

type SkillsProps = {};

export const Skills: React.FC<SkillsProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="skills"
      data-scroll
      data-scroll-section
      data-scroll-offset="250"
    >
      <div className="container">
        <div className="skills__inner">
          <div className="skills__info">
            <ol className="skills__list">
              <li className="skills__list-item">
                <h6>HTML/CSS/JS</h6>
                <p>Основные элементы верстки</p>
              </li>
              <li className="skills__list-item">
                <h6>Scss/Sass, Pug, Less</h6>
                <p>Препроцессоры</p>
              </li>
              <li className="skills__list-item">
                <h6>Кроссбраузерность/Адаптивность</h6>
                <p>
                  Поддержка верски на разных браузерах и на разных устройствах
                </p>
              </li>
              <li className="skills__list-item">
                <h6>three.js</h6>
                <p>3D библиотека</p>
              </li>
              <li className="skills__list-item">
                <h6>GSAP, anime.js, tweenMax</h6>
                <p>Библиотека для создания анимаций</p>
              </li>
              <li className="skills__list-item">
                <h6>Typescript</h6>
                <p>Аналог JS</p>
              </li>
              <li className="skills__list-item">
                <h6>Figma</h6>
                <p>Создание дизайна, Доработка дизайна</p>
              </li>
            </ol>
            <div
              className="skills__year"
              data-scroll
              data-scroll-speed="2"
            >
              <hr />
              <p>
                <span className="thisYear">{currentYear}</span>
              </p>
            </div>
            <div className="skills__dashed"></div>
          </div>
          <h3 className="skills__title" data-scroll data-scroll-speed="-2">
            <span>Н</span>
            <span>а</span>
            <span>в</span>
            <span>ы</span>
            <span>к</span>
            <span>и</span>
          </h3>
        </div>
      </div>
    </section>
  );
};
