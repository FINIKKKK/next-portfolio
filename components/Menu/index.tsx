import Link from "next/link";
import React from "react";

import ss from "./Menu.module.scss";

type MenuProps = {
  isOpen: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, setOpenMenu }) => {
  const refTitle = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      //Script for animating the letters

      // @ts-ignore
      function findRandom(n) {
        // @ts-ignore
        let num = (1 + parseInt(Math.random() * 100)) % n;
        return num;
      }
      // @ts-ignore
      function razz() {
        var letter = refTitle.current?.getElementsByTagName("span");

        let C = "";
        let z = findRandom(5);
        if (z == 0) {
          C = "l-shadow";
        } else if (z == 1) {
          C = "l-slide";
        } else if (z == 2) {
          C = "l-spin";
        } else if (z == 3) {
          C = "l-bump";
        } else if (z == 4) {
          C = "l-spin-back";
        }

        let x = findRandom(10);
        // @ts-ignore
        letter[x].classList.add(C);

        setTimeout(function () {
          // @ts-ignore
          letter[x].classList.remove(C);
        }, 1200);

        setTimeout(function () {
          razz();
        }, 3000);
      }
      isOpen && razz();
    }
  }, [isOpen]);

  return (
    <div className={`${ss.menu} ${isOpen ? ss.open : ss.close}`}>
      <div className={ss.reveals}>
        <div className={ss.reveal}></div>
        <div className={ss.reveal}></div>
      </div>

      <svg
        onClick={() => setOpenMenu(false)}
        className={ss.btn}
        width="20"
        height="20"
      >
        <use xlinkHref="./assets/img/icons/icons.svg#close" />
      </svg>

      <div className={ss.inner}>
        <div className={ss.left}>
          <svg width="20" height="20">
            <use xlinkHref="./assets/img/icons/icons.svg#menu__pattern" />
          </svg>

          <div ref={refTitle} className={ss.title}>
            <span>w</span>
            <span>h</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span></span>
            <span>s</span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
          </div>
        </div>
        <div className={ss.right}>
          <nav className={ss.nav}>
            <ul className={ss.nav__list}>
              <li className={ss.active}>
                <Link href="/">
                  <span>01</span>
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/works">
                  <span>02</span>
                  Мои работы
                </Link>
              </li>
            </ul>
            <ul className={ss.soclist}>
              <li>
                <a href="">
                  <span>Telegram</span>
                  <svg
                    className={ss.stroke}
                    width="100%"
                    height="9"
                    viewBox="0 0 101 9"
                  >
                    <path
                      d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                      pathLength="1"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Github</span>
                  <svg
                    className={ss.stroke}
                    width="100%"
                    height="9"
                    viewBox="0 0 101 9"
                  >
                    <path
                      d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                      pathLength="1"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Linkedin</span>
                  <svg
                    className={ss.stroke}
                    width="100%"
                    height="9"
                    viewBox="0 0 101 9"
                  >
                    <path
                      d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                      pathLength="1"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <div className={`${ss.pattern} ${ss.pattern1}`}>
            the impartant stuff
          </div>
          <div className={`${ss.pattern} ${ss.pattern2}`}>
            the impartant stuff
          </div>
        </div>
      </div>
    </div>
  );
};
