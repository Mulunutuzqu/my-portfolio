import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

const imageRenderer = createBlockRenderer<ImageBlockObjectResponse>(
  "image",
  async (block) => {
    const src =
      block.image.type === "external"
        ? block.image.external.url
        : block.image.file.url;
    const caption =
      block.image.caption.length > 0 ? block.image.caption[0].plain_text : "";

    return `
      <figure>
        <img
          src="${src}"
          alt="${caption || "Notion image"}"
          style="width: 100%; height: auto;aspect-ratio: 3/2; object-fit: contain;"
          loading="lazy"
          class="notion-custom-image"
          role="presentation"
          decoding="async"
          fetchpriority="high"
        />
        ${caption ? `<figcaption>${caption}</figcaption>` : ""}
      </figure>
    `;
  },
);

export default imageRenderer;
