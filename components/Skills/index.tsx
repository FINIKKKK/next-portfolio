import React from "react";

import ss from "./Skills.module.scss";

type SkillsProps = {};

export const Skills: React.FC<SkillsProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className={ss.skills}
      data-scroll
      data-scroll-section
      data-scroll-offset="250"
    >
      <div className="container">
        <div className={ss.inner}>
          <div className={ss.info}>
            <ol className={ss.list}>
              <li className={ss.item}>
                <h6>HTML/CSS/JS</h6>
                <p>Основные элементы верстки</p>
              </li>
              <li className={ss.item}>
                <h6>Scss/Sass, Pug, Less</h6>
                <p>Препроцессоры</p>
              </li>
              <li className={ss.item}>
                <h6>Кроссбраузерность/Адаптивность</h6>
                <p>
                  Поддержка верски на разных браузерах и на разных устройствах
                </p>
              </li>
              <li className={ss.item}>
                <h6>three.js</h6>
                <p>3D библиотека</p>
              </li>
              <li className={ss.item}>
                <h6>GSAP, anime.js, tweenMax</h6>
                <p>Библиотека для создания анимаций</p>
              </li>
              <li className={ss.item}>
                <h6>Typescript</h6>
                <p>Аналог JS</p>
              </li>
              <li className={ss.item}>
                <h6>Figma</h6>
                <p>Создание дизайна, Доработка дизайна</p>
              </li>
            </ol>
            <div
              className={ss.year}
              data-scroll
              data-scroll-speed="2"
            >
              <hr />
              <p>
                <span>{currentYear}</span>
              </p>
            </div>
            <div className={ss.line}></div>
          </div>
          <h3 className={ss.title} data-scroll data-scroll-speed="-2">
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
