import Link from "next/link";
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
      className={`${ss.header} ${isLoading ? ss.loaded : ""}`}
      data-scroll-section
      data-scroll-sticky
    >
      <div className="container">
        <nav className={ss.nav}>
          <Link href="/" className={ss.logo}>
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
          </Link>

          <div onClick={() => setOpenMenu(true)} className={ss.menu__btn}>
            <p>Menu</p>
            <div className={`${ss.diamond} ${ss.diamond1}`}></div>
            <div className={`${ss.diamond} ${ss.diamond2}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};
