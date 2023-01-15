import Button from "../components/button";
import ProjectCard from "../components/projectCard";
import DefaultLayout from "../layouts/default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function AboutMe({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("about-me");

  return (
    <DefaultLayout>
      <main>
        <div className="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
          <h2 className="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
            {t("header.title")}
          </h2>

          <p
            className="leading-6 mt-4 sm:mt-6"
            dangerouslySetInnerHTML={{ __html: t("header.description") }}
          />

          <Link href="/cv-mees.pdf" target="_blank">
            <Button title="Curriculum Vitae" className="mt-6" />
          </Link>
        </div>

        <div className="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ROUTES_URL + "/api/notion?page_size=3"
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["about-me", "contact", "pages"])),
      projects: (await res.json()).results,
    },
  };
}
