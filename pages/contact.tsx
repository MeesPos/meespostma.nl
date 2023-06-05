import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultLayout from "../layouts/default";
import Button from "../components/button";
import { useTranslation } from "react-i18next";
import Input from "../components/input";
import { ChangeEvent } from "react";
import Textarea from "../components/textarea";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <DefaultLayout description="" title="" url="">
      <main className="mx-auto px-6 lg:px-8">
        <div className="sm:my-24">
          <div className="lg:w-4/6 w-full mx-auto">
            <h2
              className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0 text-center"
              dangerouslySetInnerHTML={{ __html: t("title") }}
            />

            <p
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            />

            <div>
              <form className="flex flex-col space-y-8 mt-16">
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  onChange={function (
                    event: ChangeEvent<HTMLInputElement>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <Input
                  label="Email"
                  type="text"
                  name="email"
                  onChange={function (
                    event: ChangeEvent<HTMLInputElement>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <Textarea
                  name="message"
                  label="Message"
                  rows={7}
                  onChange={function (
                    event: ChangeEvent<HTMLTextAreaElement>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <Button
                  title="Send Message"
                  className="w-full justify-center"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "contact", "pages"])),
    },
  };
}
