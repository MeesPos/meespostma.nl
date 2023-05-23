import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DashboardLayout from "../layouts/dashboard";
import Link from "next/link";
import Button from "../components/button";
import { useState } from "react";
import CreateProjectModal from "../components/createProjectModal";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardLayout>
      <div className="min-h-full">
        <div className="flex flex-col">
          <main className="flex-1">
            <div className="border-b border-gray-200 py-4 sm:flex sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                  Projects
                </h1>
              </div>
              <div
                className="mt-4 flex sm:mt-0 sm:ml-4"
                onClick={() => setOpenModal(true)}
              >
                <Button title="Create" />
              </div>
            </div>

            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-sm font-medium text-gray-900">Projects</h2>
              </div>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
              >
                <li key="project.id">
                  <a
                    href="#"
                    className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                  >
                    <span className="flex items-center space-x-3 truncate">
                      <span>project.name</span>
                    </span>

                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 hidden sm:block">
              <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-t border-gray-200">
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        <span className="lg:pl-2">Project</span>
                      </th>
                      <th
                        className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                        scope="col"
                      >
                        URL
                      </th>
                      <th
                        className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      ></th>

                      <th
                        className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr key="project.id">
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <span>project.name</span>
                        </div>
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                        <a target="_blank" href="project.url">
                          project.urlPlaceholder
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                        <a
                          href="{'/projects/edit/' + project.id}"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>

                      <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                        <a
                          //   onClick={/** deleteProject(project.id) */}
                          className="text-red-600 hover:text-red-900 cursor-pointer"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      <CreateProjectModal isOpen={openModal} setIsOpen={setOpenModal} />
    </DashboardLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "about-me",
        "contact",
        "pages",
      ])),
    },
  };
}
