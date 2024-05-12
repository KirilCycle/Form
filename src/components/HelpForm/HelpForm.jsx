import React, { useEffect, useRef, useState } from "react";
import HelpTypesForm from "./components/HelpTypesForm/HelpTypesForm";
import ContactForm from "./components/СontactForm/ContactForm";

const inputFields = {
    name: "",
    surname: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    region: "",
    address: "",
    postcode: "",
    number: "",
    expiry: "",
    cvc: "",
};

const HelpForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [payMethod, setPayMethod] = useState(null);

  const formRef = useRef({});

  useEffect(() => {
    formRef.current = inputFields;
  }, []);

  const submitForm = (e) => {

     setErrorMessages({
      name: 'Please enter',
      surname: 'Please enter',
      company: 'Please enter',
      email: 'Please enter',
      phone: 'Please enter',
      country: 'Please enter',
      city: 'Please enter',
      region: 'Please enter',
      address: 'Please enter',
      postcode: 'Please enter',
      number: 'Please enter',
      expiry: 'Please enter',
      cvc: 'Please enter',
     })
  }

  return (
    <div>
      <ContactForm errorMessages={errorMessages} formRef={formRef} />
      <HelpTypesForm errorMessages={errorMessages} setPayMethod={setPayMethod} formRef={formRef}  />
      <button onClick={submitForm}>Допомогти</button>
    </div>
  );
};

export default HelpForm;
