import React from "react";

interface InputProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label }) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className={`input ${value || isFocus ? "focus" : ""}`}>
      <label>{label}</label>
      <input
        onChange={(e: any) => setValue(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        type="text"
      />
    </div>
  );
};
