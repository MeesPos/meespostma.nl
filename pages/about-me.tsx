import Button from "../components/button";
import ProjectCard from "../components/projectCard";
import DefaultLayout from "../layouts/default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function AboutMe({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("about-me");

  return (
    <DefaultLayout
      description={t("seo.description") as string}
      title={t("about-me", { ns: "pages" }) + " | Mees Postma"}
      url="meespostma.nl/about-me"
    >
      <main className="px-6 lg:px-8">
        <div className="sm:my-24 lg:w-4/6 w-full">
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

        <div className="mb-16 mt-8 sm:mt-0 mx-auto">
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
  try {
    const projects = await fetchProjects();

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "about-me",
          "contact",
          "pages",
        ])),
        projects,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        ...(await serverSideTranslations(locale, ["about-me", "pages"])),
      },
    };
  }
}

async function fetchProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTES_URL}/api/projects/get?amount=3`
  );
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}
