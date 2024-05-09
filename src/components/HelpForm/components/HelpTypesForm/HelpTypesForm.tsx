import React, { useState, useRef, useEffect } from "react";
import s from "./HelpTypesForm.module.scss";
import FinancialHelpForm from "./FinancialHelpForm/FinancialHelpForm";
import HelpBodyWrapper from "../../../HelpBodyWrapper/HelpBodyWrapper";
import PointerSlot from "../../../PointerSlot/PointerSlot";
// import HelpBodyWrapper from "../../../HelpBodyWrapper/HelpBodyWrapper";



const helpBodies = {
  financial: <FinancialHelpForm />,
  action: <p>Action</p>,
  material: <p>Material</p>,
  volunteer: <p>Volunteer</p>,
};

const helpTypes = [
  {
    type: "action",
    title: "Financial SUS aada",
  },
  {
    type: "financial",
    title: "Financial",
  },
  {
    type: "material",
    title: "Financial",
  },
  {
    type: "volunteer",
    title: "Financial",
  },
];

const HelpTypesForm = () => {
  const [activeHelpType, setActiveTypeHelp] = useState("financial");

  const selectHelpType = (type) => {
    console.log(activeHelpType)
    setActiveTypeHelp(type)
  };

  return (

    <div className={s.helpContainer}>
      <h2>Види допомоги</h2>
      <p>Ви можете змінити вид допомоги</p>
      <ul className={s.helpList}>
        {helpTypes.map(({ type, title }, i) => {
          return (
            <li className={s.helpListItem} key={type}>
              <PointerSlot isActive={type === activeHelpType}>
                <button
                  onClick={() => selectHelpType(type)}
                  className={s.helpListBtn}
                ></button>
              </PointerSlot>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      <HelpBodyWrapper>
        {helpBodies[activeHelpType]}
      </HelpBodyWrapper>
    </div>

  );
};

export default HelpTypesForm;
