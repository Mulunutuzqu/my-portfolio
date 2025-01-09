import { fetchBySlugs, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { ComponentType } from "react";

import { toggleRenderer } from "@/lib/CustomRenderer";
import tocRenderer from "@/lib/tocRenderer";
import {
  heading1Renderer,
  heading2Renderer,
  heading3Renderer,
} from "@/lib/headingRenderer";
import calloutRenderer from "@/lib/calloutRenderer";
import imageRenderer from "@/lib/imageRenderer";
import NavStateController from "@/components/Nav/NavStateController";
import "@/app/notionStyle.css";
import { Header } from "../header";
import { Overlay } from "@/components/Overlay/Overlay";
import { FadeUp } from "@/components/Motions/FadeUp";
import Image from "next/image";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
      ],
    },
  });

  return response.results.map((page) => {
    const typedPage = page as PageObjectResponse;
    const slugProperty = typedPage.properties.Slug as {
      type: "rich_text";
      rich_text: Array<{
        type: "text";
        text: { content: string };
        plain_text: string;
      }>;
    };

    return {
      slug: slugProperty.rich_text[0].plain_text,
    };
  });
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await fetchBySlugs(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
    renderers: [
      toggleRenderer,
      tocRenderer,
      heading1Renderer,
      heading2Renderer,
      calloutRenderer,
      imageRenderer,
    ],
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  console.table(post.properties.Date);

  return (
    <div className="flex w-full flex-col items-center scroll-smooth">
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />
      <div className="z-10 flex w-full flex-col items-center">
        <main className="flex w-full max-w-[360px] flex-col bg-white transition-all duration-300 md:max-w-[500px]">
          <div className="z-10 flex w-full flex-col border-x border-border bg-white">
            <div className="relative flex h-[200px] w-full overflow-hidden">
              <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#E3E8EF_1px,transparent_1px)] [background-size:18px_18px]" />
            </div>
          </div>
        </main>
      </div>
      <FadeUp
        delay={0}
        duration={0.8}
        className="z-10 mt-[-8px] flex w-full flex-col items-center justify-center gap-[24px] bg-white"
      >
        <NavStateController
          backButton={true}
          loading={false}
          currentActive="Blogs"
        />

        <Header
          video={post.properties.Video.checkbox}
          title={post.properties.Name.title[0].plain_text}
          description={post.properties.Description.rich_text[0].plain_text}
          url={post.properties.Cover.rich_text[0].plain_text}
        />
        <div
          className="notion-render notion-max-w mt-[-24px] w-full place-self-center p-[8px] md:p-[0px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* <div>
          {DynamicComponent ? (
            <DynamicComponent />
          ) : (
            <div>Failed to load component: {customComponentType}</div>
          )}
        </div> */}
      </FadeUp>
    </div>
  );
}
