import Button from "../components/button";
import DefaultLayout from "../layouts/default";
import ProjectCard from "../components/projectCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Home({ projects }: { projects: Array<any> }) {
  const { t } = useTranslation("home");

  return (
    <DefaultLayout
      description={t("seo.description") as string}
      title="Mees Postma"
      url="meespostma.nl"
    >
      <main className="mx-auto px-6 lg:px-8">
        <div className="sm:my-24">
          <div className="lg:w-4/6 w-full">
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
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ROUTES_URL + "/api/projects/get?amount=3"
    );

    if (!res.ok)
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            "home",
            "contact",
            "pages",
          ])),
        },
      };

    return {
      props: {
        ...(await serverSideTranslations(locale, ["home", "contact", "pages"])),
        projects: await res.json(),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        ...(await serverSideTranslations(locale, ["home", "contact", "pages"])),
      },
    };
  }
}
