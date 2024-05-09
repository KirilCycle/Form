import React from 'react'
import s from './Triangle.module.scss'

const Triangle = ({ classNames }) => {
  return (
    <div className={`${s.triangle} ${classNames}`} >
         <div className={s.triangleInner}>
        
        </div>
    </div>
  )
}

export default Triangle