import React from "react";

import { Input, SkillComponent } from "components";

import ss from "./SkillsSlide.module.scss";

interface SkillsSlideProps {}

export const SkillsSlide: React.FC<SkillsSlideProps> = () => {
  const [valueSkill, setValueSkill] = React.useState("");
  const [valueDescSkill, setValueDescSkill] = React.useState("");
  const [isUpdate, setIsUpdate] = React.useState(false);

  const closeUpdate = () => {
    setIsUpdate(false);
    setValueSkill("");
    setValueDescSkill("");
  };

  const onSumbit = async () => {
    if (!isUpdate) {
    } else {
    }
  };

  return (
    <>
      <div className={`block ${ss.about}`}>
        <Input value={valueSkill} setValue={setValueSkill} label="Навык" />
        <Input
          value={valueDescSkill}
          setValue={setValueDescSkill}
          label="Описание навыка"
        />
        <div className={ss.btns}>
          <button className="btn">
            {!isUpdate ? "Добавить навык" : "Редактировать"}
          </button>
          {isUpdate && (
            <svg
              onClick={closeUpdate}
              className={ss.close}
              width="20"
              height="20"
            >
              <use xlinkHref="./assets/img/icons/icons.svg#close" />
            </svg>
          )}
        </div>
      </div>

      <div className="block">
        <h4 className="title">Навыки</h4>
        <ol className={ss.list}>
          <SkillComponent
            title="HTML/CSS/JS"
            text="Основные элементы верстки"
            setIsUpdate={setIsUpdate}
            setValueSkill={setValueSkill}
            setValueDescSkill={setValueDescSkill}
          />
          <SkillComponent
            title="HTML/CSS/JS-2"
            text="Основные элементы верстки-2"
            setIsUpdate={setIsUpdate}
            setValueSkill={setValueSkill}
            setValueDescSkill={setValueDescSkill}
          />
          <SkillComponent
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
