import React from "react";
import s from "./DisplayPanel.module.scss";

const DisplayPanel = ({ children, isActive }) => {
  return (
    <div className={s.displayPanel}>
      {children}
      {isActive && <div className={s.panelToDisplay}></div>}
    </div>
  );
};

export default DisplayPanel;
