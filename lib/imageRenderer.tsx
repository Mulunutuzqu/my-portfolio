import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

export const imageRenderer = createBlockRenderer<ImageBlockObjectResponse>(
  "image",
  async (data, renderer) => {
    if (!renderer.client) return "";

    // Get the image source URL
    const src =
      "file" in data.image ? data.image.file.url : data.image.external.url;

    // Extract width from caption if it exists
    let width = "";
    let caption = "";

    if (data.image.caption && data.image.caption.length > 0) {
      // Get the raw text from the caption
      const captionText = data.image.caption[0].plain_text;

      // Check if caption is a number (width in pixels)
      const widthMatch = captionText.match(/^\d+$/);

      if (widthMatch) {
        // If caption is just a number, use it as width
        width = `${captionText}px`;
      } else {
        // If caption is text, render it as a legend

        caption = await renderer.render(...data.image.caption);
      }
    }

    return `
      <figure class="notion-${data.type} w-full ">
        <img src="${src}" alt="" class="" style="width: ${width ? width : `100%`}; height: auto;" />
        ${caption ? `<legend>${caption}</legend>` : ""}
      </figure>
      <style>
    
      </style>
    `;
  },
);

export default imageRenderer;
