import React from "react";

import ss from "./RevealText.module.scss";

type RevealTextProps = {};

export const RevealText: React.FC<RevealTextProps> = () => {
  return (
    <section className={ss.reveal} data-scroll-section>
      <div className={ss.inner}>
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-17"
          data-scroll-delay="0.05"
        >
          <span>Soul Dance Soul Dance Soul Dance Soul Dance </span>
        </h2>
        <div className={ss.list}>
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
          className={ss.title}
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
