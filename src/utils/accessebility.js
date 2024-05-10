export const keyboardNavigation = (
  e,
  index,
  sourceList,
  itemField,
  callBack
) => {
  const tab = e.target;
  const key = e.key;

  switch (key) {
    case "ArrowLeft": {
      const prev = tab.previousElementSibling;
      const prevIndex = index - 1;
      console.log("left", prev);
      if (prev) {
        prev.focus();
        callBack(sourceList[prevIndex][itemField]);
      }

      break;
    }
    case "ArrowRight": {
      console.log("right");
      const next = tab.nextElementSibling;
      const nextIndex = index + 1;
      if (next) {
        next.focus();
        callBack(sourceList[nextIndex][itemField]);
      }

      break;
    }
  }
};
