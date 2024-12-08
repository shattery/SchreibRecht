import React, { createContext, useContext, useState } from 'react';

// Erstelle den Kontext
const AppContext = createContext();

// Ein Context Provider, um den Wert an die Kinderkomponenten weiterzugeben
export const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState('/default-path');

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      {children}
    </AppContext.Provider>
  );
};

// Zugriff auf den Kontext in jeder Komponente
export const useAppContext = () => useContext(AppContext);
