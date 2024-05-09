import React, { useState, useRef, useEffect } from "react";
import useRefs from "../../hooks/useRefs";
import s from "./styles/HelpForm.module.scss";
import DisplayPanel from "../DisplayPanel/DisplayPanel";
import ArrowPanel from "../ArrowPanel/ArrowPanel";
import FinancialHelpForm from "./components/FinancialHelpForm/FinancialHelpForm";

const helpBodies = {
  Financial: <FinancialHelpForm />,
};

const HelpForm = () => {
  const [activeHelpType, setActiveTypeHelp] = useState("Financial");
  const [arrowXpos, setArrowXpos] = useState(0);
  const { refsByKey, setRef } = useRefs();


  useEffect(() => {
    const defaultHelpTypeBtn = refsByKey[activeHelpType]
    if (defaultHelpTypeBtn) {
      const xPosition = defaultHelpTypeBtn.getBoundingClientRect().left;
      setArrowXpos(xPosition)
    }
  },[])

  const selectHelpType = (currTarget, type) => {
    console.log(refsByKey)
    const xPosition = currTarget.getBoundingClientRect().left;

    console.log("X position:", xPosition);
  };

  const helpTypes = [
    {
      type: "Action",
      title: "Financial SUS aada",
    },
    {
      type: "Financial",
      title: "Financial",
    },
    {
      type: "Material",
      title: "Financial",
    },
    {
      type: "Volunteer",
      title: "Financial",
    },
  ];

  return (
    <div className={s.helpContainer}>
      <h2>Види допомоги</h2>
      <p>Ви можете змінити вид допомоги</p>
      <ul className={s.helpList}>
        {helpTypes.map(({ type, title }, i) => {
          return (
            <li className={s.helpListItem} key={type}>
              <button
                ref={(element) => setRef(element, type)}
                onClick={(e) => selectHelpType(e.currentTarget, type)}
                className={s.helpListBtn}
              ></button>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      <ArrowPanel>
        {helpBodies[activeHelpType]}
      </ArrowPanel>
    </div>
  );
};

export default HelpForm;
