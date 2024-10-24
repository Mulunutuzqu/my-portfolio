import NavStateController from "@/components/Nav/NavStateController";

export default function Loading() {
  return (
    <>
      <main className="flex w-full max-w-[360px] flex-col bg-white transition-all duration-300 md:max-w-[460px]">
        <div className="z-10 min-h-screen w-full border-x border-border bg-white">
          <NavStateController backButton={false} loading={true} />
        </div>
      </main>
    </>
  );
}
