import { Client, LogLevel } from "@notionhq/client";
import type { NextApiResponse, NextApiRequest } from "next";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_INTEGRATION_TOKEN,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
  });

  res.status(200).json(response);
}
