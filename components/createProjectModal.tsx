import { Dialog, Transition } from "@headlessui/react";
import { FormEventHandler, Fragment, useState } from "react";
import Input from "./input";
import Textarea from "./textarea";
import { Project } from "../types/project.interface";
import Button from "./button";

export default function CreateProjectModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [projectInfo, setProjectInfo] = useState<Project>({
    title: {
      nl: "",
      en: "",
    },
    description: {
      nl: "",
      en: "",
    },
    url: {
      href: "",
      placeholder: {
        nl: "",
        en: "",
      },
    },
    logo: "",
  });

  const [errors, setErrors]: any = useState({});

  const saveImage = async (image: any) => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/df9vthwmq/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      setProjectInfo({ ...projectInfo, logo: data.secure_url });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      if (projectInfo.logo) {
        saveImage(projectInfo.logo!);
      }

      const res = await fetch("/api/project/create", {
        method: "POST",
        body: JSON.stringify(projectInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setIsOpen(false);
      } else if (res.status === 422) {
        const { errors } = await res.json();

        if (errors) setErrors(errors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-indigo-600 mb-6"
                >
                  Create Project
                </Dialog.Title>
                <form
                  className="flex space-y-4 flex-col"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <Input
                    name="title_nl"
                    type="text"
                    label="Title (NL)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        title: {
                          ...projectInfo.title,
                          nl: target.value,
                        },
                      })
                    }
                    errors={errors["title.nl"]}
                  />

                  <Input
                    name="title_en"
                    type="text"
                    label="Title (EN)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        title: {
                          ...projectInfo.title,
                          en: target.value,
                        },
                      })
                    }
                    errors={errors["title.en"]}
                  />

                  <Textarea
                    name="description_nl"
                    label="Description (NL)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        description: {
                          ...projectInfo.description,
                          nl: target.value,
                        },
                      })
                    }
                    errors={errors["description.nl"]}
                  />

                  <Textarea
                    name="description_en"
                    label="Description (EN)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        description: {
                          ...projectInfo.description,
                          en: target.value,
                        },
                      })
                    }
                    errors={errors["description.en"]}
                  />

                  <Input
                    name="url_href"
                    type="text"
                    label="URL"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        url: {
                          ...projectInfo.url,
                          href: target.value,
                        },
                      })
                    }
                    errors={errors["url.href"]}
                  />

                  <Input
                    name="url_placeholder_nl"
                    type="text"
                    label="URL Placeholder (NL)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        url: {
                          ...projectInfo.url,
                          placeholder: {
                            ...projectInfo.url.placeholder,
                            nl: target.value,
                          },
                        },
                      })
                    }
                    errors={errors["url.placeholder.nl"]}
                  />

                  <Input
                    name="url_placeholder_en"
                    type="text"
                    label="URL Placeholder (EN)"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        url: {
                          ...projectInfo.url,
                          placeholder: {
                            ...projectInfo.url.placeholder,
                            en: target.value,
                          },
                        },
                      })
                    }
                    errors={errors["url.placeholder.en"]}
                  />

                  <Input
                    name="logo"
                    type="file"
                    label="Logo"
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        logo: target.files![0],
                      })
                    }
                    errors={errors["logo"]}
                  />

                  <div className="justify-items-end	grid">
                    <Button
                      type="submit"
                      title="Add Project"
                      className="w-max px-8 mt-6"
                    />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
