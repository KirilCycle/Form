import React, { useState, useRef, useEffect } from "react";
import s from "./HelpTypesForm.module.scss";
import FinancialHelpForm from "./forms/FinancialHelpForm/FinancialHelpForm";
import WalletIcon from "../../../../assets/icons/svg/WalletIcon";
import HandIcon from "../../../../assets/icons/svg/HandIcon";
import TshirtIcon from "../../../../assets/icons/svg/TshirtIcon";
import HeartIcon from "../../../../assets/icons/svg/HeartIcon";
import HelpTypesTabs from "./components/HelpTypesTabs/HelpTypesTabs";

const HelpTypesForm = ({ formRef, errorMessages, setPayMethod, payMethod }) => {
  const [activeHelpType, setActiveTypeHelp] = useState("financial");

  const helpTypesTabs = [
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
      <HelpTypesTabs tabs={helpTypesTabs} activeType={activeHelpType} setActiveType={setActiveTypeHelp} />
    </div>
  );
};

export default HelpTypesForm;
