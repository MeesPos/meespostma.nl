import Link from "next/link";
import Button from "../components/button";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function NotFoundError() {
  const { t } = useTranslation("404");

  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-sky-500 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-1 text-base dark:text-gray-300 text-gray-500">
                {t("description")}
              </p>
            </div>
            <div className="mt-8 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <Button title={t("back")} />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["404"])),
    },
  };
}
