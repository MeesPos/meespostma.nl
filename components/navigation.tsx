import { useTranslation } from "next-i18next";
import LanguageSwitch from "./languageSwitch";

export default function Navigation() {
  const { t } = useTranslation("pages");

  const navItems: Array<{
    title: string;
    href: string;
  }> = [
    {
      title: t("about-me"),
      href: "/about-me",
    },
    {
      title: t("projects"),
      href: "/projects",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-900">
      <div className="container flex flex-col flex-wrap items-center justify-between py-8 mx-auto md:flex-row">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="/"
            className="flex items-center mb-5 font-bold text-gray-900 dark:text-white lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl leading-none select-none">
              Mees Postma
            </span>
          </a>

          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-zinc-100">
            {navItems.map((navItem, index) => {
              return (
                <a
                  key={index}
                  href={navItem.href}
                  className="mx-4 md:mx-0 md:mr-8 leading-6 text-black hover:text-gray-900 dark:text-white"
                >
                  {navItem.title}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="inline-flex items-center md:ml-5 space-x-6 lg:justify-end">
          <LanguageSwitch />

          {/* <ModeToggle /> */}
        </div>
      </div>
    </section>
  );
}
