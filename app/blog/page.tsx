import { FadeUp } from "@/components/Motions/FadeUp";
import NavStateController from "@/components/Nav/NavStateController";
import Writings from "@/components/Sections/[4]Writings/Writings";
import WritingsRow from "@/components/Sections/[4]Writings/WritingsRow";

import Image from "next/image";
import Feed from "./feeds/feed";
import FeedList from "./feeds/feed-list";
import Feeds from "./feeds";

export default function Blog() {
  return (
    <section className="flex w-full flex-col items-center gap-0">
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />
      <NavStateController
        backButton={false}
        loading={false}
        currentActive="Blogs"
      />
      <main className="flex w-full max-w-[360px] flex-col bg-white transition-all duration-300 md:max-w-[500px]">
        <div className="z-10 flex w-full flex-col border-x bg-white">
          <div className="relative flex h-[200px] w-full overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]" />
          </div>
          <FadeUp
            delay={0}
            duration={0.8}
            className="z-20 flex w-full shrink-0 flex-col gap-[24px]"
          >
            <div className="relative mt-[-40px] flex h-[128px] w-full shrink-0">
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
