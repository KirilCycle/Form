import React, { useEffect, useState } from "react";
import s from "./FinancialHelpForm.module.scss";
import CreditCardForm from "../../../../../CreditCardForm/CreditCardForm";
import visaico from "../../../../../../assets/icons/png/visa.png";
import privat from "../../../../../../assets/icons/png/ПриватБанк.png";
import paypal from "../../../../../../assets/icons/png/paypal.png";
import webmoney from "../../../../../../assets/icons/png/webmoney.png";
import terminal from "../../../../../../assets/icons/png/terminal.png";
import { classNames } from "../../../../../../utils/styling";

const providers = [
  { 
    text: "Visa",
    name: "Visa",
    logo: visaico,
    alt: "Visa Логотип"
  },
  {  
    text: "Приват 24",
    name: "privat",
    logo: privat,
    alt: "ПриватБанк Логотип"
  },
  { 
    text: "PayPal",
    name: "PayPal",
    logo: paypal,
    alt: "PayPal Логотип"
  },
  {
    text: "WebMoney",
    name: "WebMoney",
    logo: webmoney,
    alt: "WebMoney Логотип"
  },
  {
    text: "Термінал України",
    name: "terminal",
    logo: terminal,
    alt: "Термінал України Логотип"
  },
];

const FinancialHelpForm = ({ formRef, errorMessages, setPayMethod, activePayMethod }) => {
  const [cardState, setCardState] = useState({
    cvc: "",
    expiry: "",
    number: "",
  });

  useEffect(() => {
    formRef.current = { ...formRef.current, ...cardState };

    return () => {
      formRef.current = { ...formRef.current, cvc: "", expiry: "", number: "" };
    };
  }, [cardState]);

  console.log(activePayMethod, 'A')

  return (
    <div className={s.financialHelpForm}>
      <div className={s.payMethodsContainer}>
        <p className={s.title}>Cпосіб оплати</p>
        <ul className={s.payMethodsList}>
          {providers.map((p) => {
            return (
              <li onClick={() => setPayMethod(p.name)} key={p.name}>
                <button className={classNames(s.payMethodButton,activePayMethod === p.name && s.payMethodButtonActive)}>
                  <div className={s.logoWrapper}>
                    <img
                      className={s.payMethodLogo}
                      src={p.logo}
                      alt={p.alt}
                    />
                  </div>
                  <p>{p.text}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.cardDataContainer}>
        <div>
        <p className={s.title}>Введіть наступні данні</p>
        <CreditCardForm
          errorMessages={errorMessages}
          cardState={cardState}
          setCardState={setCardState}
        />
        </div>
      </div>
    </div>
  );
};

export default FinancialHelpForm;
