import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const router = useRouter();

  const { pathname, query, asPath, locale } = router;

  return (
    <div className="cursor-pointer">
      <Link
        className="flex gap-1 items-center cursor-pointer text-sm leading-6 text-gray-900 dark:text-white "
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
