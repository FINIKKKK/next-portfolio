import React from "react";

import ss from "./RevealText.module.scss";

type RevealTextProps = {};

export const RevealText: React.FC<RevealTextProps> = () => {
  return (
    <section className="reveal-text" data-scroll-section>
      <h3
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-17"
      >
        <span>Использую страсть и навыки</span>
      </h3>
      <h3
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="17"
      >
        <span>Чтобы чоздавать шедевры</span>
      </h3>
    </section>
  );
};
