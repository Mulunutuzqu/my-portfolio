import { FadeUp } from "@/components/Motions/FadeUp";
import NavStateController from "@/components/Nav/NavStateController";
import { BlogSkeleton } from "@/components/Skeletons/Blog";

export default function Loading() {
  return (
    <>
      {/* <NavStateController backButton={true} loading={true} /> */}
      <div className="flex w-full flex-col items-center">
        <main className="flex w-full max-w-[360px] flex-col bg-white transition-all duration-300 md:max-w-[500px]">
          <div className="z-10 flex w-full flex-col border-x border-border bg-white">
            <div className="relative flex h-[200px] w-full overflow-hidden">
              <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]" />
            </div>
          </div>
        </main>

        <FadeUp
          className="mt-[-8px] flex w-full flex-col items-center gap-[24px] p-[8px]"
          delay={0}
          duration={0.8}
          once
        >
          <BlogSkeleton />
        </FadeUp>
      </div>
    </>
  );
}
