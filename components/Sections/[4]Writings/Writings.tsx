import { fetchCasePages } from "@/lib/notion";
import WritingsList from "./WritingsList";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function Writings({
  limit,
  icon,
}: {
  limit?: number;
  icon: boolean;
}) {
  const posts = await fetchCasePages();

  return (
    <div className="flex w-full max-w-[980px] flex-col gap-[0px] bg-white">
      <WritingsList posts={posts.results} limit={limit} icon={icon} />
      {limit ? (
        <Link
          href="/blog"
          className="mt-[-4px] flex w-full items-center justify-center px-[20px] text-[14px] font-semibold text-maintext md:px-[32px]"
        >
          <p className="flex items-center justify-center gap-[2px] rounded-[4px] px-[8px] py-[6px] text-primary transition-colors hover:bg-muted">
            See all posts
            <ArrowUpRight size={18} />
          </p>
        </Link>
      ) : null}
    </div>
  );
}
