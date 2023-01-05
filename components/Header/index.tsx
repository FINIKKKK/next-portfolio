import React from "react";

import ss from "./Header.module.scss";

type HeaderProps = {
  setOpenMenu: (openMenu: boolean) => void;
};

export const Header: React.FC<HeaderProps> = ({ setOpenMenu }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <header
      className={`header ${isLoading ? "loaded" : ""}`}
      data-scroll-section
      data-scroll-sticky
    >
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

          <div onClick={() => setOpenMenu(true)} className="menu-diamond" id="menu-diamond">
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
