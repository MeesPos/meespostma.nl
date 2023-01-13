import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LanguageSwitch() {
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const { pathname, query, asPath, locale } = router;

  return (
    <div className="text-zinc-800 dark:text-white font-medium">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setModalOpen(modalOpen ? false : true)}
      >
        <span>{locale === "nl" ? "Nederlands" : "English"}</span>

        <Icon icon="heroicons-solid:chevron-down" className={modalOpen ? 'rotate-180' : ''} />
      </div>

      {modalOpen ? (
        <div className="absolute z-10 mt-3 max-w-5 -translate-x-1/2 transform px-2 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 sm:px-5 sm:py-3 my-2">
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={"nl"}
                className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer"
              >
                <p className="text-base font-medium text-gray-900">
                  Nederlands
                </p>
              </Link>

              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={"en"}
                className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer"
              >
                <p className="text-base font-medium text-gray-900">English</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
