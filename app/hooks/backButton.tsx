"use client";
import { useStateProvider } from "@/app/provider/StateProvider";
import { useEffect } from "react";

/**
 * Hook to control navigation state
 * @param backButton - boolean to control back button visibility
 */
export default function useNavState(backButton: boolean = false) {
  const { setBackButton } = useStateProvider();

  useEffect(() => {
    setBackButton(backButton);
    return () => setBackButton(false);
  }, [backButton, setBackButton]);
}
