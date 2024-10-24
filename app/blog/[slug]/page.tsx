import { fetchBySlugs, fetchPageBlocks, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { ComponentType } from "react";

import imageRenderer from "@/lib/CustomRenderer";
import NavStateController from "@/components/Nav/NavStateController";
import "@/app/notionStyle.css";
import { Header } from "../header";
import { Overlay } from "@/components/Overlay/Overlay";
import { FadeUp } from "@/components/Motions/FadeUp";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBySlugs(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
    renderers: [imageRenderer],
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  const customComponentType =
    post.properties.CustomComponentType?.rich_text?.[0]?.plain_text ||
    "Default";

  let DynamicComponent: ComponentType | null = null;
  try {
    DynamicComponent = (await import(`@/components/ui/${customComponentType}`))
      .default;
  } catch (error) {
    console.error(`Error importing component ${customComponentType}:`, error);
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full bg-noise bg-[size:180px] bg-repeat opacity-[0.025]" />
      <FadeUp
        delay={0}
        duration={0.8}
        className="mt-[80px] flex w-full flex-col items-center justify-center gap-[24px] p-[8px]"
      >
        <NavStateController
          backButton={true}
          loading={false}
          currentActive="Blogs"
        />

        <Header />
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
    </>
  );
}
