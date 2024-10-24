"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookMarked, ChevronRight, CircleX } from "lucide-react";
import { Drawer } from "vaul";
import Divider from "./Divider";
import "@/app/notionStyle.css";

interface CaseRowProps {
  title: string;
  description: string;
  content: string;
}

function CaseCard({ title, description, content }: CaseRowProps) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            y: 2,
            boxShadow: [
              "0px 9px 3px rgba(105, 117, 134, 0)",
              "0px 6px 2px rgba(105, 117, 134, 0.01)",
              "0px 3px 2px rgba(105, 117, 134, 0.05)",
              "0px 1px 1px rgba(105, 117, 134, 0.09)",
              "0px 0px 1px rgba(105, 117, 134, 0.1)",
            ].join(", "),
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          className="flex cursor-pointer gap-[8px] border-b border-border px-[12px] py-[12px] text-maintext hover:border-0 hover:bg-subtle md:px-[20px]"
        >
          <BookMarked className="shrink-0 text-maintext" size={20} />
          <div className="flex flex-col gap-[4px]">
            <p className="line-clamp-1 text-[14px] font-semibold leading-snug">
              {title}
            </p>
            <p className="line-clamp-1 text-[12px] text-subtext">
              {description}
            </p>
          </div>
        </motion.div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-slate-900/10" />
        <Drawer.Content className="sheet-shadow sheet fixed inset-x-0 bottom-0 z-50 mx-auto flex h-fit max-h-[96vh] max-w-[720px] flex-col outline-none">
          <div className="fixed top-0 w-full flex-col bg-white">
            <Divider />
            <div className="flex h-[48px] flex-col justify-center">
              <div className="flex h-full w-full items-center justify-between px-[16px]">
                <Drawer.Title className="text-[16px] font-bold">
                  <div className="flex items-center gap-[4px]">
                    <BookMarked className="shrink-0 text-subtext" size={20} />
                    <p className="line-clamp-1 text-[14px] font-semibold text-subtext">
                      Study Case
                    </p>
                    <ChevronRight size={20} />
                    <p className="line-clamp-1 text-[14px] font-semibold text-subtext">
                      {title}
                    </p>
                  </div>
                </Drawer.Title>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 0.98,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <Drawer.Close className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border bg-white hover:bg-muted">
                    <CircleX size={24} className="text-maintext" />
                  </Drawer.Close>
                </motion.div>
              </div>
            </div>
            <Divider />
          </div>
          <div className="flex-1 overflow-y-auto bg-subtle">
            <div className="mx-auto mt-[40px] w-full rounded-[12px] px-[40px] py-[24px]">
              <div
                className="notion-render"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
          <Divider />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default CaseCard;
