import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageSwitch from "./languageSwitch";
import ModeToggle from "./modeToggle";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navigation() {
  const { t } = useTranslation("pages");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-bold">Mees Postma</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>

            <Icon
              icon={"heroicons:bars-3-bottom-left-20-solid"}
              className="h-6 w-6 dark:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-semibold leading-6 "
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <LanguageSwitch />

          <ModeToggle />
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-black px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold">Mees Postma</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Icon
                icon={"heroicons:x-mark"}
                className="h-6 w-6 dark:text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex flex-col space-y-2">
                <LanguageSwitch />

                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
