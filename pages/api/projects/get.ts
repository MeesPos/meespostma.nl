import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount } = req.query;

  let projects = [];

  if (amount) {
    projects = await prisma.projects.findMany({
      take: parseInt(amount as string),
    });
  } else {
    projects = await prisma.projects.findMany();
  }

  return res.json(projects);
}
