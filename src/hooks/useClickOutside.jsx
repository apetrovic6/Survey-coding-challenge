import { useRef, useState, useEffect } from "react";

export const useClickOutside = (initialValue) => {
  const ref = useRef(null);
  const [editable, setEditable] = useState(false);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) setEditable(false);
    if (ref.current && ref.current.contains(event.target)) setEditable(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { editable, setEditable, ref };
};
