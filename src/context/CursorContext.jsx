import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, textEnter, textLeave }}>
      {children}
    </CursorContext.Provider>
  );
};
