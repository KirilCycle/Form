import React, { useState } from "react";
import TabView from "./components/TabView";
import PhysicalPerson from "./components/tabs/PhysicalPerson";
import s from './ContactForm.module.scss'

const ContactForm = ({ formRef, errorMessages }) => {


  const tabs = [
    {
      title: "Фіз. особа",
      name: "physicalPerson",
      body: <PhysicalPerson formRef={formRef} errorMessages={errorMessages} />,
    },
    {
      title: "Юр.Особа",
      name: "wewe",
      body: <p>Null</p>,
    },
  ];


  return (
    <div className={s.contactForm} >
      <h2>Заповніть форму</h2>
      <TabView active="physicalPerson" tabs={tabs} />
    </div>
  );
};

export default ContactForm;
