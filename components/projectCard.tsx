import Project from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <a href={project.url.href} target="_blank">
        <div className="bg-white rounded-full w-10 h-10 shadow-md relative">
          <img
            src={project.logo}
            className="w-8 h-8 left-1 top-1 absolute rounded-full"
          />
        </div>

        <h3 className="font-bold text-lg mt-4">project.name</h3>

        <p className="mt-4 leading-7">project.description[locale]</p>

        <a
          href={project.url.href}
          className="mt-4 flex items-center gap-2 text-zinc-400"
        >
          {/* <Icon name="heroicons-solid:link" /> */}
          <a target="_blank" href={project.url.href}>
            project.url.placeholder
          </a>
        </a>
      </a>
    </div>
  );
}
