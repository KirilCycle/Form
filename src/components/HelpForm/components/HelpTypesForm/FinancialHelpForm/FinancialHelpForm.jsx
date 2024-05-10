import React, { useState } from "react";
import s from "./FinancialHelpForm.module.scss";
import CreditCardForm from "../../../../CreditCardForm/CreditCardForm";

const providers = [
  {
    name: "PayPal",
    logo: "",
  },
  {
    name: "Приват 24",
    logo: "",
  },
  {
    name: "VISA",
    logo: "",
  },
  {
    name: "WebMoney",
    logo: "",
  },
  {
    name: "Термінал України",
    logo: "",
  },
];

const FinancialHelpForm = ({ formRef, errorMessages, setPayMethod }) => {
  return (
    <div className={s.financialHelpForm}>
      <div className={s.payMethodsContainer}>
        <p>Виберіть спосіб оплати</p>
        <ul className={s.payMethodsList}>
          {providers.map((p) => {
            return (
              <li onClick={() => setPayMethod(p.name)} key={p.name}>
                <button className={s.provider}>
                  <p>{p.name}</p>
                  <img alt={p.name} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.cardDataContainer}>
        <p>Введіть наступні данні</p>
        <CreditCardForm />
      </div>
    </div>
  );
};

export default FinancialHelpForm;
