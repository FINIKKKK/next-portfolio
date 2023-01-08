import React from "react";
import { Input } from "./Input";

interface AuthPopupProps {}

export const AuthPopup: React.FC<AuthPopupProps> = ({}) => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  return (
    <div className="auth__wrapper">
      <div className="auth">
        <Input value={valueLogin} setValue={setValueLogin} label="Логин" />

        <Input value={valuePassword} setValue={setValuePassword} label="Пароль" isPassword={true} />

        <button className="btn">Войти</button>
      </div>
    </div>
  );
};
