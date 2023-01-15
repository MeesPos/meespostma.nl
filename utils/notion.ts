import { Client } from "@notionhq/client";
import type { NextApiResponse, NextApiRequest } from "next";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_INTEGRATION_TOKEN,
});

export async function getProjects(page_size?: number | undefined) {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
    page_size: page_size,
  });

  return response.results;
}
