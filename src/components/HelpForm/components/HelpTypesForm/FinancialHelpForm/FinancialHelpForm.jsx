import React, { useState } from 'react'
import s from './FinancialHelpForm.module.scss'
import PayMethods from '../../../../PayMethods/PayMethods'
import CreditCardForm from '../../../../CreditCardForm/CreditCardForm'

const FinancialHelpForm = () => {
  
   const [payMethod, setPayMethod] = useState(null)

   return (
    <div className={s.financialHelpForm}>
        <div className={s.payMethodsContainer}>
           <p>Виберіть спосіб оплати</p>
           <PayMethods/>
        </div>
        <div className={s.cardDataContainer}>
           <p>Введіть наступні данні</p>
           <CreditCardForm/>
        </div>
    </div>
  )
}

export default FinancialHelpForm