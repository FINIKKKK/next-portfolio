import React from "react";

import ss from "./Waves.module.scss";

type WavesProps = {};

export const Waves: React.FC<WavesProps> = () => {
  const refWaves = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    // @ts-ignore
    import(`sine-waves`).then((SineWaves) => {
      var waves = new SineWaves.default({
        el: refWaves.current,

        speed: 5,

        ease: "SineInOut",

        wavesWidth: "80%",

        waves: [
          {
            /* small-set wave 1 */ timeModifier: 4,
            lineWidth: 1,
            amplitude: -25,
            wavelength: 25,
          },
          {
            /* small-set wave 2 */ timeModifier: 3,
            lineWidth: 1,
            amplitude: -20,
            wavelength: 25,
          },
          {
            /* small-set wave 3 */ timeModifier: 3,
            lineWidth: 1,
            amplitude: 40,
            wavelength: 40,
          },
          {
            /* small-set wave 4 tall */ timeModifier: 2,
            lineWidth: 1.5,
            amplitude: -50,
            wavelength: 60,
          },
          {
            /* medium-set wave */ timeModifier: 0.8,
            lineWidth: 1.8,
            amplitude: -210,
            wavelength: 140,
          },
          {
            /* large-set wave */ timeModifier: 0.4,
            lineWidth: 2,
            amplitude: -260,
            wavelength: 200,
          },
        ],

        // Called on window resize
        resizeEvent: function () {
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          // gradient.addColorStop(0, "rgba(107, 59, 231, 1)");
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.75");
          gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.75");
          gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.75)");
          gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.75");
          gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.75)");
          gradient.addColorStop(1, "rgba(255, 255, 255, .75)");

          var index = -1;
          var length = this.waves.length;
          while (++index < length) {
            this.waves[index].strokeStyle = gradient;
          }

          // Clean Up
          // @ts-ignore
          index = void 0;
          length = void 0;
          gradient = void 0;
        },
      });
    });
  }, [refWaves.current]);

  return (
    <section className={ss.waves} data-scroll-section>
      <div className={ss.inner}>
        <canvas ref={refWaves}></canvas>
      </div>
    </section>
  );
};
