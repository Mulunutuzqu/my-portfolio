import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

export const calloutRenderer = createBlockRenderer<CalloutBlockObjectResponse>(
  "callout",
  async (data, renderer) => {
    if (!renderer.client) return "";

    const iconHtml = data.callout.icon
      ? `<div class="icon">${await renderer.render(data.callout.icon)}</div>`
      : "";

    // Render the initial rich text
    const initialContent = await renderer.render(...data.callout.rich_text);

    // Render any child blocks if they exist
    const childContent = data.has_children
      ? await renderer.renderBlock(data.id)
      : "";

    return `
      <blockquote class="notion-${data.type} notion-color-${data.callout.color}">
        ${iconHtml}
        <div class="content flex flex-col gap-[8px]">
        <div>
          ${initialContent}
          </div>
          ${childContent}
        </div>
      </blockquote>
      <style>
        .content > p{
            margin: 0px;
            padding: 0px
            
        }
      </style>
    `;
  },
);

export default calloutRenderer;
