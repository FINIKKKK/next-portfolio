import React from "react";
import { Footer, Header } from "../components";

type MainLayoutProps = {
  children: any;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const scrollElementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollElementRef.current]);

  return (
    <>
      <Header />

      <main data-scroll-container>{children}</main>

      <Footer />
    </>
  );
};
