import React from "react";
import Image from "next/image";
import Link from "next/link";

import img from "../../public/assets/img/project1.jpg";

interface ProjectProps {}

export const Project: React.FC<ProjectProps> = ({}) => {
  return (
    <div className="project">
      <div className="img">
        <Image src={img} alt="" />
        <div className="btns">
          <Link className="icon" href="/root/create">
            <svg className="edit" width="20" height="20">
              <use xlinkHref="./assets/img/icons/icons.svg#edit" />
            </svg>
          </Link>
          <div className="icon">
            <svg className="remove" width="20" height="20">
              <use xlinkHref="./assets/img/icons/icons.svg#remove" />
            </svg>
          </div>
        </div>
      </div>
      <h5 className="title">Crypto</h5>
    </div>
  );
};
