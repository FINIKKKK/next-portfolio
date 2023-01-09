import React from "react";

import ss from "./Input.module.scss";

interface InputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  isTextarea?: boolean;
  isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  isTextarea,
  isPassword,
}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={`${ss.input} ${value || isFocus ? ss.focus : ""}`}>
      <label>{label}</label>
      {isTextarea && (
        <textarea
          onChange={(e: any) => setValue(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
        ></textarea>
      )}
      {!isTextarea && (
        <input
          onChange={(e: any) => setValue(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          type={isPassword && !showPassword ? "password" : "text"}
        />
      )}
      {value && (
        <svg
          onClick={() => setValue("")}
          className="close"
          width="20"
          height="20"
        >
          <use xlinkHref="../assets/img/icons/icons.svg#close" />
        </svg>
      )}
      {value && isPassword && (
        <svg
          onClick={() => setShowPassword(!showPassword)}
          className={ss.password}
          width="20"
          height="20"
        >
          <use
            xlinkHref={`./assets/img/icons/icons.svg#${
              !showPassword ? "eye" : "noeye"
            }`}
          />
        </svg>
      )}
    </div>
  );
};
