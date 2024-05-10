import React, { useState } from "react";
import s from "./TabView.module.scss";

const TabView = ({ tabs, tabButtons, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  console.log(tabs);

  return (
    <div className={s.tabs}>
      <div className={s.tabButtons}>
        {tabButtons.map((tab) => (
          <button
            key={tab.name}
            className={
              tab.name === active
                ? `${s.tabButton} ${s.tabButtonActive}`
                : s.tabButton
            }
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={s.tabPanel}>{tabs[activeTab]?.body}</div>
    </div>
  );
};

export default TabView;
