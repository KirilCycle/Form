import React from "react";
import s from "./HelpTypesTabs.module.scss";
import PointerSlot from "../../../../../PointerSlot/PointerSlot";
import { keyboardNavigation } from "../../../../../../utils/accessebility";
import { classNames } from "../../../../../../utils/styling";

const HelpTypesTabs = ({ tabs, activeType, setActiveType }) => {
  return (
    <>
      <div role="tablist" className={s.helpTypesList}>
        {tabs.map(({ type, title, icon }, i) => {
          const isActive = type === activeType;
          return (
            <div
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) =>
                keyboardNavigation(e, i, tabs, "type", setActiveType)
              }
              className={s.helpType}
              key={type}
            >
              <PointerSlot isActive={isActive}>
                <button
                  type="button"
                  role="tab"
                  id={`tab-${type}`}
                  aria-label={`select tab ${type}`}
                  aria-controls={`tabpanel-${type}`}
                  aria-selected={isActive}
                  tabIndex={-1}
                  onClick={() => setActiveType(type)}
                  className={classNames(s.helpListBtn, isActive && s.activeBtn)}
                >
                  {icon ? icon : null}
                </button>
              </PointerSlot>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <ul className={s.helpBodyWrappper}>
        {tabs.map(({ panel, type }) => {
          const isActive = type === activeType;

          return (
            <li
              role="tabpanel"
              aria-labelledby={`tab-${type}`}
              id={`tabpanel-${type}`}
              tabIndex="0"
              key={type}
              style={{ display: `${isActive ? "block" : "none"}` }}
            >
              {panel}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HelpTypesTabs;
