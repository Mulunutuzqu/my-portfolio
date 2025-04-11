"use client";
import TextFocus from "@/components/Motions/TextFocus";
import Image from "next/image";

export function Manifesto() {
  return (
    <>
      <section className="my-[20px] flex w-full flex-col gap-2 p-[16px] md:p-[20px]">
        <p className="text-[12px] font-semibold text-subtext">
          My approach to design
        </p>
        <div className="flex w-full flex-col justify-start gap-[20px] italic">
          <div className="w-full text-[14px] leading-8 text-subtext">
            I focus on translating <b>abstract vision into tangible value </b> —
            working closely with stakeholders to clarify their strategic
            direction while conducting in-depth user research to reveal genuine{" "}
            <TextFocus />
          </div>
          <div className="w-full text-[14px] leading-8 text-subtext">
            This dual perspective allows me to challenge assumptions, establish
            meaningful priorities, and drive iteration cycle through rapid
            prototyping.
          </div>
          <div className="w-full text-[14px] leading-8 text-subtext">
            My methodology is comprehensive—seamlessly weaving{" "}
            <b>functionality</b> (how it serves), <b>aesthethics</b> (how it
            resonates),
            <b> engineering</b> (how it scales), and {""}
            <b>business impact</b> (how it converts)."
          </div>
        </div>
      </section>
    </>
  );
}
