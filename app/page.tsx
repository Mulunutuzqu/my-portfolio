import CarouselView from "@/components/carousel/CarouselView";
import CarouselView2 from "@/components/carousel/CarouselView2";
import CarouselView3 from "@/components/carousel/CarouselView3";
import CarouselView4 from "@/components/carousel/CarouselView4";
import CarouselView5 from "@/components/carousel/CarouselView5";
import CarouselView6 from "@/components/carousel/CarouselView6";
import CarouselView7 from "@/components/carousel/CarouselView7";
import { FadeUp } from "@/components/Motions/FadeUp";

import Intro from "@/components/Sections/[1]Intro/Intro";
import About from "@/components/Sections/[2]About/About";

import Writings from "@/components/Sections/[4]Writings/Writings";
import OtherWork from "@/components/Sections/[5]OtherWork/OtherWork";

export default function Home() {
  return (
    <>
      {/* <NavStateController backButton={true} /> */}
      <div className="bg- pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.03]" />
      <main className="relative flex min-h-screen w-full flex-col transition-all duration-300">
        <div className="pointer-events-none fixed z-0 h-screen w-full" />
        <div className="z-10 w-full rounded-[28px]">
          {/* <div className="relative flex h-[200px] w-full overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]"></div>
          </div> */}
          {/* <NavStateController backButton={false} loading={false} /> */}
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center"
            once
          >
            <Intro />
          </FadeUp>
          {/* <About /> */}
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once
          >
            <Writings icon={false} />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView6 />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView5 />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView4 />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView7 />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView2 />
          </FadeUp>
          <FadeUp
            delay={0}
            duration={0.8}
            className="flex w-full flex-col items-center justify-center"
            once={false}
          >
            <CarouselView3 />
            <div className="flex w-full max-w-[600px] p-[16px] md:p-[0px]">
              <p className="my-[32px] text-[24px] font-semibold text-gray-300 md:text-[40px]">
                I hate footer lol
              </p>
            </div>
          </FadeUp>
          {/* <OtherWork /> */}

          <div className="h-[64px]"></div>
        </div>
      </main>
    </>
  );
}
