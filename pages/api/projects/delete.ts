import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function DeleteProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectId = req.body.id;

  if (!projectId) {
    return res.status(422).json({
      message: "Validation failed",
      errors: "No project id provided",
    });
  }

  try {
    await prisma.projects.delete({
      where: {
        id: Number(projectId),
      },
    });

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong" });
  }
}
