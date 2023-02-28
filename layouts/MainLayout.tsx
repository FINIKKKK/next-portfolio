import React from "react";
import { Footer, Header, Menu } from "../components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

type MainLayoutProps = {
  children: any;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const scrollElementRef = React.useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  // React.useEffect(() => {
  //   let scroll;
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //     });
  //     setTimeout(() => {
  //       scroll.update();
  //     }, 500);
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, [scrollElementRef.current]);

  return (
    <>
      {/* <Cursor /> */}

      <Menu isOpen={openMenu} setOpenMenu={setOpenMenu} />

      <Header setOpenMenu={setOpenMenu} />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={scrollElementRef}
      >
        <main data-scroll-container ref={scrollElementRef}>
          {children}
        </main>

        {/* <Footer /> */}
      </LocomotiveScrollProvider>
    </>
  );
};
