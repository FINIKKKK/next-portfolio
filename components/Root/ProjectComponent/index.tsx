import React from "react";
import Image from "next/image";
import Link from "next/link";

import img from "../../../public/assets/img/project1.jpg";

import ss from "./ProjectComponent.module.scss";

interface ProjectComponentProps {}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({}) => {
  return (
    <div className={ss.project}>
      <div className={ss.img}>
        <Image src={img} alt="" />
        <div className={ss.btns}>
          <Link className={ss.icon} href="/root/create">
            <svg className={ss.edit} width="20" height="20">
              <use xlinkHref="./assets/img/icons/icons.svg#edit" />
            </svg>
          </Link>
          <div className={ss.icon}>
            <svg className={ss.remove} width="20" height="20">
              <use xlinkHref="./assets/img/icons/icons.svg#remove" />
            </svg>
          </div>
        </div>
      </div>
      <h5 className={ss.title}>Crypto</h5>
    </div>
  );
};
