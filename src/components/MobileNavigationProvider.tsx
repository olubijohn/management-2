"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MobileNavigationContextType {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileNavigationContext = createContext<MobileNavigationContextType | undefined>(undefined);

export function useMobileNavigation() {
  const context = useContext(MobileNavigationContext);
  if (context === undefined) {
    throw new Error("useMobileNavigation must be used within a MobileNavigationProvider");
  }
  return context;
}

interface MobileNavigationProviderProps {
  children: ReactNode;
}

export default function MobileNavigationProvider({ children }: MobileNavigationProviderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MobileNavigationContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }}>
      {children}
    </MobileNavigationContext.Provider>
  );
}
