import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.json({
    message: "Projects retrieved successfully",
    data: await prisma.projects.findMany(),
  });
}
