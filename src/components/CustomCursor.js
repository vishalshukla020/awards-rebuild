import { useRef, useEffect } from "react";

import { Cursor } from "../styled-components/GlobalStyles.js";
import { useGlobalStateContext } from "../context/GlobalContext";

export default function CustomCursor({ toggleMenu }) {
  const cursor = useRef(null);
  const { cursorType } = useGlobalStateContext();

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    cursor.current.style.top = `${y}px`;
    cursor.current.style.left = `${x}px`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <Cursor
      ref={cursor}
      className={`${cursorType} ${toggleMenu ? "nav-open" : ""}`}
    />
  );
}
