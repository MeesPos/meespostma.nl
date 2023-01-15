import Image from "next/image";
import Button from "../components/button";
import DefaultLayout from "../layouts/default";
import { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const [projects, setProjects] = useState<Array<any>>([]);

  const { t } = useTranslation("home");

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
            <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
              {t("header.title")}
            </h2>

            <p
              className="leading-6 mt-4 sm:mt-6"
              dangerouslySetInnerHTML={{ __html: t("header.description") }}
            />

            <a href="/about-me">
              <Button title={t("header.button")} className="mt-4 sm:mt-6" />
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
          <h2 className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
          </div>

          <a href="/projects">
            <Button title={t("projects.button")} className="mt-6" />
          </a>
        </div>
      </main>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "contact"])),
      // Will be passed to the page component as props
    },
  };
}
