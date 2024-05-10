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
  maxLength,
  pattern,
  required,
  inputClassName,
  ariaLabel,
}) => {
  return (
    <div className={s.inputWrapper}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        className={inputClassName}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
        type={type}
        aria-label={ariaLabel}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default MainInput;
