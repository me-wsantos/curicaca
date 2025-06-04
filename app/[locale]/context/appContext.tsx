'use client'

import { useState, createContext, useContext } from 'react'

interface IAppContext {
  activeMenu: number
  setActiveMenu(value: number):void
  activeSlideMobile: number
  setActiveSlideMobile(value: number):void
}

const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeSlideMobile, setActiveSlideMobile] = useState(0);

  return (
    <AppContext.Provider value={{ 
      activeMenu,
      setActiveMenu,
      activeSlideMobile,
      setActiveSlideMobile,
    }}>
      {children}
    </AppContext.Provider>
  );
}
const useAppContext = () => useContext(AppContext);
export default useAppContext;