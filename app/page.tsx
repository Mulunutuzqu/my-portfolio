import { FadeUp } from "@/components/Motions/FadeUp";
import NavStateController from "@/components/Nav/NavStateController";
import { Overlay } from "@/components/Overlay/Overlay";
import Intro from "@/components/Sections/[1]Intro/Intro";
import About from "@/components/Sections/[2]About/About";
import StudyCase from "@/components/Sections/[3]StudyCase/StudyCase";
import Writings from "@/components/Sections/[4]Writings/Writings";
import OtherWork from "@/components/Sections/[5]OtherWork/OtherWork";
import Labs from "@/components/Sections/[6]Labs/Labs";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />

      <main className="flex w-full max-w-[380px] flex-col bg-white transition-all duration-300 md:max-w-[500px]">
        <div className="pointer-events-none fixed z-0 h-screen w-full max-w-[380px] bg-noise bg-[size:180px] bg-repeat opacity-[0.025] md:max-w-[500px]" />
        <div className="z-10 w-full border-x border-border bg-white">
          <div className="relative flex h-[200px] w-full overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]"></div>
          </div>
          <NavStateController
            backButton={false}
            loading={false}
            currentActive="Home"
          />
          <FadeUp delay={0} duration={0.8} className="flex w-full flex-col">
            <Intro />
            <About />
            <StudyCase />
            <Writings limit={3} icon />
            <OtherWork />
            <Labs />
          </FadeUp>
          <div className="h-[64px]"></div>
        </div>
      </main>
    </>
  );
}
