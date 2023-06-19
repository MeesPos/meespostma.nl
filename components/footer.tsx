import dayjs from "dayjs";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
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
    {
      title: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <div className="mt-16">
      <div className="w-full border-t border-zinc-100" />

      <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row lg:w-full px-6 lg:px-8">
        <div className="flex flex-wrap gap-6 font-bold grow mx-auto">
          {navItems.map((navItem, index) => {
            return (
              <Link key={index} href={navItem.href}>
                {navItem.title}
              </Link>
            );
          })}
        </div>

        <div className="sm:text-right text-center grow text-zinc-400 mt-4 sm:mt-0">
          <p>&copy; {dayjs().year()} Mees Postma. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
