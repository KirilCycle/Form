import React from "react";
import s from "./HelpTypesTabs.module.scss";
import PointerSlot from "../../../../../PointerSlot/PointerSlot";
import { keyboardNavigation } from "../../../../../../utils/accessebility";
import { classNames } from "../../../../../../utils/styling";

const HelpTypesTabs = ({ tabs, activeType, setActiveType }) => {
  return (
    //================================================================
    //
    //i decided not to use ul and li tags, for tabs component according to W3C
    //
    //
    //#Note TabView Component above can be modified and used for second tabs
    //================================================================
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
                  tabIndex={isActive ? 0 : -1} // Ensure active tab is focusable
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
      <div className={s.helpBodyWrappper}>
        {tabs.map(({ panel, type }) => {
          const isActive = type === activeType;
          return (
            <div
              role="tabpanel"
              aria-labelledby={`tab-${type}`}
              id={`tabpanel-${type}`}
              tabIndex={isActive ? 0 : -1} // Ensure active tabpanel is focusable
              key={type}
              style={{ display: `${isActive ? "block" : "none"}` }}
            >
              {panel}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HelpTypesTabs;
