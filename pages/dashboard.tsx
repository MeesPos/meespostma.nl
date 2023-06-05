import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DashboardLayout from "../layouts/dashboard";
import Link from "next/link";
import Button from "../components/button";
import { useEffect, useState } from "react";
import CreateProjectModal from "../components/createProjectModal";
import { Project } from "../types/project.interface";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const [modalData, setModalData] = useState<Project>();

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getProjects() {
      const res = await fetch("/api/projects/get");

      setProjects((await res.json()).data);
    }

    getProjects();
  }, []);

  const openEditModal = (project: Project) => {
    setOpenModal(true);

    setModalData(project);
  };

  const openCreateModal = () => {
    setOpenModal(true);

    setModalData(undefined);
  };

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
                onClick={() => openCreateModal()}
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
                {projects.map((project, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href="#"
                        className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                      >
                        <span className="flex items-center space-x-3 truncate">
                          <span>{JSON.parse(String(project.title)).nl}</span>
                        </span>

                        <Link
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                      </Link>
                    </li>
                  );
                })}
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
                    {projects.map((project, index) => {
                      return (
                        <tr key={index}>
                          <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                            <div className="flex items-center space-x-3 lg:pl-2">
                              <span>
                                {JSON.parse(String(project.title)).nl}
                              </span>
                            </div>
                          </td>
                          <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                            <Link
                              target="_blank"
                              href={JSON.parse(String(project.url)).href}
                            >
                              {JSON.parse(String(project.url)).placeholder}
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                            <p
                              onClick={() => openEditModal(project)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </p>
                          </td>

                          <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                            <Link
                              href=""
                              //   onClick={/** deleteProject(project.id) */}
                              className="text-red-600 hover:text-red-900 cursor-pointer"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      <CreateProjectModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        modalData={modalData}
      />
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
