"use client";

import { motion } from "framer-motion";
import WritingsRow from "./WritingsRow";
import Image from "next/image";
import Divider from "@/components/ui/Divider";

export default function WritingsList({
  posts,
  limit,
  icon,
}: {
  posts: any[];
  limit?: number;
  icon: boolean;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      className={`mb-[0px] flex w-full flex-col gap-[0px] pt-[0px]`}
    >
      <Divider />

      <motion.p className="flex w-full border-x bg-muted px-[16px] py-[8px] text-[12px] font-semibold text-subtext md:px-[20px]">
        Case study
      </motion.p>

      <Divider />

      <div className="grid grid-cols-1 gap-0 border border-b-0 border-t-0 md:grid-cols-2">
        {/* {limit
          ? posts.slice(0, limit).map((post: any) => (
              <motion.div key={post.id} className="flex w-full gap-[0px]">
                <WritingsRow
                  icon={false}
                  pageUrl={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                  title={post.properties.Name.title[0].plain_text}
                  description={
                    post.properties.Description.rich_text[0].plain_text
                  }
                  coverURL={post.properties.Cover.rich_text[0].plain_text}
                  video={post.properties.Video.checkbox}
                  overview={post.properties.Overview.rich_text[0].plain_text}
                  role={post.properties.Role.rich_text[0].plain_text}
                  scope={post.properties.Scope.rich_text[0].plain_text}
                />
              </motion.div>
            ))
          :  */}
        {posts.map((post: any, index: number) => {
          const isLast = index === posts.length - 1;
          const isFirstRow = index < 2;
          return (
            <motion.div
              key={post.id}
              className={`flex flex-col ${index % 2 === 0 ? "border-r border-border" : ""} ${isFirstRow ? "border-b border-border" : ""}`}
            >
              <WritingsRow
                icon={false}
                last={isLast}
                pageUrl={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                title={post.properties.Name.title[0].plain_text}
                description={
                  post.properties.Description.rich_text[0].plain_text
                }
                coverURL={post.properties.Cover.rich_text[0].plain_text}
                video={post.properties.Video.checkbox}
                overview={post.properties.Overview.rich_text[0].plain_text}
                role={post.properties.Role.rich_text[0].plain_text}
                scope={post.properties.Scope.rich_text[0].plain_text}
              />
            </motion.div>
          );
        })}
        <div className="z-20 hidden h-full w-full items-center justify-center text-subtext md:flex">
          <p className="flex w-full justify-center rounded border border-x-0 border-dashed px-[12px] py-[8px]">
            👀 Coming soon!
          </p>
        </div>
      </div>
      <Divider />
    </motion.section>
  );
}
