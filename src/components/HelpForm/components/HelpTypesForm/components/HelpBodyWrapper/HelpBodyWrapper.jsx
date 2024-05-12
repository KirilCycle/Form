import React from 'react';
import s from './HelpBodyWrapper.module.scss';

const HelpBodyWrapper = ({ tabPanels, activeTab }) => {

  // {tabs.map(({name, body}) => {
  //   const isActive = name === activeTab
  //   return (
  //     <div role={`tabpanel`} aria-labelledby={`tab-${name}`} id={`tabpanel-${name}`} tabIndex="0" key={name} onClick={() => setActiveTab(name)} style={{display: `${isActive ? 'block' : 'none'}`}}  className={s.tabWrapper}>
  //       {body}
  //     </div>
  //   );
  // })}

  return (
    <div className={s.helpBodyWrappper}>
        {tabPanels.map(({panel, type}) => {

          const isActive = type === activeTab;

          return (
            <div role="tabpanel" aria-labelledby={`tab-${type}`} id={`tabpanel-${type}`} tabIndex="0" key={type} style={{display: `${isActive ? 'block' : 'none'}`}}  >
              {panel}
            </div>
          )
        })}
    </div>
  )
}

export default HelpBodyWrapper