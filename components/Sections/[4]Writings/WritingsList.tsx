"use client";

import { motion } from "framer-motion";
import WritingsRow from "./WritingsRow";

export default function WritingsList({ posts }: { posts: any[] }) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="mt-[12px] flex flex-col gap-[0px]"
    >
      <motion.p className="mb-[4px] px-[12px] text-[12px] font-semibold text-subtext md:px-[20px]">
        Other studies
      </motion.p>
      {posts.map((post: any) => (
        <motion.div key={post.id}>
          <WritingsRow
            pageUrl={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
            title={post.properties.Name.title[0].plain_text}
            description={post.properties.Description.rich_text[0].plain_text}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
