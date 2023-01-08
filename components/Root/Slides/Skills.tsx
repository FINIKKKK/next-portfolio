import React from "react";
import { Input } from "../Input";
import { Skill } from "../Skill";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  const [valueSkill, setValueSkill] = React.useState("");
  const [valueDescSkill, setValueDescSkill] = React.useState("");
  const [isUpdate, setIsUpdate] = React.useState(false);

  const closeUpdate = () => {
    setIsUpdate(false)
    setValueSkill('')
    setValueDescSkill('')
  }

  const onSumbit = async () => {
    if (!isUpdate) {
    } else {
    }
  };

  return (
    <>
      <div className="block about">
        <Input value={valueSkill} setValue={setValueSkill} label="Навык" />
        <Input
          value={valueDescSkill}
          setValue={setValueDescSkill}
          label="Описание навыка"
        />
        <div className="btns">
          <button className="btn">
            {!isUpdate ? "Добавить навык" : "Редактировать"}
          </button>
          {isUpdate && (
            <svg onClick={closeUpdate} className="closeUpdate" width="20" height="20">
              <use xlinkHref="./assets/img/icons/icons.svg#close" />
            </svg>
          )}
        </div>
      </div>

      <div className="block">
        <h4 className="title">Навыки</h4>
        <ol className="skills__list">
          <Skill
            title="HTML/CSS/JS"
            text="Основные элементы верстки"
            setIsUpdate={setIsUpdate}
            setValueSkill={setValueSkill}
            setValueDescSkill={setValueDescSkill}
          />
          <Skill
            title="HTML/CSS/JS-2"
            text="Основные элементы верстки-2"
            setIsUpdate={setIsUpdate}
            setValueSkill={setValueSkill}
            setValueDescSkill={setValueDescSkill}
          />
          <Skill
            title="HTML/CSS/JS-3"
            text="Основные элементы верстки-3"
            setIsUpdate={setIsUpdate}
            setValueSkill={setValueSkill}
            setValueDescSkill={setValueDescSkill}
          />
        </ol>
      </div>
    </>
  );
};
