import React from "react";
import s from "./MainInput.module.scss";
import { classNames } from "../../../utils/styling";

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
  ariaLabel,
  inputClassName,
  wrapperClassName,
  labelClassName,
}) => {
  
  return (
    <div className={classNames(s.inputWrapper, wrapperClassName)}>
      {label && <label className={labelClassName}  htmlFor={label}>{label}</label>}
      <input
        className={classNames(inputClassName, s.input)}
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
