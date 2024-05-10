import React, { useState } from "react";
import s from "./TabView.module.scss";

const TabView = ({ tabs, tabButtons, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  const keyboardNavigation = (e, i) => {
    const tab = e.target;
    const key = e.key;

    switch (key) {
      case "ArrowLeft": {
        const prev = tab.previousElementSibling 
        const prevIndex = i - 1
        if (prev && tabButtons[prevIndex]) {
          prev.focus();
          setActiveTab(tabButtons[prevIndex].name)
        }

        break
      }
      case "ArrowRight": {
        const next = tab.nextElementSibling
        const nextIndex = i + 1
        if (next && tabButtons[nextIndex]) {
          next.focus();
          setActiveTab(tabButtons[nextIndex].name)
        }
        
        break
      }

    }
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabButtons}>
        {tabButtons.map((tab, i) => {
          const isActive = tab.name === active;

          return (
            <button
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => keyboardNavigation(e, i)}
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
      <div className={s.tabPanel}>{tabs[activeTab]?.body}</div>
    </div>
  );
};

export default TabView;
