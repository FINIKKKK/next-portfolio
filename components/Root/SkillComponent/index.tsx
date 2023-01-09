import React from "react";

import ss from "./SkillComponent.module.scss";

interface SkillComponentProps {
  title: string;
  text: string;
  setIsUpdate: (isUpdate: boolean) => void;
  setValueSkill: (title: string) => void;
  setValueDescSkill: (text: string) => void;
}

export const SkillComponent: React.FC<SkillComponentProps> = ({
  title,
  text,
  setIsUpdate,
  setValueSkill,
  setValueDescSkill,
}) => {
  const transferData = () => {
    setIsUpdate(true);
    setValueSkill(title);
    setValueDescSkill(text);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <li className={ss.item}>
      <div className={ss.content}>
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
      <div className={ss.btns}>
        <svg onClick={transferData} className="edit" width="20" height="20">
          <use xlinkHref="./assets/img/icons/icons.svg#edit" />
        </svg>
        <svg className="remove" width="20" height="20">
          <use xlinkHref="./assets/img/icons/icons.svg#remove" />
        </svg>
      </div>
    </li>
  );
};
