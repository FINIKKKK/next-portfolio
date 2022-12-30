import React from "react";

import ss from "./Footer.module.scss";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  const gooeyAnimationsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function generateBalls() {
      if (!gooeyAnimationsRef.current) return;

      for (let i = 0; i < Math.floor(window.innerWidth / 30); i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball");

        const colors = ["#d8d8d8"];
        ball.style.bottom = "-100%";
        ball.style.left = `${Math.random() * window.innerWidth - 100}px`;
        ball.style.animationDelay = `${Math.random() * 5}s`;
        ball.style.transform = `translateY(${Math.random() * 10}px)`;
        ball.style.backgroundColor = colors[i % 2];

        gooeyAnimationsRef.current.appendChild(ball);
      }
    }
    generateBalls();
    function handleResize() {
      if (!gooeyAnimationsRef.current) return;

      const balls = gooeyAnimationsRef.current.querySelectorAll(".ball");
      balls.forEach((ball) => ball.remove());
      generateBalls();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer" data-scroll-section>
      <div ref={gooeyAnimationsRef} className="gooey-animations"></div>
      <h1>
        Layout creator <span>Dmitriy Bozhko</span>
      </h1>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" hidden>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <svg viewBox="0 0 1440 328" width="100vw" className="footer-bg">
        <defs>
          <clipPath
            id="wave"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.00069444444, 0.00304878048)"
          >
            <path d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z" />
          </clipPath>
        </defs>
      </svg>
    </footer>
  );
};
