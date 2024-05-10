import React from "react";
import s from "./HelpForm.module.scss";
import HelpTypesForm from "./components/HelpTypesForm/HelpTypesForm";
import ContactForm from "./components/СontactForm/ContactForm";


const HelpForm = () => {
  return (
    <div>
      <ContactForm/>
      <HelpTypesForm/>
    </div>
  );
};

export default HelpForm;
