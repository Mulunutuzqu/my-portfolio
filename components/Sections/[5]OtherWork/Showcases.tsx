"use client";

import Image from "next/image";

import Divider from "@/components/ui/Divider";

import SnippetVaul from "./SnippetVaul";
import SnippetItem from "./SnippetItem";
import SnippetVaul2 from "./SnippetVaul2";

export default function Showcases() {
  return (
    <>
      <section className="mb-[8px] flex w-full items-start gap-[20px] px-[16px] py-[16px] md:px-[20px]">
        <div className="z-0 flex w-full flex-col">
          <p className="mb-[12px] text-[12px] font-semibold text-subtext">
            Showcases
          </p>

          <div className="columns-2 gap-4">
            <div className="flex h-[128px] w-full bg-muted"></div>
            <div className="flex h-[128px] w-full bg-muted"></div>
          </div>
        </div>
      </section>
    </>
  );
}
