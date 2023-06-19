import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabaseClient";

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
    await supabase.from("projects").delete().match({ id: projectId });

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong" });
  }
}
