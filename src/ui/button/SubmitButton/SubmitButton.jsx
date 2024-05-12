import React from 'react'
import s from './SubmitButton.module.scss'
import { classNames } from '../../../utils/styling'

const SubmitButton = ({ children, buttonClassName}) => {
  return (
    <button className={classNames(s.submitBtn, buttonClassName)} >{children ? children: 'Відправити' }</button>
  )
}

export default SubmitButton