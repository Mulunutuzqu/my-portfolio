import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeleton() {
  return (
    <>
      <section className="flex w-full max-w-[720px] justify-center overflow-hidden rounded-[4px] bg-gradient-to-b from-[#eef2f6] to-white p-[1px]">
        <div className="flex w-full flex-col items-center justify-start gap-[24px] overflow-hidden rounded-[4px] bg-white p-[8px] md:p-[24px]">
          <div className="mt-[24px] flex w-full flex-col items-center gap-[8px]">
            <Skeleton className="h-[24px] w-[24px] rounded-sm" />
            <Skeleton className="h-[20px] w-[80px]" />
          </div>
          <Skeleton className="notion-max-w h-[96px] w-full" />
          <Skeleton className="notion-max-w h-[42px] w-full" />
          <Skeleton className="h-[320px] w-full" />
        </div>
      </section>
    </>
  );
}
