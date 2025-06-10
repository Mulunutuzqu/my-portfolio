import "server-only";
import { Client } from "@notionhq/client";
import React from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
  DatePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: [Redacted],
});

// Define custom interface for your page properties
interface NotionPageProperties {
  Name: {
    type: "title";
    title: Array<RichTextItemResponse>;
    id: string;
  };
  Date: {
    type: "created_time";
    created_time: string;
    id: string;
  };
  Description: {
    type: "rich_text";
    rich_text: Array<RichTextItemResponse>;
    id: string;
  };
  Role: {
    type: "rich_text";
    rich_text: Array<RichTextItemResponse>;
    id: string;
  };
  Scope: {
    type: "rich_text";
    rich_text: Array<RichTextItemResponse>;
    id: string;
  };
  Cover: {
    type: "rich_text";
    rich_text: Array<RichTextItemResponse>;
    id: string;
  };
  Video: {
    type: "checkbox";
    checkbox: boolean;
    id: string;
  };
  Status: {
    type: "status";
    status: {
      id: string;
      name: string;
      color: string;
    } | null;
    id: string;
  };
  Type: {
    type: "select";
    select: {
      id: string;
      name: string;
      color: string;
    } | null;
    id: string;
  };
  Slug: {
    type: "rich_text";
    rich_text: Array<RichTextItemResponse>;
    id: string;
  };
}

export const fetchAllPages = React.cache(() => {
  return notion.databases.query({
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
});

export const fetchCasePages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Case Study",
          },
        },
      ],
    },
  });
});

export const fetchBitePages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Writings",
          },
        },
      ],
    },
  });
});

export const fetchBySlugs = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then(
      (res) =>
        res.results[0] as PageObjectResponse & {
          properties: NotionPageProperties;
        },
    );
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});
