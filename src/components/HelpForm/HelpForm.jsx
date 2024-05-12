import React, { useEffect, useRef, useState } from "react";
import HelpTypesForm from "./components/HelpTypesForm/HelpTypesForm";
import ContactForm from "./components/СontactForm/ContactForm";
import SubmitButton from "../../ui/button/SubmitButton/SubmitButton";
import s from "./HelpForm.module.scss";

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

const validators = {
  name: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 букви";
    } else if (/\d/.test(string)) {
      return "Тільки букви";
    }
    return false;
  },
  surname: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 букви";
    } else if (/\d/.test(string)) {
      return "Тільки букви";
    }
    return false;
  },
  company: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 символи";
    }
    return false;
  },
  email: (string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(string)) {
      return "Некоректний формат";
    }
    return false;
  },
  phone: (string) => {
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneRegex.test(string)) {
      return "Некоректний формат";
    }
    return false;
  },
  country: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 символи";
    }
    return false;
  },
  city: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 символи";
    }
    return false;
  },
  region: (string) => {
    if (string.length < 2) {
      return "Хочаб 2 символи";
    }
    return false;
  },
  address: (string) => {
    if (string.length < 5) {
      return "Хочаб 5 символів";
    }
    return false;
  },
  postcode: (string) => {
    const postcodeRegex = /^[0-9]{5}$/;
    if (!postcodeRegex.test(string)) {
      return "Некоректний формат";
    }
    return false;
  },
  number: (string) => {
    if (string.length < 16) {
      return "Хочаб 16 цифр";
    }
    return false;
  },
  expiry: (string) => {
    const str = string.replace('/','')

    if (str.length !== 4 || !/^\d+$/.test(str)) { return "Некорктний формат"}
  
    return true;
  },
  cvc: (string) => {
    const cvcRegex = /^[0-9]{3,4}$/;
    if (!cvcRegex.test(string)) {
      return "Некоректний формат";
    }
    return false;
  },
};

const HelpForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [payMethod, setPayMethod] = useState("privat");

  const formRef = useRef({});

  useEffect(() => {
    formRef.current = inputFields;
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    
    let errors = null;
    
    for (let key in inputFields) {
      if (validators[key]) {
        const error = validators[key](formRef.current[key]);
        if (error) { 
          errors ? (errors[key] = error) : errors = { [key]: error }
        }
      }
    }

    if (errors) {
      setErrorMessages(errors);
    } else {;
      setErrorMessages({});
    }

  };

  return (
    <div className={s.formContainer}>
      <ContactForm errorMessages={errorMessages} formRef={formRef} />
      <HelpTypesForm
        errorMessages={errorMessages}
        payMethod={payMethod}
        setPayMethod={setPayMethod}
        formRef={formRef}
      />
      <SubmitButton onClick={submitForm}>Допомогти</SubmitButton>
    </div>
  );
};

export default HelpForm;
