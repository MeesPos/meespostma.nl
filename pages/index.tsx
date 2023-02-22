import Image from "next/image";
import Button from "../components/button";
import DefaultLayout from "../layouts/default";
import ProjectCard from "../components/projectCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getProjects } from "../utils/notion";

export default function Home({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("home");

  return (
    <DefaultLayout
      description={t("seo.description") as string}
      title="Mees Postma"
      image="/images/mees-postma.png"
      url="meespostma.nl"
    >
      <main className="w-11/12 md:w-auto mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-48 items-center sm:my-12">
          <div className="flex-initial">
            <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
              {t("header.title")}
            </h2>

            <p
              className="leading-6 mt-4 sm:mt-6"
              dangerouslySetInnerHTML={{ __html: t("header.description") }}
            />

            <Link href="/about-me">
              <Button title={t("header.button")} className="mt-4 sm:mt-6" />
            </Link>
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

          <Link href="/projects">
            <Button title={t("projects.button")} className="mt-6" />
          </Link>
        </div>
      </main>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "contact", "pages"])),
      projects: await getProjects(3),
    },
  };
}
