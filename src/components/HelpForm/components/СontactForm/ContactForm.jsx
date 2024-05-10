import React, { useState } from "react";
import TabView from "./components/TabView";
import PhysicalPerson from "./components/tabs/PhysicalPerson";

const ContactForm = () => {
  const [formState, setFormState] = useState("");

  const tabs = [
    {
      title: "Фіз. особа",
      name: "physicalPerson",
      body: <PhysicalPerson setFormState={setFormState} />,
    },
    {
      title: "Юр.Особа",
      name: "wewe",
      body: <p>OK</p>,
    },
  ];

  console.log(formState);

  return (
    <div>
      <h2>Заповніть форму</h2>
      <TabView active="physicalPerson" tabs={tabs} />
    </div>
  );
};

export default ContactForm;
