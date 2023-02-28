import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { Preloader } from "../components";

import "../styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    javascript: (function () {
      var script = document.createElement("script");
      script.onload = function () {
        // @ts-ignore
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
          stats.update();
          requestAnimationFrame(loop);
        });
      };
      script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
      document.head.appendChild(script);
    })();
    // setTimeout(() => {
    setLoading(false);
    // }, 2000);
  }, []);

  if (loading) {
    return <Preloader progress={progress} />;
  }

  return (
    <>
      <div className="bg"></div>
      <Component {...pageProps} />
    </>
  );
}
