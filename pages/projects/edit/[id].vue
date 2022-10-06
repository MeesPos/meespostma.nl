<template>
    <form action="#" class="space-y-8 divide-y divide-gray-200" @submit.prevent="submit" enctype="multipart/form-data">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be
                        careful what you share.</p>
                </div>

                <div class="space-y-6 sm:space-y-5">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Name</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input type="text" name="name" id="name" autocomplete="name" v-model="name"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="description"
                            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Description</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea id="description" name="description" rows="3" v-model="description"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="logo" class="block text-sm font-medium text-gray-700">Logo</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input type="file" id="logo" accept="image/png, image/jpeg" @change="uploadedFile($event)" />
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="url" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">URL</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input type="text" name="url" id="url" autocomplete="url" v-model="url"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="urlPlaceholder" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">URL
                            Placeholder</label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0">
                            <input type="text" name="urlPlaceholder" id="urlPlaceholder" autocomplete="urlPlaceholder"
                                v-model="urlPlaceholder"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-5">
            <div class="flex justify-end">
                <NuxtLink to="/dashboard">
                    <Button class="border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50" 
                            title="Cancel"
                    />
                </NuxtLink>

                <Button type="submit" 
                        class="ml-3 text-sm"
                        title="Save" 
                />
            </div>
        </div>
    </form>
</template>

<script setup>
    definePageMeta({
        layout: 'dashboard',
        middleware: 'auth'
    })

    let project = null;

    const { $apiFetch, $route } = useNuxtApp()

    try {
        $apiFetch(`/Projects/${useRoute().params.id}`, {
            method: "GET"
        }).then(result => {
            console.log(result);
            
            project = result;
        });
    } catch (err) {
        console.log(err);
    }
</script>