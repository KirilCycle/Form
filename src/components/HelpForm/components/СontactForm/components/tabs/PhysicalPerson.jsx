import React, { useState } from "react";
import s from "./PhysicalPersonFrom.module.scss";
import MainInput from "../../../../../../ui/input/MainInput/MainInput";

const PhysicalPersonForm = ({formRef, errorMessages = {} }) => {

  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value
  }

  return (
      <form className={s.panelForm} >
        <fieldset> 
          <div className={s.horizontal}>
            <MainInput onChange={handleChange} error={errorMessages.name}  name="name" label="Імя" />
            <MainInput onChange={handleChange}  error={errorMessages.surname} name="surname" label="Фамілія" />
          </div>
          <MainInput onChange={handleChange}  error={errorMessages.company} name="company" label="Назва компанії,організації" />
          <MainInput onChange={handleChange} error={errorMessages.email} type="email" name="email" label="Email-адрес" />
          <MainInput onChange={handleChange} error={errorMessages.phone} name="phone" label="Номер Телефону" />
        </fieldset>
        <fieldset>
          <MainInput onChange={handleChange} error={errorMessages.country} name="country" label="Країна" />
          <div className={s.horizontal}>
            <MainInput onChange={handleChange} error={errorMessages.city} name="city" label="Місто" />
            <MainInput onChange={handleChange} error={errorMessages.region} name="region" label="Штат, Район" />
          </div>
          <MainInput onChange={handleChange}  error={errorMessages.address} name="address" label="Адреса" />
          <MainInput onChange={handleChange} error={errorMessages.postcode} name="postcode" label="Поштовий індекс" />
        </fieldset>
      </form>
  );
};

export default PhysicalPersonForm;
