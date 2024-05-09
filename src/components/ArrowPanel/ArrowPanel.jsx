import React from 'react';
import s from './ArrowPanel.module.scss';
import Triangle from '../../ui/shapes/Triangle'

const ArrowPanel = ({ children }) => {
  return (
    <div className={s.arrowPanel}>
       <Triangle classNames={s.triangleModifier} />
       {children}
    </div>
  )
}

export default ArrowPanel