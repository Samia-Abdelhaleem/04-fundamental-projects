import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPageId, setSelectedPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        selectedPageId,
        setSelectedPageId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
