import { FadeUp } from "@/components/Motions/FadeUp";
import Image from "next/image";
import Feeds from "./feeds";

export default function Blog() {
  return (
    <section className="flex w-full flex-col items-center gap-0">
      <div className="pointer-events-none fixed inset-0 z-[0] h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />
      {/* <NavStateController backButton={false} loading={false} /> */}

      <main className="relative flex min-h-screen w-full max-w-[420px] flex-col transition-all duration-300 md:max-w-[580px]">
        <div className="pointer-events-none fixed z-0 h-screen w-full max-w-[420px] md:max-w-[580px]" />
        <div className="mt-[40px] w-full rounded-[28px]">
          {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]" />
          </div> */}
          <FadeUp
            delay={0}
            duration={0.8}
            className="z-20 flex w-full shrink-0 flex-col gap-[24px]"
          >
            <div className="relative mt-[72px] flex h-[134px] w-full shrink-0">
              <Image
                src="/assets/blogs.svg"
                fill
                alt="Handwritten author name"
                className="px-[12px] md:px-[20px]"
              />
            </div>
            <Feeds />
          </FadeUp>
        </div>
      </main>
    </section>
  );
}
