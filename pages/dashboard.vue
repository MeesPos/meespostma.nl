<template>
    <div class="min-h-full">
        <!-- Main column -->
        <div class="flex flex-col">
            <!-- Search header -->
            <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
                <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
                <button type="button"
                    class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden">
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/bars-3-center-left -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </button>
                <div class="flex flex-1 justify-between">
                    <div class="flex flex-1">
                        <form class="flex w-full md:ml-0" action="#" method="GET">
                            <label for="search-field" class="sr-only">Search</label>
                            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                    <!-- Heroicon name: mini/magnifying-glass -->
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search-field" name="search-field"
                                    class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="Search" type="search">
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center">
                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <button type="button"
                                    class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main class="flex-1">
                <!-- Page title & actions -->
                <div
                    class="border-b border-gray-200 py-4 sm:flex sm:items-center sm:justify-between">
                    <div class="min-w-0 flex-1">
                        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Projects</h1>
                    </div>
                    <div class="mt-4 flex sm:mt-0 sm:ml-4">
                        <Button title="Create" />
                    </div>
                </div>

                <!-- Projects list (only on smallest breakpoint) -->
                <div class="mt-10 sm:hidden">
                    <div class="px-4 sm:px-6">
                        <h2 class="text-sm font-medium text-gray-900">Projects</h2>
                    </div>
                    <ul role="list" class="mt-3 divide-y divide-gray-100 border-t border-gray-200">
                        <li>
                            <a href="#"
                                class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                                <span class="flex items-center space-x-3 truncate">
                                    <span class="truncate text-sm font-medium leading-6">
                                        GraphQL API
                                        <span class="truncate font-normal text-gray-500">in Engineering</span>
                                    </span>
                                </span>
                                <!-- Heroicon name: mini/chevron-right -->
                                <svg class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <!-- More projects... -->
                    </ul>
                </div>

                <!-- Projects table (small breakpoint and up) -->
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
                                        scope="col">Last updated</th>
                                    <th class="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                                        scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td
                                        class="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                                        <div class="flex items-center space-x-3 lg:pl-2">
                                            <a href="#" class="truncate hover:text-gray-600">
                                                <span>
                                                    GraphQL API
                                                    <span class="font-normal text-gray-500">in Engineering</span>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                    <td
                                        class="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                        March 17, 2020</td>
                                    <td class="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>
                                </tr>

                                <!-- More projects... -->
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
    layout: 'dashboard'
})

const { $auth } = useNuxtApp()
</script>