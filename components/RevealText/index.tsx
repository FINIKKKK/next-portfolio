import React from "react";

import ss from "./RevealText.module.scss";

type RevealTextProps = {};

export const RevealText: React.FC<RevealTextProps> = () => {
  React.useEffect(() => {
    // const marquee = document.querySelector(".marquee");
    // const duplicate = marquee.cloneNode(true);
    // marquee.parentNode.appendChild(duplicate);
    // // Начальное положение текста
    // let currentPosition = 0;
    // // Скорость прокрутки (в пикселях в секунду)
    // const speed = 5;
    // setInterval(() => {
    //   // Обновляем положение текста
    //   currentPosition -= speed;
    //   // Если текст уже не виден, сбрасываем его в начальное положение
    //   if (currentPosition < -marquee.offsetWidth) {
    //     currentPosition = 0;
    //   }
    //   // Применяем трансформацию к тексту
    //   marquee.style.transform = `translateX(${currentPosition}px)`;
    //   duplicate.style.transform = `translateX(${
    //     currentPosition + marquee.offsetWidth
    //   }px)`;
    // }, 1000 / 60);
  }, []);

  return (
    <section className="reveal-text" data-scroll-section>
      <div className="inner">
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-17"
          data-scroll-delay="0.05"
        >
          <span>Soul Dance Soul Dance Soul Dance Soul Dance </span>
        </h2>
        <div className="list marquee">
          <ul>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
          </ul>
          <ul>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
            <li>Lorem isput soul</li>
          </ul>
        </div>
        <h2
          className="titel-2"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="17"
          data-scroll-delay="0.05"
        >
          <span>Soul Dance Soul Dance Soul Dance Soul Dance </span>
        </h2>
      </div>
    </section>
  );
};
