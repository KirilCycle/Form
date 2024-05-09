import React from "react";
import s from "./MainInput.module.scss";

const MainInput = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className={s.inputWrapper}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default MainInput;
