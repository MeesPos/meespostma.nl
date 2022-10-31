<template>
    <main>
        <div class="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
            <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0" v-text="$t('projects.header.title')" />

            <p class="leading-6 mt-4 sm:mt-6" v-text="$t('projects.header.description')" />
        </div>

        <div class="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
            <div class="flex flex-col sm:flex-row gap-8 sm:gap-32 mt-8">
                <ProjectCard
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                />
            </div>
        </div>
  </main>
</template>

<script setup>
    
</script>