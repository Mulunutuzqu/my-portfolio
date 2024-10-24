"use client";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/GridPattern";
import Navigation from "@/components/ui/NavigationTest";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import "@/app/notionStyle.css";

export default function Playground() {
  const [isLoading, setIsLoading] = useState(true);
  const [back, setBack] = useState(false);

  return (
    <section className="flex w-full items-center justify-center bg-muted">
      <div className="relative flex h-[640px] w-[800px] items-center justify-center overflow-hidden rounded-[12px] border bg-white py-[64px]">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          strokeDasharray={"2 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)], z-0",
          )}
        />
        <div className="z-10 flex h-full flex-col items-center justify-center">
          <Navigation isLoading={isLoading} back={back} />
          <div className="absolute bottom-[-1px] right-[-1px] flex flex-col gap-[8px] rounded-tl-[8px] border bg-muted p-[12px] font-mono">
            <p className="text-[12px]">
              Mode: {isLoading ? "Loading" : "Expanded"}
            </p>
            <Button
              className="w-fit"
              variant="outline"
              onClick={() => setIsLoading((l) => !l)}
            >
              Toggle Mode
            </Button>
            <div className="flex items-center gap-[8px]">
              <Switch
                checked={back}
                onCheckedChange={() => setBack((b) => !b)}
              />
              <Label htmlFor="airplane-mode">Back</Label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
