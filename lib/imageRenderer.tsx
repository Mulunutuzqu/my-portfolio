import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

export const imageRenderer = createBlockRenderer<ImageBlockObjectResponse>(
  "image",
  async (data, renderer) => {
    if (!renderer.client) return "";

    const src =
      "file" in data.image ? data.image.file.url : data.image.external.url;
    let width = "";
    let caption = "";
    let noBorder = false;

    if (data.image.caption && data.image.caption.length > 0) {
      const captionText = data.image.caption[0].plain_text;
      const widthMatch = captionText.match(/^\d+$/);
      const noBorderMatch = captionText.match(/^noBorder$/i);

      if (widthMatch) {
        width = `${captionText}px`;
      } else if (noBorderMatch) {
        noBorder = true;
      } else {
        caption = await renderer.render(...data.image.caption);
      }
    }

    const uniqueId = `image-${Math.random().toString(36).substr(2, 9)}`;
    const borderClass = noBorder ? "" : "border";

    return `
      <figure class="notion-${data.type} w-full ${borderClass}" style="margin: 1em 0;border-radius:20px;">
        <div 
          id="container-${uniqueId}"
          data-image-zoom="container"
          data-image-id="${uniqueId}"
          style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            width: 100%;
            transition: transform 0.3s ease;
            transform-origin: center center;
            position: relative;
            z-index: 1;
            cursor: zoom-in;
          "
        >
          <img 
            id="${uniqueId}" 
            src="${src}" 
            alt="" 
            style="
              width: ${width || "100%"}; 
              max-height: 80vh; 
              object-fit: contain;
              display: block;
              border-radius: 20px;
            "
          />
        </div>
        ${caption ? `<legend style="margin-top: 0.5em; text-align: center; width: 100%;">${caption}</legend>` : ""}
      </figure>

      <div 
        id="overlay-${uniqueId}"
        data-image-zoom="overlay"
        data-image-id="${uniqueId}"
        style="
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          z-index: 999;
          cursor: zoom-out;
        "
      ></div>
    `;
  },
);

export default imageRenderer;
