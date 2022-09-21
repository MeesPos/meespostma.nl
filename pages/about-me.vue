<template>
  <main>
    <div class="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
      <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0" v-text="$t('about-me.header.title')" />

      <p class="leading-6 mt-4 sm:mt-6" v-text="$t('about-me.header.description')" />

      <NuxtLink to="#">
        <Button title="Curriculum Vitae" class="mt-6" />
      </NuxtLink>
    </div>

    <div class="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
      <h2 class="text-xl sm:text-4xl font-medium mt-4 sm:mt-0" v-text="$t('about-me.projects.title')" />

      <div class="flex flex-col sm:flex-row gap-8 sm:gap-32 mt-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <NuxtLink to="/projects">
        <Button :title="$t('about-me.projects.button')" class="mt-6" />
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
    url: 'project.nl',
  },
  {
    id: 2,
    logo: 'https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'project.nl',
  },
  {
    id: 3,
    logo: 'https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'project.nl',
  },
]
</script>