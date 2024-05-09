import React from 'react'
import s from './CreditCardForm.module.scss'
import MainInput from '../../ui/input/MainInput/MainInput'

const CreditCardForm = () => {
  return (
    <form className={s.card}>
       <MainInput label={'Номер карти'} />
    </form>
  )
}

export default CreditCardForm