import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleStateActiveMenu = () => setIsActiveMenu((prevValue) => !prevValue);

  return <AppContext.Provider value={{ isActiveMenu, toggleStateActiveMenu }}>{children}</AppContext.Provider>;
};

export default AppProvider;
