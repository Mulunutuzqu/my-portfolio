"use client";
import { useStateProvider } from "@/app/provider/StateProvider";
import { useEffect } from "react";

interface NavState {
  backButton: boolean;
}

export default function NavStateController({ backButton }: NavState) {
  const { setBackButton } = useStateProvider();

  useEffect(() => {
    setBackButton(backButton);
    return () => setBackButton(false);
  }, [backButton, setBackButton]);

  return null;
}
