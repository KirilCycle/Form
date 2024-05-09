import React, { useState } from 'react'
import s from './FinancialHelpForm.module.scss'
import PayMethods from '../../../PayMethods/PayMethods'

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
        </div>
    </div>
  )
}

export default FinancialHelpForm