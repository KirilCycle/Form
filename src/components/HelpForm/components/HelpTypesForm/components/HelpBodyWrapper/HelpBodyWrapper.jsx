import React from 'react';
import s from './HelpBodyWrapper.module.scss';

const HelpBodyWrapper = ({ children, type}) => {
  return (
    <div role="tabpanel" aria-labelledby={`tab-${type}`} id={`tabpanel-${type}`} className={s.arrowPanel}>
       {children}
    </div>
  )
}

export default HelpBodyWrapper