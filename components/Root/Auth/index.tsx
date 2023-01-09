import { Input } from "components";
import React from "react";

import ss from "./Auth.module.scss";

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  const [valueLogin, setValueLogin] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");

  return (
    <div className={ss.auth}>
      <div className={ss.popup}>
        <Input value={valueLogin} setValue={setValueLogin} label="Логин" />

        <Input
          value={valuePassword}
          setValue={setValuePassword}
          label="Пароль"
          isPassword={true}
        />

        <button className="btn">Войти</button>
      </div>
    </div>
  );
};
