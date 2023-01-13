import Image from "next/image";
import Button from "../components/button";
import DefaultLayout from "../layouts/default";
import { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";

export default function Home() {
  const [projects, setProjects] = useState<Array<any>>([]);

  useEffect(() => {
    async function getDatabase() {
      const response = await fetch("/api/notion?page_size=3");

      setProjects((await response.json()).results);
    }

    getDatabase();
  }, []);

  return (
    <DefaultLayout>
      <main className="w-11/12 md:w-auto mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-48 items-center sm:my-12">
          <div className="flex-initial">
            <h2
              className="text-xl sm:text-4xl font-medium mt-4 md:mt-0"
              v-text="$t('home.header.title')"
            />

            <p className="leading-6 mt-4 sm:mt-6">
              $t('home.header.description')
            </p>

            <a href="/about-me">
              <Button
                title="$t('home.header.button')"
                className="mt-4 sm:mt-6"
              />
            </a>
          </div>

          <div className="flex-none relative">
            <Image
              src="/images/mees.jpeg"
              alt="Image of Mees Postma"
              fill={true}
              className="rounded-md sm:h-96 sm:w-96 object-cover"
            />
          </div>
        </div>

        <div className="mb-16 mt-8 sm:mt-0">
          <h2
            className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0"
            v-text="$t('home.projects.title')"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
          </div>

          <a href="/projects">
            <Button title="$t('home.projects.button')" className="mt-6" />
          </a>
        </div>
      </main>
    </DefaultLayout>
  );
}
