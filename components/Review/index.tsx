import React from "react";

import ss from "./Review.module.scss";

type ReviewProps = {};

export const Review: React.FC<ReviewProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className={ss.review}
      data-scroll
      data-scroll-section
      data-scroll-offset="250"
    >
      <div className="container">
        <div className={ss.inner}>
          <div
            className={ss.pretitle}
            data-scroll
            data-scroll-speed="3"
          >
            <p>Portfolio {currentYear}</p>
          </div>
          <h1 className={ss.title}>
            <span data-scroll data-scroll-delay="0.05" data-scroll-speed="3">
              <b>0</b>
            </span>
            <span data-scroll data-scroll-delay="0.06" data-scroll-speed="3">
              <b>i</b>
            </span>
            <span data-scroll data-scroll-delay="0.07" data-scroll-speed="3">
              <b>l</b>
            </span>
            <span data-scroll data-scroll-delay="0.08" data-scroll-speed="3">
              <b>o</b>
            </span>
            <span data-scroll data-scroll-delay="0.09" data-scroll-speed="3">
              <b>f</b>
            </span>
            <span data-scroll data-scroll-delay="0.1" data-scroll-speed="3">
              <b>t</b>
            </span>
            <span data-scroll data-scroll-delay="0.11" data-scroll-speed="3">
              <b>r</b>
            </span>
            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="3">
              <b>o</b>
            </span>
            <span data-scroll data-scroll-delay="0.12" data-scroll-speed="3">
              <b>p</b>
            </span>
          </h1>
          <div className={ss.content}>
            <svg className={ss.name} viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                Dmitriy Bozhko
              </text>
            </svg>
           
            <div
              className={ss.text}
              data-scroll
              data-scroll-speed="1"
            >
              <p>
                Даннное портфолио представляет лишь малую часть моих
                возможностей, которые растут с каждым днем
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
