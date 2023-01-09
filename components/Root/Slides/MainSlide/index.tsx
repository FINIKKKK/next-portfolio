import React from "react";

import { Input } from "components";

import ss from './MainSlide.module.scss'

interface MainSlideProps {}

export const MainSlide: React.FC<MainSlideProps> = () => {
  const [valueAbout, setValueAbout] = React.useState("");
  const [valueLink1, setValueLink1] = React.useState("");
  const [valueLink2, setValueLink2] = React.useState("");
  const [valueLink3, setValueLink3] = React.useState("");

  return (
    <>
      <div className="block">
        <Input
          value={valueAbout}
          setValue={setValueAbout}
          label="Обо мне"
          isTextarea={true}
        />
      </div>

      <div className="block">
        <h4 className="title">Ссылки</h4>
        <Input value={valueLink1} setValue={setValueLink1} label="Telegram" />
        <Input value={valueLink2} setValue={setValueLink2} label="Github" />
        <Input value={valueLink3} setValue={setValueLink3} label="LinkedIn" />
      </div>

      <button className="btn">Сохранить</button>
    </>
  );
};
