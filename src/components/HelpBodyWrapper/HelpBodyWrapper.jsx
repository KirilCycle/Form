import React from 'react';
import s from './HelpBodyWrapper.module.scss';

const HelpBodyWrapper = ({ children }) => {
  return (
    <div className={s.arrowPanel}>
       {children}
    </div>
  )
}

export default HelpBodyWrapper