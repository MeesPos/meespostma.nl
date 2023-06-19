import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabaseClient";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount } = req.query;

  let projects: any[] | null = [];

  if (amount) {
    projects = (await supabase.from("projects").select("*").limit(+amount))
      .data;
  } else {
    projects = (await supabase.from("projects").select("*")).data;
  }

  return res.json(projects);
}
