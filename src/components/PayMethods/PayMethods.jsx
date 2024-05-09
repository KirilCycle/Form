import React from 'react';
import s from './PayMethods.module.scss';

const PayMethods = () => {
  
    const providers = [{
        name: 'PayPal',
        logo: '',
    },
    {
        name: 'Приват 24',
        logo: '',
    },
    {
        name: 'VISA',
        logo: '',
    },
    {
        name: 'WebMoney',
        logo: '',
    },
    {
        name: 'Термінал України',
        logo: '',
    }]

   return (
    <ul className={s.payMethodsList} >
      {providers.map((p) => {
        return (
          <li key={p.name}>
            <button className={s.provider}>
              <p>{p.name}</p>
              <img alt={p.name} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default PayMethods