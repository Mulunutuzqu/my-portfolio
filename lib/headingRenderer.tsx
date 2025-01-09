import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { createBlockRenderer } from "@notion-render/client";

export const heading1Renderer =
  createBlockRenderer<Heading1BlockObjectResponse>(
    "heading_1",
    async (data, renderer) => {
      let result = `
        <h1 id="${data.id}" class="notion-${data.type} notion-color-${data.heading_1.color}">
          ${await renderer.render(...data.heading_1.rich_text)}
        </h1>
      `;

      if (
        renderer.client &&
        "is_toggleable" in data.heading_1 &&
        data.has_children &&
        data.heading_1.is_toggleable
      ) {
        result = `
          <details class="notion-toggle-${data.type} notion-color-${data.heading_1.color}">
            <summary>${result}</summary>
            ${await renderer.renderBlock(data.id)}
          </details>
        `;
      }
      return result;
    },
  );

export const heading2Renderer =
  createBlockRenderer<Heading2BlockObjectResponse>(
    "heading_2",
    async (data, renderer) => {
      let result = `
        <h2 id="${data.id}" class="notion-${data.type} notion-color-${data.heading_2.color}">
          ${await renderer.render(...data.heading_2.rich_text)}
        </h2>
      `;

      if (
        renderer.client &&
        "is_toggleable" in data.heading_2 &&
        data.has_children &&
        data.heading_2.is_toggleable
      ) {
        result = `
          <details class="notion-toggle-${data.type} notion-color-${data.heading_2.color}">
            <summary>${result}</summary>
            ${await renderer.renderBlock(data.id)}
          </details>
        `;
      }
      return result;
    },
  );

export const heading3Renderer =
  createBlockRenderer<Heading3BlockObjectResponse>(
    "heading_3",
    async (data, renderer) => {
      let result = `
        <h3 id="${data.id}" class="notion-${data.type} notion-color-${data.heading_3.color} heading-3">
          ${await renderer.render(...data.heading_3.rich_text)}
        </h3>
       
      `;

      if (
        renderer.client &&
        "is_toggleable" in data.heading_3 &&
        data.has_children &&
        data.heading_3.is_toggleable
      ) {
        result = `
          <details class="notion-toggle-${data.type} notion-color-${data.heading_3.color}">
            <summary>${result}</summary>
            ${await renderer.renderBlock(data.id)}
          </details>
          
        `;
      }
      return result;
    },
  );

export const headingRenderers = [
  heading1Renderer,
  heading2Renderer,
  heading3Renderer,
];
export default headingRenderers;
