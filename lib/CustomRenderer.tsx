import {
  ImageBlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

export const imageRenderer = createBlockRenderer<ImageBlockObjectResponse>(
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

export const toggleRenderer = createBlockRenderer<ToggleBlockObjectResponse>(
  "toggle",
  async (block, renderer) => {
    if (!renderer.client) return "";

    return `
    <div class="flex w-full notion-toggle-container">
      <label class="hover:bg-muted w-full font-sans notion-toggle cursor-pointer py-[8px] px-[16px] border rounded-sm" for="toggle-${block.id}">
        <input 
          type="checkbox" 
          id="toggle-${block.id}" 
          class="notion-toggle-input"
          aria-expanded="false"
        />
        <div 
          class="notion-toggle-header select-none font-medium notion-${block.type} notion-color-${block.toggle.color}"
          role="button"
          aria-controls="content-${block.id}"
        >
          ${await renderer.render(...block.toggle.rich_text)}
        </div>
        <div 
          id="content-${block.id}" 
          class="notion-toggle-content w-full flex flex-col"
          role="region"
          aria-labelledby="toggle-${block.id}"
        >
          ${block.has_children ? await renderer.renderBlock(block.id) : ""}
        </div>
      </label>
      </div>

      <style>
      .notion-toggle-container {
        margin-bottom: 8px;
        margin-top: 8px;
      }

      .notion-toggle {
        display: block;
      }

      .notion-toggle-input {
        display: none;
      }

      .notion-toggle-header {
        position: relative;
        padding: 3px 0;
        padding-left: 26px;
        line-height: 1.5;
      }

      .notion-toggle-header::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgb(55, 53, 47);
      }

      .notion-toggle-content {
        overflow: hidden;
        display: none;
        padding-left: 24px;
      }

      .notion-toggle-input:checked + .notion-toggle-header::before {
        transform: translateY(-50%) rotate(0);
      }

      .notion-toggle-input:checked ~ .notion-toggle-content {
        display: block;
        padding-top: 6px;
        padding-bottom: 6px;
      }
      </style>
    `;
  },
);

export const customRenderers = [imageRenderer, toggleRenderer];

export default customRenderers;
