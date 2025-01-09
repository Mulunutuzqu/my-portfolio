"use client";

import { motion } from "framer-motion";
import WritingsRow from "./WritingsRow";

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
      className={`mt-[12px] flex h-[232px] flex-col gap-[0px]`}
    >
      <motion.p className="mb-[4px] px-[12px] text-[12px] font-semibold text-subtext md:px-[20px]">
        Other studies
      </motion.p>

      {limit
        ? posts.slice(0, limit).map((post: any) => (
            <motion.div key={post.id}>
              <WritingsRow
                icon={icon}
                pageUrl={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                title={post.properties.Name.title[0].plain_text}
                description={
                  post.properties.Description.rich_text[0].plain_text
                }
              />
            </motion.div>
          ))
        : posts.map((post: any) => (
            <motion.div key={post.id}>
              <WritingsRow
                icon={icon}
                pageUrl={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                title={post.properties.Name.title[0].plain_text}
                description={
                  post.properties.Description.rich_text[0].plain_text
                }
              />
            </motion.div>
          ))}
    </motion.section>
  );
}
