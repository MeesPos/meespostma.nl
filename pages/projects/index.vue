<template>
    <main>
        <div class="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
            <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0" v-text="$t('projects.header.title')" />

            <p class="leading-6 mt-4 sm:mt-6" v-text="$t('projects.header.description')" />
        </div>

        <div class="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
                <!-- <ProjectCard
                    v-for="(i, project) in projects"
                    :key="i"
                    :project="project"
                /> -->
            </div>
        </div>
  </main>
</template>

<script setup>
    let projects = ref([]);

    const { $apiFetch } = useNuxtApp();

    try {
        await $apiFetch('/api/projects', {
            method: "GET"
        }).then((result) => {
            projects = result;
        });
    } catch (err) {
        console.log(err);
    }
</script>