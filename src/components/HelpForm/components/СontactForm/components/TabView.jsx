import React, { useState } from "react";
import s from "./TabView.module.scss";
import { keyboardNavigation } from "../../../../../utils/accessebility";
import MainButton from "../../../../../ui/button/MainButton/MainButton";
import { classNames } from "../../../../../utils/styling";

const TabView = ({ tabs, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <div className={s.tabView}>
      <div role="tablist" className={s.tabButtons}>
        {tabs.map((tab, i) => {
          const isActive = tab.name === activeTab;
          return (
            <MainButton
              role="tab"
              type="button"
              id={`tab-${tab.name}`}
              aria-controls={`tabpanel-${tab.name}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) =>
                keyboardNavigation(e, i, tabs, "name", setActiveTab)
              }
              key={tab.name}
              isActive={isActive}
              className={classNames(i === tabs.length - 1 ? s.tabLast : i === 0 ? s.tabFirst : s.tabMiddle, s.tab) }
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.title}
            </MainButton>
          );
        })}
      </div>
      <div className={s.tabPanel}>
        {tabs.map(({name, body}) => {
          const isActive = name === activeTab
          return (
            <div role={`tabpanel`} aria-labelledby={`tab-${name}`} id={`tabpanel-${name}`} tabIndex="0" key={name} onClick={() => setActiveTab(name)} style={{display: `${isActive ? 'block' : 'none'}`}}  className={s.tabWrapper}>
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabView;
