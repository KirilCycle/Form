import { useRef } from "react";

const useRefs = () => {
    const refsByKey = useRef({})
  
    const setRef = (element, key) => {
      refsByKey.current[key] = element;
    }
  
    return {refsByKey: refsByKey.current, setRef};
  }

export default useRefs