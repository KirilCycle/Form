import React from "react";
import s from "./MainButton.module.scss";
import { classNames } from "../../../utils/styling";

const MainButton = ({ children, className, isActive,  ...options }) => {
  return (
    <button {...options} className={classNames(s.mainBtn, isActive ? s.active : s.default  ,className)}>
      {children}
    </button>
  );
};

export default MainButton;
