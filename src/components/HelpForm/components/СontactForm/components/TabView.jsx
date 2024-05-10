import React, { useState } from "react";
import s from "./TabView.module.scss";
import { keyboardNavigation } from "../../../../../utils/accessebility";

const TabView = ({ tabs, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <div className={s.tabs}>
      <div className={s.tabButtons}>
        {tabs.map((tab, i) => {
          const isActive = tab.name === active;

          return (
            <button
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
              className={
                isActive ? `${s.tabButton} ${s.tabButtonActive}` : s.tabButton
              }
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className={s.tabPanel}>
        {tabs.map(({name, body}) => {
          const isActive = name === activeTab
          return (
            <div role="tabpanel" aria-labelledby={`tab-${name}`} id={`tabpanel-${name}`} tabIndex="0" key={name} onClick={() => setActiveTab(name)} className={ isActive ? s.tabWrapper : s.hidden}>
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabView;
