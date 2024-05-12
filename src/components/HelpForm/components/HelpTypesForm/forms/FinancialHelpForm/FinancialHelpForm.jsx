import React, { useEffect, useState } from "react";
import s from "./FinancialHelpForm.module.scss";
import CreditCardForm from "../../../../../CreditCardForm/CreditCardForm";
import visaico from "../../../../../../assets/icons/png/visa.png";
import privat from "../../../../../../assets/icons/png/ПриватБанк.png";
import paypal from "../../../../../../assets/icons/png/paypal.png";
import webmoney from "../../../../../../assets/icons/png/webmoney.png";
import terminal from "../../../../../../assets/icons/png/terminal.png";

const providers = [
  {
    name: "Visa",
    logo: visaico,
  },
  {
    name: "Приват 24",
    logo: privat,
  },
  {
    name: "PayPal",
    logo: paypal,
  },
  {
    name: "WebMoney",
    logo: webmoney,
  },
  {
    name: "Термінал України",
    logo: terminal,
  },
];

const FinancialHelpForm = ({ formRef, errorMessages, setPayMethod }) => {
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

  return (
    <div className={s.financialHelpForm}>
      <div className={s.payMethodsContainer}>
        <p className={s.title}>Виберіть спосіб оплати</p>
        <ul className={s.payMethodsList}>
          {providers.map((p) => {
            return (
              <li onClick={() => setPayMethod(p.name)} key={p.name}>
                <button className={s.payMethodButton}>
                  <div className={s.logoWrapper}>
                    <img
                      className={s.payMethodLogo}
                      src={p.logo}
                      alt={p.name}
                    />
                  </div>
                  <p>{p.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.cardDataContainer}>
        <p className={s.title}>Введіть наступні данні</p>
        <CreditCardForm
          errorMessages={errorMessages}
          cardState={cardState}
          setCardState={setCardState}
        />
      </div>
    </div>
  );
};

export default FinancialHelpForm;
