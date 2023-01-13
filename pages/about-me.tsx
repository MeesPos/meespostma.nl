import { useEffect, useState } from "react";
import Button from "../components/button";
import ProjectCard from "../components/projectCard";
import DefaultLayout from "../layouts/default";

export default function AboutMe() {
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
      <main>
        <div className="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
          <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
            $t('about-me.header.title')
          </h2>

          <p className="leading-6 mt-4 sm:mt-6">
            $t('about-me.header.description')
          </p>

          <a href="#">
            <Button title="Curriculum Vitae" className="mt-6" />
          </a>
        </div>

        <div className="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
          <h2 className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0">
            $t('about-me.projects.title')
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
            {projects.map((project) => {
              return <ProjectCard key="i" project={project} />;
            })}
          </div>

          <a href="/projects">
            <Button title="$t('about-me.projects.button')" className="mt-6" />
          </a>
        </div>
      </main>
    </DefaultLayout>
  );
}
