"use client";
import Image from "next/image";
import GridPattern from "../../ui/GridPattern";
import { cn } from "@/lib/utils";

export default function Labs() {
  return (
    <>
      <section className="mt-[24px] flex flex-col gap-[8px] px-[12px] py-[20px] md:px-[20px]">
        <div className="flex w-full flex-col gap-[8px]">
          <div className="z-20 mb-[-24px] flex gap-[20px]">
            <Image
              src="/assets/ui-labs.svg"
              width={148}
              height={84}
              alt="Handwritten study case"
            />
            <p className="mt-[16px] text-[14px] text-subtext">
              My interaction design laboratory for fun and future projects
            </p>
          </div>
          <div className="relative flex h-[156px] w-full items-center justify-center overflow-hidden rounded-[12px] border">
            <GridPattern
              width={32}
              height={32}
              x={-1}
              y={-1}
              strokeDasharray={"2 2"}
              className={cn(
                "[mask-image:radial-gradient(240px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
          <div>
            <p>Some components name</p>
            <p>some description</p>
          </div>
        </div>
      </section>
    </>
  );
}
