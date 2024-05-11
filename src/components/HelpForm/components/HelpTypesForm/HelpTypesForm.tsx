import React, { useState, useRef, useEffect } from "react";
import s from "./HelpTypesForm.module.scss";
import FinancialHelpForm from "./forms/FinancialHelpForm/FinancialHelpForm";
import HelpBodyWrapper from "./components/HelpBodyWrapper/HelpBodyWrapper";
import PointerSlot from "../../../PointerSlot/PointerSlot";
import { keyboardNavigation } from "../../../../utils/accessebility";
import WalletIcon from "../../../../assets/icons/WalletIcon";
import HelpTypesButtonsList from "./components/HelpTypesButtonsList/HelpTypesButtonList";

const HelpTypesForm = ({ formRef, errorMessages, setPayMethod }) => {
  const [activeHelpType, setActiveTypeHelp] = useState("financial");

  const helpTypes = [
    {
      type: "action",
      title: "Financial SUS aada",
      icon: <WalletIcon className={s.helpTypeIcon} />,
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

  const helpBodies = {
    financial: (
      <FinancialHelpForm
        setPayMethod={setPayMethod}
        formRef={formRef}
        errorMessages={errorMessages}
      />
    ),
    action: <p>Action</p>,
    material: <p>Material</p>,
    volunteer: <p>Volunteer</p>,
  };

  return (
    <div className={s.helpContainer}>
      <h2>Види допомоги</h2>
      <p className={s.helpDescritption}>Ви можете змінити вид допомоги</p>
      <HelpTypesButtonsList
        setActiveTypeHelp={setActiveTypeHelp}
        activeHelpType={activeHelpType}
        helpTypes={helpTypes}
      />
      <HelpBodyWrapper type={activeHelpType}>
        {helpBodies[activeHelpType]}
      </HelpBodyWrapper>
    </div>
  );
};

export default HelpTypesForm;
