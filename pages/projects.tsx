import ProjectCard from "../components/projectCard";
import DefaultLayout from "../layouts/default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getProjects } from "../utils/notion";

export default function Project({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("projects");

  return (
    <DefaultLayout
      description={t("seo.description") as string}
      title={t("projects", { ns: "pages" }) + " | Mees Postma"}
      url="meespostma.nl/projects"
    >
      <main className="px-6 lg:px-8">
        <div className="sm:my-24">
          <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
            {t("header.title")}
          </h2>

          <p className="leading-6 mt-4 sm:mt-6">{t("header.description")}</p>
        </div>

        <div className="mb-16 mt-8 sm:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "projects",
        "contact",
        "pages",
      ])),
      projects: await getProjects(),
    },
  };
}
