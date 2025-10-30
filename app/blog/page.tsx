import { FadeUp } from "@/components/Motions/FadeUp";
import Image from "next/image";
import Feeds from "./feeds";

export default function Blog() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="pointer-events-none fixed inset-0 z-[0] h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.015]" />

      <main className="relative flex min-h-screen w-full max-w-[680px] flex-col px-[20px] transition-all duration-300 md:px-[40px]">
        <FadeUp
          delay={0}
          duration={0.8}
          className="z-20 flex w-full shrink-0 flex-col"
        >
          <div className="relative mt-[120px] mb-[64px] flex h-[96px] w-full shrink-0 items-center justify-center">
            <Image
              src="/assets/blogs.svg"
              fill
              alt="Handwritten author name"
              className="object-contain"
            />
          </div>
          <Feeds />
        </FadeUp>
      </main>
    </section>
  );
}
