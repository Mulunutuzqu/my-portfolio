import { Skeleton } from "@/components/ui/skeleton";
export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-[24px]">
      <Skeleton className="h-[280px] w-full" />
      <Skeleton className="h-[24px] w-full" />
    </div>
  );
}
