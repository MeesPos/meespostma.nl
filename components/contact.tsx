import { useTranslation } from "next-i18next";
import Button from "./button";

export default function ContactSection() {
  const { t } = useTranslation("contact");

  return (
    <div className="sm:max-w-2xl w-11/12 mx-auto">
      <h2 className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0 text-center">
        { t('title') }
      </h2>

      <p className="mt-6">{ t('description') }</p>

      <div className="flex gap-6 sm:gap-12 justify-center mt-6">
        <a href="mailto:mail@meespostma.nl">
          <Button title="E-mail" className="px-6 sm:px-12" />
        </a>

        <a
          href="https://nl.linkedin.com/in/mees-postma-a911b1196"
          target="_blank"
        >
          <Button title="LinkedIn" className="px-6 sm:px-12" />
        </a>
      </div>
    </div>
  );
}