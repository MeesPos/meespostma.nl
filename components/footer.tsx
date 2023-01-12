import dayjs from "dayjs";

export default function Footer() {
  const navItems: Array<{
    title: string;
    href: string;
  }> = [
    {
      title: "pages.about-me",
      href: "/about-me",
    },
    {
      title: "pages.projects",
      href: "/projects",
    },
  ];

  return (
    <div className="mt-16">
      <div className="w-full border-t border-zinc-100" />

      <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row w-11/12 lg:w-full">
        <div className="flex flex-wrap gap-6 font-bold grow mx-auto">
          {navItems.map((navItem, index) => {
            return (
              <a key={index} href={navItem.href}>
                $t(navItem.title)
              </a>
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
