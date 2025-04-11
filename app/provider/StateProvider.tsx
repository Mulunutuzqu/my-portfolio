"use client";
import { createContext, useContext, useState, useCallback } from "react";

interface StateProviderProps {
  children: React.ReactNode;
}

type availablePage = "Home" | "Blogs" | "Labs" | string | null;

interface ContextType {
  isLoading: boolean;
  backButton: boolean;
  currentActive: availablePage;
  homeVisited: boolean;
  isDrawerOpen: boolean;
  activeDrawerUrl: string; // Add this new property
  setIsLoading: (isLoading: boolean) => void;
  setBackButton: (backButton: boolean) => void;
  setCurrentActive: (currentActive: availablePage) => void;
  setHomeVisited: (homeVisited: boolean) => void;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  openDrawerWithImage: (urlFull: string) => void; // Add this new function
}

const StateContext = createContext<ContextType | undefined>(undefined);

export function StateProvider({ children }: StateProviderProps) {
  const [isLoading, _setIsLoading] = useState(false);
  const [backButton, _setBackButton] = useState(false);
  const [currentActive, _setCurrentActive] = useState<availablePage>(null);
  const [homeVisited, _setHomeVisited] = useState(false);
  const [isDrawerOpen, _setIsDrawerOpen] = useState(false);
  const [activeDrawerUrl, _setActiveDrawerUrl] = useState(""); // Add this state

  // Create stable setter functions
  const setIsLoading = useCallback((value: boolean) => {
    _setIsLoading(value);
  }, []);

  const setBackButton = useCallback((value: boolean) => {
    _setBackButton(value);
  }, []);

  const setCurrentActive = useCallback((value: availablePage) => {
    _setCurrentActive(value);
  }, []);

  const setHomeVisited = useCallback((value: boolean) => {
    _setHomeVisited(value);
  }, []);

  const setIsDrawerOpen = useCallback((value: boolean) => {
    _setIsDrawerOpen(value);
  }, []);

  // Add the new function
  const openDrawerWithImage = useCallback((urlFull: string) => {
    _setActiveDrawerUrl(urlFull);
    _setIsDrawerOpen(true);
  }, []);

  // Context value will only change when state actually changes
  const value = {
    isLoading,
    backButton,
    currentActive,
    homeVisited,
    isDrawerOpen,
    activeDrawerUrl,
    setIsLoading,
    setBackButton,
    setCurrentActive,
    setHomeVisited,
    setIsDrawerOpen,
    openDrawerWithImage,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export function useStateProvider(): ContextType {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      "useStateProvider must be used within a StateContext Provider",
    );
  }
  return context;
}

export type { ContextType };
