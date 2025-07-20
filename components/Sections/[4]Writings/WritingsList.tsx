"use client";

import { motion } from "framer-motion";
import WritingsRow from "./WritingsRow";
import Image from "next/image";

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
      className={`mb-[16px] flex w-full flex-col gap-[8px] pt-[40px]`}
    >
      <motion.p className="mb-[0px] px-[16px] text-[12px] font-semibold text-subtext md:px-[20px]">
        Case study
      </motion.p>
      {/* <motion.div className="pointer-events-none relative z-10 mb-[-120px] ml-[20px] h-[200px] w-[200px] rotate-6">
        <Image src="/assets/study-case.svg" fill alt="Handwritten study case" />
      </motion.div> */}

      {limit
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
        : posts.map((post: any) => (
            <motion.div key={post.id} className="flex flex-col">
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
          ))}
    </motion.section>
  );
}
