import { createContext, useContext, useEffect, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        setCursorVariant,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);