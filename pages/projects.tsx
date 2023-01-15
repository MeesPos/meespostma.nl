import ProjectCard from "../components/projectCard";
import DefaultLayout from "../layouts/default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Project({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("projects");

  return (
    <DefaultLayout>
      <main>
        <div className="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
          <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
            {t("header.title")}
          </h2>

          <p className="leading-6 mt-4 sm:mt-6">{t("header.description")}</p>
        </div>

        <div className="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ROUTES_URL + "/api/notion?page-size=99"
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "projects",
        "contact",
        "pages",
      ])),
      projects: (await res.json()).results,
    },
  };
}
