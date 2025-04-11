import {
  TableOfContentsBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

type HeadingBlock = Heading1BlockObjectResponse | Heading2BlockObjectResponse;

export const tocRenderer =
  createBlockRenderer<TableOfContentsBlockObjectResponse>(
    "table_of_contents",
    async (block, renderer) => {
      if (!renderer.client) return "";

      const parentId =
        block.parent.type === "page_id"
          ? block.parent.page_id
          : block.parent.type === "block_id"
            ? block.parent.block_id
            : null;

      if (!parentId) return "";

      const page = await renderer.client.blocks.children.list({
        block_id: parentId,
      });

      const headings = page.results
        .filter(
          (b): b is HeadingBlock =>
            "type" in b && (b.type === "heading_1" || b.type === "heading_2"),
        )
        .map((b) => {
          const level = parseInt(b.type.slice(-1));
          let text = "";

          switch (b.type) {
            case "heading_1":
              text = b.heading_1.rich_text.map((t) => t.plain_text).join("");
              break;
            case "heading_2":
              text = b.heading_2.rich_text.map((t) => t.plain_text).join("");
              break;
          }

          return { id: b.id, level, text };
        });

      const generateTocHtml = (
        headings: Array<{ id: string; level: number; text: string }>,
      ) => {
        return headings
          .map((heading) => {
            const indentClass = `pl-${(heading.level - 1) * 4}`;
            return `
            <a 
              href="#${heading.id}" 
              class="block toc-link py-1 ${indentClass} w-fit"
            >
              ${heading.text}
            </a>
          `;
          })
          .join("");
      };

      return `
        <nav class="w-full flex my-4 flex-col" aria-label="Table of contents">
          <p class="text-subtext flex gap-[8px]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search">
                <path d="M21 6H3"/>
                <path d="M10 12H3"/>
                <path d="M10 18H3"/>
                <circle cx="17" cy="15" r="3"/>
                <path d="m21 19-1.9-1.9"/>
              </svg>
            </span>
            Table of contents
          </p>
          <div class="w-full flex flex-col gap-[8px] border-b">
            ${generateTocHtml(headings)}
            <div class="h-[12px]" />
          </div>
        </nav>
  
        <style>
          .toc-link {
            color: #64748b !important;
            text-decoration: none !important;
          }
          .toc-link:hover {
            color: #020817;
            text-decoration: underline !important;
          }
          .pl-0 {}
          .pl-4 { padding-left: 1.3rem; }
          .pl-8 { padding-left: 2rem; }
        </style>
      `;
    },
  );

export default tocRenderer;
