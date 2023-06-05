import { Dialog, Transition } from "@headlessui/react";
import { FormEventHandler, Fragment, useEffect, useState } from "react";
import Input from "./input";
import Textarea from "./textarea";
import { Project } from "../types/project.interface";
import Button from "./button";

export default function CreateProjectModal({
  isOpen,
  setIsOpen,
  modalData,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  modalData: Project | undefined;
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
      placeholder: "",
    },
    logo: "",
  });

  const [image, setImage] = useState<any>();

  useEffect(() => {
    setProjectInfo({
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
        placeholder: "",
      },
      logo: "",
    });

    if (modalData) {
      setProjectInfo({
        title: {
          nl: JSON.parse(String(modalData.title)).nl,
          en: JSON.parse(String(modalData.title)).en,
        },
        description: {
          nl: JSON.parse(String(modalData.description)).nl,
          en: JSON.parse(String(modalData.description)).en,
        },
        url: {
          href: JSON.parse(String(modalData.url)).href,
          placeholder: JSON.parse(String(modalData.url)).placeholder,
        },
        logo: "",
      });
    }
  }, [isOpen]);

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

      return data.secure_url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      let imageUrl;

      if (image) {
        imageUrl = await saveImage(image);
      }

      let res: Response;

      if (modalData) {
        res = await fetch("/api/projects/update", {
          method: "PUT",
          body: JSON.stringify({
            ...projectInfo,
            id: modalData.id,
            logo: imageUrl ?? "",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        res = await fetch("/api/projects/create", {
          method: "POST",
          body: JSON.stringify({
            ...projectInfo,
            logo: imageUrl ?? "",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

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
                  {modalData ? "Edit Project" : "Create Project"}
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
                    value={projectInfo.title.nl}
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
                    value={projectInfo.title.en}
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
                    defaultValue={projectInfo.description.nl}
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
                    defaultValue={projectInfo.description.en}
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
                    value={projectInfo.url.href}
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
                    name="url_placeholder"
                    type="text"
                    label="URL Placeholder"
                    value={projectInfo.url.placeholder}
                    onChange={({ target }) =>
                      setProjectInfo({
                        ...projectInfo,
                        url: {
                          ...projectInfo.url,
                          placeholder: target.value,
                        },
                      })
                    }
                    errors={errors["url.placeholder"]}
                  />

                  {/* TODO: Sla het logo in een andere useState op en set dan pas het logo in de functie van het opslaan */}
                  <Input
                    name="logo"
                    type="file"
                    label="Logo"
                    onChange={({ target }) => setImage(target.files![0])}
                    errors={errors["logo"]}
                  />

                  <div className="justify-items-end	grid">
                    <Button
                      type="submit"
                      title={modalData ? "Edit Project" : "Add Project"}
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
