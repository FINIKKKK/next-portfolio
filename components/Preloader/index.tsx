import React from "react";

import ss from "./Preloader.module.scss";

type PreloaderProps = {
  progress: number;
};

export const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  return (
    <div className={ss.preloader}>
      <div className={ss.progress}>
        <span>{progress}</span>%
      </div>
      <span className={ss.circle}></span>
      <span className={ss.circle}></span>
    </div>
  );
};
