import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultLayout from "../layouts/default";
import Button from "../components/button";
import { useTranslation } from "react-i18next";
import Input from "../components/input";
import { useState } from "react";
import Textarea from "../components/textarea";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { t } = useTranslation("contact");

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setErrors({});

    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success(t("success"));

      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } else if (res.status === 422) {
      const { errors } = await res.json();

      if (errors) setErrors(errors);

      toast.error(t("error"));
    }
  };

  return (
    <DefaultLayout description="" title="" url="">
      <main className="mx-auto px-6 lg:px-8">
        <div className="sm:my-24">
          <div className="lg:w-4/6 w-full mx-auto">
            <h2 className="text-xl sm:text-4xl font-medium mt-4 sm:mt-0 text-center">
              {t("title")}
            </h2>

            <p className="mt-6">{t("description")}</p>

            <div>
              <form
                className="flex flex-col space-y-8 mt-16"
                onSubmit={handleSubmit}
              >
                <Input
                  label={t("form.name")}
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={({ target }) =>
                    setContactData({
                      ...contactData,
                      name: target.value,
                    })
                  }
                  errors={errors.name}
                />

                <Input
                  label={t("form.email")}
                  type="text"
                  name="email"
                  value={contactData.email}
                  onChange={({ target }) =>
                    setContactData({
                      ...contactData,
                      email: target.value,
                    })
                  }
                  errors={errors.email}
                />

                <Textarea
                  label={t("form.message")}
                  name="message"
                  rows={7}
                  defaultValue={contactData.message}
                  onChange={({ target }) =>
                    setContactData({
                      ...contactData,
                      message: target.value,
                    })
                  }
                  errors={errors.message}
                />

                <Button
                  title={t("form.submit")}
                  type="submit"
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
      ...(await serverSideTranslations(locale, ["contact", "pages"])),
    },
  };
}
