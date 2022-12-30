import React from "react";

import ss from "./Header.module.scss";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-menu">
          <a href="index.html" className="text__logo">
            <span>d</span>
            <span>m</span>
            <span>i</span>
            <span>t</span>
            <span>r</span>
            <span>i</span>
            <span>y</span>
            <span> </span>
            <span>b</span>
            <span>o</span>
            <span>z</span>
            <span>h</span>
            <span>k</span>
            <span>o</span>
          </a>

          <div className="menu-diamond" id="menu-diamond">
            <p>Menu</p>
            <div className="diamond diamond1"></div>
            <div className="diamond diamond2">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
