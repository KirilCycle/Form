import React from 'react'
import s from './Triangle.module.scss'

const Triangle = ({ className }) => {
  return (
    <div className={`${s.triangle} ${className}`} >
         <div className={s.triangleInner}>
        
        </div>
    </div>
  )
}

export default Triangle