"use client";
import { useStateProvider } from "@/app/provider/StateProvider";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

type availablePage = "Home" | "Blogs" | "Labs" | undefined;

interface NavState {
  loading: boolean;
  backButton: boolean;
  currentActive?: availablePage;
}

export default function NavStateController({
  loading,
  backButton,
  currentActive,
}: NavState) {
  const [dep, setDep] = useState(true);
  const { setIsLoading } = useStateProvider();
  const { setBackButton } = useStateProvider();
  const { setCurrentActive } = useStateProvider();

  console.log("Current Active Nav:" + currentActive);

  useEffect(() => {
    setIsLoading(loading),
      setBackButton(backButton),
      currentActive ? setCurrentActive(currentActive) : null;
  }, [setCurrentActive, setBackButton, setIsLoading]);

  return null;
  // (
  //   <div className="flex w-full gap-[24px] px-[20px] py-[16px]">
  //     <Button onClick={() => setIsLoading(true)}>True</Button>
  //     <Button onClick={() => setIsLoading(false)}>False</Button>
  //   </div>
  // );
}
