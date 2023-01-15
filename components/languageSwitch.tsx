import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LanguageSwitch() {
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const { pathname, query, asPath, locale } = router;

  return (
    <div className="text-zinc-800 dark:text-white cursor-pointer">
      <Link
        className="flex gap-1 items-center cursor-pointer"
        href={{ pathname, query }}
        as={asPath}
        locale={locale !== "nl" ? "nl" : "en"}
      >
        <p>
          Switch to{" "}
          <span className="font-bold">
            {locale !== "nl" ? "Nederlands" : "English"}
          </span>
        </p>
      </Link>
    </div>
  );
}
