import Image from "next/image";
import React from "react";
import imgAbout1 from "../../../public/assets/img/top-about__img1.jpg";
import imgAbout2 from "../../../public/assets/img/top-about__img2.jpg";

import ss from "./About.module.scss";

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
  return (
    <section className="top-about" data-scroll-section>
      <div className="container">
        <div className="top-about__inner">
          <div className="top-about__info">
            <div className="top-about__info">
              <h1 className="top-about__info-title">
                <span>Обо</span>
                <span>мне</span>
              </h1>
              <div className="top-about__text">
                <p>
                  Целеустремленный, ответственный, исполнительный. Имею
                  аналитический склад ума и логическое мышление - в процессе
                  продумываю каждую деталь и подготавливаю удобный, в нужных
                  местах прокомментированный, код.{" "}
                </p>
                <p>
                  Иногда сам создаю дизайн сайта по просьбе клиента, исходя из
                  его потребностей
                </p>
              </div>
            </div>
          </div>

          <div className="top-about__images">
            <div className="top-about__img1">
              <Image src={imgAbout1} alt="about__img1" />
            </div>
            {/* <svg className="top-about__images-pattern" width="20" height="20">
                            <use xlinkHref="./img/icons/icons.svg#top-about__images-pattern" />
                          </svg> */}
            <div className="top-about__images-pattern"></div>
            <div className="top-about__img2">
              <Image src={imgAbout2} alt="about__img2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
