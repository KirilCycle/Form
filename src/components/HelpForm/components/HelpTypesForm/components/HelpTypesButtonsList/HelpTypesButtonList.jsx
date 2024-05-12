import React from "react";
import s from "./HelpTypesButtonsList.module.scss";
import { keyboardNavigation } from "../../../../../../utils/accessebility";
import PointerSlot from "../../../../../PointerSlot/PointerSlot";
import { classNames } from "../../../../../../utils/styling";

const HelpTypesButtonsList = ({
  helpTypes,
  activeHelpType,
  setActiveTypeHelp,
}) => {
  return (
    <ul role="tablist" className={s.helpTypesList}>
      {helpTypes.map(({ type, title, icon }, i) => {
        const isActive = type === activeHelpType;
        return (
          <li
            tabIndex={isActive ? 0 : -1}
            onKeyDown={(e) =>
              keyboardNavigation(e, i, helpTypes, "type", setActiveTypeHelp)
            }
            className={s.helpType}
            key={type}
          >
            <PointerSlot isActive={isActive}>
              <button
                role="tab"
                id={`tab-${type}`}
                aria-controls={`tabpanel-${type}`}
                aria-selected={isActive}
                type="button"
                tabIndex={-1}
                onClick={() => setActiveTypeHelp(type)}
                className={classNames(s.helpListBtn, isActive && s.activeBtn)}
              >
                {icon ? icon : null}
              </button>
            </PointerSlot>
            <p>{title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default HelpTypesButtonsList;
