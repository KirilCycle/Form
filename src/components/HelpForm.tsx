import React from 'react'
import s from './styles/HelpForm.module.scss'

const HelpForm = () => {

    const helpTypes = [{
        type: 'Financial',
        title: 'Financial',
      }, {
        type: 'Financial',
        title: 'Financial',
      },{
        type: 'Financial',
        title: 'Financial',
      },{
        type: 'Financial',
        title: 'Financial',
      }]
      

  return (
    <div className={s.helpContainer}>
         <ul className={s.helpList} >
      { helpTypes.map((help) => {
        return (
          <li key={help.type}>
            {help.title}
          </li>
        )
      }) }
    </ul>
    </div>
  )
}

export default HelpForm