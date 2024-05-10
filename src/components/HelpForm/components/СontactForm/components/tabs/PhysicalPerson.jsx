import React from "react";
import s from "./PhysicalPersonFrom.module.scss";
import MainInput from "../../../../../../ui/input/MainInput/MainInput";

const PhysicalPersonForm = () => {
  return (
      <form className={s.panelForm} >
        <fieldset>
          <div className={s.horizontal}>
            <MainInput label="Імя" />
            <MainInput label="Фамілія" />
          </div>
          <MainInput label="Назва компанії,організації" />
          <MainInput label="Email-адрес" />
          <MainInput label="Номер Телефону" />
        </fieldset>
        <fieldset>
          <MainInput label="Країна" />
          <div className={s.horizontal}>
            <MainInput label="Місто" />
            <MainInput label="Штат, Район" />
          </div>
          <MainInput label="Адреса" />
          <MainInput label="Поштовий індекс" />
        </fieldset>
      </form>
  );
};

export default PhysicalPersonForm;
