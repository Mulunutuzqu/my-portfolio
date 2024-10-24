import { FadeUp } from "@/components/Motions/FadeUp";
import NavStateController from "@/components/Nav/NavStateController";
import Writings from "@/components/Sections/[4]Writings/Writings";
import WritingsRow from "@/components/Sections/[4]Writings/WritingsRow";

import Image from "next/image";

export default function Blog() {
  return (
    <section className="flex w-full flex-col items-center gap-0">
      <NavStateController
        backButton={false}
        loading={false}
        currentActive="Blogs"
      />
      <main className="flex w-full max-w-[360px] flex-col bg-white transition-all duration-300 md:max-w-[460px]">
        <div className="z-10 flex w-full flex-col border-x border-border bg-white">
          <div className="relative flex h-[200px] w-full overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]" />
          </div>
        </div>
      </main>
      <div className="mb-[-24px] mt-[-48px] flex w-full max-w-[360px] border-x px-[12px] md:max-w-[460px] md:px-[20px]">
        <FadeUp
          delay={0}
          duration={0.8}
          className="pointer-events-none relative z-20 flex h-[120px] w-full shrink-0"
        >
          <Image src="/assets/blogs.svg" fill alt="Handwritten author name" />
        </FadeUp>
      </div>
      <FadeUp
        delay={0}
        duration={0.8}
        className="mt-[0px] flex w-full max-w-[720px] flex-col items-center bg-white md:px-[16px]"
      >
        <div className="flex w-full max-w-[360px] flex-col items-center justify-center md:max-w-none md:flex-row md:items-start">
          <div className="relative left-[1px] flex h-fit w-full flex-col justify-start border-x border-t pt-[16px] md:w-1/2">
            <p className="mb-[4px] px-[12px] text-[12px] font-semibold text-subtext md:px-[20px]">
              Case studies
            </p>
            <WritingsRow
              title="test"
              description="test"
              pageUrl="test"
              imageURL="a"
            />
            <WritingsRow
              title="test"
              description="test"
              pageUrl="test"
              imageURL="a"
            />
          </div>
          <div className="flex h-fit w-full border-x border-t bg-white md:w-1/2">
            <Writings />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
