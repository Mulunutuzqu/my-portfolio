"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

interface StateProviderProps {
  children: React.ReactNode;
}

type availablePage = "Home" | "Blogs" | "Labs" | string | null;

interface ContextType {
  isLoading: boolean;
  backButton: boolean;
  currentActive: availablePage;
  homeVisited: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setBackButton: (backButton: boolean) => void;
  setCurrentActive: (currentActive: availablePage) => void;
  setHomeVisited: (homeVisited: boolean) => void;
}

const StateContext = createContext<ContextType | undefined>(undefined);

export function StateProvider({ children }: StateProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [currentActive, setCurrentActive] = useState<availablePage>(null);
  const [homeVisited, setHomeVisited] = useState(false);

  const value = {
    isLoading,
    backButton,
    currentActive,
    homeVisited,
    setBackButton,
    setIsLoading,
    setCurrentActive,
    setHomeVisited,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export function useStateProvider(): ContextType {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      "useStateProvider must be used withting a StateContext Provider",
    );
  }
  return context;
}

export type { ContextType };
