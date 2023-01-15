import { Icon } from "@iconify/react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <a href={project.properties.Href.url} target="_blank">
      <div className="bg-white rounded-full w-10 h-10 shadow-md relative">
        <img
          src={project.properties.Logo.files[0].file.url}
          className="w-8 h-8 left-1 top-1 absolute rounded-full"
        />
      </div>

      <h3 className="font-bold text-lg mt-4">
        {project.properties.Name.title[0].text.content}
      </h3>

      <p className="mt-4 leading-7">
        {project.properties.Description.rich_text[0].text.content}
      </p>

      <a
        href={project.properties.Href.url}
        className="mt-4 flex items-center gap-2 text-zinc-400"
      >
        <Icon icon={"heroicons-solid:link"} />
        <a target="_blank" href={project.properties.Href.url}>
          {project.properties.URL_Placeholder.rich_text[0].text.content}
        </a>
      </a>
    </a>
  );
}
