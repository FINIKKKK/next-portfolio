import React from "react";

import ss from "./Preloader.module.scss";

type PreloaderProps = {
  progress: number;
};

export const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  return (
    <div className="preloader">
      <div className="progress">
        <span id="progress-value">{progress}</span>%
      </div>
      <span className="circle"></span>
      <span className="circle"></span>
    </div>
  );
};
