import React from 'react';
import Image from 'next/image';

import projectImg1 from "../../public/assets/img/design__img1.jpg";


import ss from './Project.module.scss'

type ProjectProps = {
  
};

export const Project: React.FC<ProjectProps> = () => {
    

  return (
    <div className="project">
    <div className="img">
      <Image src={projectImg1} alt="" />
    </div>
    <div className="content">
      <h2>
        <span>01. </span>Crypto
      </h2>
      <p>
        В данном проекте реализованы: кастомный курсор, множество
        разного рода анимаций, анимации при скролле, параллакс эффекты
        при скролле, каст
      </p>
      <a href="#" className="project__btn">
        Смотреть проект
      </a>
    </div>
  </div>
  );
};