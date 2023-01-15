import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={project.properties.Href.url} target="_blank">
      <div className="bg-white rounded-full w-10 h-10 shadow-md relative">
        <div className="w-8 h-8 absolute left-1 top-1">
          <Image
            src={project.properties.Logo.files[0].file.url}
            alt={project.properties.Name.title[0].text.content}
            fill={true}
            className="rounded-full"
          />
        </div>
      </div>

      <h3 className="font-bold text-lg mt-4">
        {project.properties.Name.title[0].text.content}
      </h3>

      <p className="mt-4 leading-7">
        {project.properties.Description.rich_text[0].text.content}
      </p>

      <div className="mt-4 flex items-center gap-2 text-zinc-400">
        <Icon icon={"heroicons-solid:link"} />
        <span>
          {project.properties.URL_Placeholder.rich_text[0].text.content}
        </span>
      </div>
    </Link>
  );
}
