import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectCard({ project }: { project: any }) {
  const router = useRouter();

  return (
    <Link href={JSON.parse(project.url).href} target="_blank">
      <div className="bg-white rounded-full w-10 h-10 shadow-md relative">
        <div className="w-8 h-8 absolute left-1 top-1">
          <Image
            src={project.logo}
            alt={JSON.parse(project.title)[router.locale!]}
            fill={true}
            className="rounded-full"
          />
        </div>
      </div>

      <h3 className="font-bold text-lg mt-4">
        {JSON.parse(project.title)[router.locale!]}
      </h3>

      <p className="mt-4 leading-7">
        {JSON.parse(project.description)[router.locale!]}
      </p>

      <div className="mt-4 flex items-center gap-2 text-zinc-400">
        <Icon icon={"heroicons-solid:link"} />
        <span>{JSON.parse(project.url).placeholder}</span>
      </div>
    </Link>
  );
}
