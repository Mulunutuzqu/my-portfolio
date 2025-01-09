"use client";
import Image from "next/image";
import Feed from "./feed";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const handle = "@taztaz_q";

const blogType = ["all posts", "case studies", "others"];

export default function FeedList({ posts }: { posts: any[] }) {
  const [active, setActive] = useState(blogType[0]);
  const [currentActive, setCurrrentActive] = useState(blogType[0]);

  const [filterBy, setFilterBy] = useState(["Case Study", "Writings"]);

  const handleFilter = (type: string) => {
    switch (type) {
      case "all posts":
        setFilterBy(["Case Study", "Writings"]);
        break;
      case "case studies":
        setFilterBy(["Case Study"]);
        break;
      case "others":
        setFilterBy(["Writings"]);
        break;
    }
  };

  return (
    <>
      <motion.section layout className="flex w-full flex-col">
        <motion.div
          layout
          className="flex w-full gap-[12px] px-[12px] md:px-[20px]"
        >
          <div className="flex h-[144px] flex-col items-center gap-[2px]">
            <div className="pp2 relative flex h-[40px] w-[40px] shrink-0 rotate-[-6deg] flex-col overflow-hidden rounded-[10px] border-[3px] border-white">
              <Image src="/assets/pp.jpg" fill alt="profile picture" />
            </div>
            <div className="flex h-full w-[2px] bg-border" />
          </div>
          <motion.div layout className="flex w-full gap-[8px]">
            <motion.div layout className="flex w-full flex-col gap-[2px]">
              <div className="flex items-center gap-[4px]">
                <p className="flex font-semibold text-maintext">Maulanatazqi</p>
                <p className="text-[14px] font-light text-subtext">{handle}</p>
              </div>
              <p className="mb-[8px] font-light">
                Hi! this is where i put all my case studies and other writings,
                feel free to read!
              </p>
              <motion.div layout className="flex gap-[4px] font-light">
                <p>You can see:</p>
                <motion.ul className="flex gap-[0px]" layout>
                  {blogType.map((type, index) => (
                    <motion.li
                      onMouseEnter={() => setActive(type)}
                      onMouseLeave={() => setActive(currentActive)}
                      key={index}
                      layout
                      className="relative flex cursor-pointer items-center rounded-[6px] px-[6px]"
                      onClick={() => {
                        handleFilter(type), setCurrrentActive(type);
                      }}
                    >
                      <p
                        className={`z-10 ${active === type ? "text-maintext" : "text-subtext"}`}
                      >
                        {type}
                      </p>
                      {active === type ? (
                        <motion.div
                          layoutId="tab-indicator"
                          className="s absolute inset-0 z-0 flex items-end justify-center rounded-[6px] border bg-muted"
                        />
                      ) : null}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <AnimatePresence initial={false}>
          {posts.map(
            (post: any, index) =>
              filterBy.includes(post.properties.Type.select.name) && (
                <Feed
                  key={post.id}
                  title={post.properties.Name.title[0].plain_text}
                  description={
                    post.properties.Description.rich_text[0].plain_text
                  }
                  url={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                  coverURL={post.properties.Cover.rich_text[0].plain_text}
                  video={post.properties.Video.checkbox}
                  type={post.properties.Type.select.name}
                  date={dayjs(post.properties.Date.created_time).format(
                    "DD MMM YYYY ",
                  )}
                />
              ),
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
