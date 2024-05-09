import React from "react";
import s from "./PointerSlot.module.scss";
import Triangle from "../../ui/shapes/Triangle";

const PointerSlot = ({ children, isActive }) => {
  return (
    <div className={s.displayPanel}>
      {children}
      {isActive && 
        <div className={s.panelToDisplay} >
          <Triangle/>
        </div>
        }
    </div>
  );
};

export default PointerSlot;
