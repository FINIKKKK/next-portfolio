import React from "react";
import { Input } from "./Input";

import ss from "./Root.module.scss";

interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  return (
    <>
      <div className="block">
        <div className="input">
          <label>Обо мне</label>
          <textarea></textarea>
        </div>
      </div>

      <div className="block">
        <h4 className="title">Ссылки</h4>
        <Input label="Telegram" />
        <Input label="Github" />
        <Input label="LinkedIn" />
      </div>
    </>
  );
};
