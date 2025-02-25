"use client"
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext<{ sticky: boolean; setSticky: (sticky: boolean) => void } | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sticky, setSticky] = useState(true);

  return (
    <NavbarContext.Provider value={{ sticky, setSticky }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};