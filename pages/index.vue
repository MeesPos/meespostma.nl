<template>
    <main class="w-11/12 md:w-auto mx-auto">
        <div class="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-48 items-center sm:my-12">
            <div class="flex-initial">
                <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0" v-text="$t('home.header.title')" />

                <p class="leading-6 mt-4 sm:mt-6" v-html="$t('home.header.description')" />

                <NuxtLink to="/about-me">
                    <Button :title="$t('home.header.button')"
                            class="mt-4 sm:mt-6"
                    />
                </NuxtLink>
            </div>

            <div class="flex-none">
                <img src="assets/mees.jpeg"
                    class="rounded-md sm:h-96 sm:w-96 object-cover"
                />
            </div>
        </div>

        <div class="mb-16 mt-8 sm:mt-0">
            <h2 class="text-xl sm:text-4xl font-medium mt-4 sm:mt-0" v-text="$t('home.projects.title')" />

            <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 sm:gap-32 mt-8">
                <ProjectCard v-for="project in projects"
                            :key="project.id" 
                            :project="project"
                />
            </div>

            <NuxtLink to="/projects">
                    <Button :title="$t('home.projects.button')"
                            class="mt-6"
                    />
                </NuxtLink>
        </div>
    </main>
</template>

<script setup>
    let projects = ref([]);

    const { $apiFetch } = useNuxtApp();
    
    try {
        await $apiFetch('/Projects', {
            method: "GET"
        }).then((result) => {
            projects = result;

            projects.length = 3;

            console.log(projects);
        });
    } catch (err) {
        console.log(err);
    }
</script>