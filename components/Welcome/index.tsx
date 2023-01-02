import React from "react";

import ss from "./Welcome.module.scss";

type WelcomeProps = {};

export const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <section className="welcome" data-scroll-section>
      <div className="container">
        <div className="welcome__inner">
          <h1 className="welcome__title">
            <span>Привет</span>
            <span>Я Дима</span>
            <span>фронтенд</span>
          </h1>
          <div className="welcome__content">
            <div className="welcome__title-another">
              <span>Разработчик</span>
            </div>
            <p className="welcome__content-note">
              Доступен для внештатной работы
            </p>
            <p className="welcome__content-text">
              Я помогаю компаниям разрабатывать цифровые продукты и превращать
              идеи в функциональный и восхитительный опыт.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
