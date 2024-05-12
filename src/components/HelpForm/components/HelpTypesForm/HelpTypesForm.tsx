import React, { useState, useRef, useEffect } from "react";
import s from "./HelpTypesForm.module.scss";
import FinancialHelpForm from "./forms/FinancialHelpForm/FinancialHelpForm";
import HelpBodyWrapper from "./components/HelpBodyWrapper/HelpBodyWrapper";
import PointerSlot from "../../../PointerSlot/PointerSlot";
import { keyboardNavigation } from "../../../../utils/accessebility";
import WalletIcon from "../../../../assets/icons/svg/WalletIcon";
import HelpTypesButtonsList from "./components/HelpTypesButtonsList/HelpTypesButtonList";
import HandIcon from "../../../../assets/icons/svg/HandIcon";
import TshirtIcon from "../../../../assets/icons/svg/TshirtIcon";
import HeartIcon from "../../../../assets/icons/svg/HeartIcon";

const HelpTypesForm = ({ formRef, errorMessages, setPayMethod, payMethod }) => {
  const [activeHelpType, setActiveTypeHelp] = useState("financial");

  const helpTypes = [
    {
      type: "action",
      title: "Зробити",
      icon: <HandIcon />,
      panel: <div>Null</div>,
    },
    {
      type: "financial",
      title: "Фінансова допомога",
      icon: <WalletIcon />,
      panel: (
        <FinancialHelpForm
          activePayMethod={payMethod}
          setPayMethod={setPayMethod}
          formRef={formRef}
          errorMessages={errorMessages}
        />
      ),
    },
    {
      type: "material",
      title: "Матеріальна допомога",
      icon: <TshirtIcon />,
      panel: <div>NUll</div>,
    },
    {
      type: "volunteer",
      title: "Волонтерство",
      icon: <HeartIcon />,
      panel: <div>NUll</div>,
    },
  ];

  return (
    <div className={s.helpContainer}>
      <h2>Види допомоги</h2>
      <p className={s.helpDescritption}>Ви можете змінити вид допомоги</p>
      <HelpTypesButtonsList
        setActiveTypeHelp={setActiveTypeHelp}
        activeHelpType={activeHelpType}
        helpTypes={helpTypes}
      />
      <HelpBodyWrapper
        activeTab={activeHelpType}
        tabPanels={helpTypes}
      ></HelpBodyWrapper>
    </div>
  );
};

export default HelpTypesForm;
