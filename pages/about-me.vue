<template>
  <main>
    <div class="my-12 mx-auto xl:ml-0 xl:w-7/12 w-11/12">
      <h2 class="text-xl sm:text-4xl font-medium mt-4 md:mt-0">
        Lorem ipsum dolor sit amet dictum, ut al adipiscing elit.
      </h2>

      <p class="leading-6 mt-4 sm:mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nisl
        sit amet metus consequat mollis. In non est sed ipsum auctor aliquam.
        Maecenas nec feugiat arcu, sed ornare felis. Pellentesque neque felis,
        iaculis nec tempus at, mollis ac lectus. Integer in aliquam justo. Sed
        diam nulla, porttitor sit amet volutpat quis, ultricies ut massa.
        Vivamus ex urna, ornare id placerat sit amet, laoreet sit amet diam. Ut
        ut purus a velit ullamcorper venenatis.
        <br />
        <br />
        Maecenas nisi orci, venenatis sit amet dui vel, semper rutrum tortor.
        eleifend vel erat sed, malesuada accumsan sapien. Vivamus id orci ac
        magna elementum iaculis. Nulla arcu nisl, scelerisque et laoreet nec,
        porttitor nec sapien. Quisque mollis, dui eget vehicula sodales, velit
        metus fringilla eros, ut egestas massa purus quis nulla. In condimentum
        in ex vitae rhoncus. Vivamus a lacus sem. Sed ultrices purus leo, nec
        tempus mauris dapibus nec. Integer sagittis lacinia dui, tincidunt
        sodales eros facilisis sed. Nulla quam ante, feugiat quis varius a,
        faucibus ut dolor.
      </p>

      <NuxtLink to="#">
        <Button title="Mijn CV" class="mt-6 px-10" />
      </NuxtLink>
    </div>

    <div class="mb-16 mt-8 sm:mt-0 w-11/12 xl:w-full mx-auto">
      <h2 class="text-xl sm:text-4xl font-medium mt-4 sm:mt-0">
        Mijn Projecten
      </h2>

      <div class="flex flex-col sm:flex-row gap-8 sm:gap-32 mt-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <NuxtLink to="/projects">
        <Button title="Alle projecten" class="mt-6" />
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