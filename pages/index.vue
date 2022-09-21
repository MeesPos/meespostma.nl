<template>
    <main class="w-11/12 md:w-auto mx-auto">
        <div class="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-48 items-center sm:my-12">
            <div class="flex-initial">
                <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0" v-text="$t('home.header.title')" />

                <p class="leading-6 mt-4 sm:mt-6" v-text="$t('home.header.description')" />

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

            <div class="flex flex-col sm:flex-row gap-8 sm:gap-32 mt-8">
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
    const projects = [
        {
            id: 1,
            logo: 'https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg',
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            url: 'project.nl'
        },
        {
            id: 2,
            logo: 'https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg',
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            url: 'project.nl'
        },
        {
            id: 3,
            logo: 'https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg',
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            url: 'project.nl'
        }
    ];
</script>