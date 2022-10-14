<template>
    <div class="min-h-full">
        <div class="flex flex-col">
            <main class="flex-1">
                <div
                    class="border-b border-gray-200 py-4 sm:flex sm:items-center sm:justify-between">
                    <div class="min-w-0 flex-1">
                        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Projects</h1>
                    </div>
                    <div class="mt-4 flex sm:mt-0 sm:ml-4">
                        <NuxtLink to="/projects/create">
                            <Button title="Create" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="mt-10 sm:hidden">
                    <div class="px-4 sm:px-6">
                        <h2 class="text-sm font-medium text-gray-900">Projects</h2>
                    </div>
                    <ul role="list" class="mt-3 divide-y divide-gray-100 border-t border-gray-200">
                        <li v-for="project in projects" :key="project.id">
                            <a href="#"
                                class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                                <span class="flex items-center space-x-3 truncate">
                                    <span v-text="project.name" />
                                </span>

                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mt-8 hidden sm:block">
                    <div class="inline-block min-w-full border-b border-gray-200 align-middle">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-t border-gray-200">
                                    <th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                        scope="col">
                                        <span class="lg:pl-2">Project</span>
                                    </th>
                                    <th class="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                                        scope="col">URL</th>
                                    <th class="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                                        scope="col"></th>

                                    <th class="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                                        scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100 bg-white">
                                <tr v-for="project in projects" :key="project.id">
                                    <td
                                        class="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                                        <div class="flex items-center space-x-3 lg:pl-2">
                                            <span v-text="project.name" />
                                        </div>
                                    </td>
                                    <td
                                        class="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                        <a target="_blank" :href="project.url" v-text="project.urlPlaceholder" />
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                        <a :href="'/projects/edit/' + project.id" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>

                                    <td class="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                        <a @click="deleteProject(project.id)" class="text-red-600 hover:text-red-900 cursor-pointer">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'dashboard',
        middleware: 'auth'
    })


    const { $apiFetch } = useNuxtApp()

    let projects = null;

    try {
        await $apiFetch('/Projects', {
            method: "GET"
        }).then(result => {
            projects = result;
        })
    } catch(err) {
        console.log(err);
    }

    async function deleteProject(projectId) {
        try {
            await $apiFetch(`/Projects/${projectId}`, {
                method: "DELETE"
            }).then(() => {
                window.location.reload();
            })
        } catch(err) {
            console.log(err);
        }
    }
</script>