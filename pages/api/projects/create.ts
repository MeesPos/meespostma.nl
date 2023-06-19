import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../types/project.interface";
import Validator from "validatorjs";
import { supabase } from "../../../lib/supabaseClient";

export default async function CreateProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const project: Project = req.body;

  const validator = new Validator(project, {
    title: {
      nl: "required|string",
      en: "required|string",
    },
    description: {
      nl: "required|string",
      en: "required|string",
    },
    url: {
      href: "required|string",
      placeholder: "required|string",
    },
    logo: "required|string",
  });

  if (validator.fails()) {
    return res.status(422).json({
      message: "Validation failed",
      errors: validator.errors.all(),
    });
  }

  try {
    const { data, error } = await supabase.from("projects").insert({
      title: JSON.stringify(project.title),
      description: JSON.stringify(project.description),
      url: JSON.stringify(project.url),
      logo: String(project.logo),
    });

    console.log(data, error);

    res.status(200).json({ message: "Project created successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong" });
  }
}
