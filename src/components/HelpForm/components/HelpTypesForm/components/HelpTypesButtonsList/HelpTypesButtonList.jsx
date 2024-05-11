import React from "react";
import s from "./HelpTypesButtonsList.module.scss";
import { keyboardNavigation } from "../../../../../../utils/accessebility";
import PointerSlot from "../../../../../PointerSlot/PointerSlot";

const HelpTypesButtonsList = ({
  helpTypes,
  activeHelpType,
  setActiveTypeHelp,
}) => {
  return (
    <ul className={s.helpList}>
      {helpTypes.map(({ type, title, icon }, i) => {
        const isActive = type === activeHelpType;
        return (
          <li
            role="tab"
            id={`tab-${type}`}
            aria-controls={`tabpanel-${type}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onKeyDown={(e) =>
              keyboardNavigation(e, i, helpTypes, "type", setActiveTypeHelp)
            }
            className={s.helpListItem}
            key={type}
          >
            <PointerSlot isActive={isActive}>
              <button
                tabIndex={-1}
                onClick={() => setActiveTypeHelp(type)}
                className={s.helpListBtn}
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
