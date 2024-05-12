import React from "react";
import s from "./PhysicalPersonFrom.module.scss";
import MainInput from "../../../../../../ui/input/MainInput/MainInput";

const PhysicalPersonForm = ({ formRef, errorMessages = {} }) => {
  const handleChange = (e) => {
    formRef.current[e.target.name] = e.target.value;
  };

  return (
    <form className={s.panelForm}>
      <fieldset>
        <div className="horizontal">
          <MainInput
            onChange={handleChange}
            error={errorMessages.name}
            name="name"
            label="Імя"
            required
            minlength="2"
          />
          <MainInput
            onChange={handleChange}
            error={errorMessages.surname}
            name="surname"
            label="Фамілія"
            required
            minlength="3"
          />
        </div>
        <MainInput
          onChange={handleChange}
          error={errorMessages.company}
          name="company"
          label="Назва компанії, організації"
          required
        />
        <MainInput
          onChange={handleChange}
          error={errorMessages.email}
          type="email"
          name="email"
          label="Email-адрес"
          required
          minlength="5"
        />
        <MainInput
          onChange={handleChange}
          error={errorMessages.phone}
          name="phone"
          label="Номер Телефону"
          required
        />
      </fieldset>
      <fieldset>
        <MainInput
          onChange={handleChange}
          error={errorMessages.country}
          name="country"
          label="Країна"
          required
        />
        <div className={s.horizontal}>
          <MainInput
            onChange={handleChange}
            error={errorMessages.city}
            name="city"
            label="Місто"
            required
          />
          <MainInput
            onChange={handleChange}
            error={errorMessages.region}
            name="region"
            label="Штат, Район"
            required
          />
        </div>
        <MainInput
          onChange={handleChange}
          error={errorMessages.address}
          name="address"
          label="Адреса"
          required
        />
        <MainInput
          inputClassName={s.inputModifier}
          onChange={handleChange}
          error={errorMessages.postcode}
          name="postcode"
          label="Поштовий індекс"
          required
        />
      </fieldset>
    </form>
  );
};

export default PhysicalPersonForm;
