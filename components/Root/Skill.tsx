import React from "react";

interface SkillProps {
  title: string;
  text: string;
  setIsUpdate: (isUpdate: boolean) => void;
  setValueSkill: (title: string) => void;
  setValueDescSkill: (text: string) => void;
}

export const Skill: React.FC<SkillProps> = ({
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
    <li className="skills__item">
      <div className="content">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
      <div className="btns">
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
