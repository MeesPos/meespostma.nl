<template>
    <main>
        <div class="flex flex-col-reverse sm:flex-row sm:gap-48 items-center sm:my-12 w-96 sm:w-auto mx-auto">
            <div class="flex-initial">
                <h2 class="text-xl sm:text-4xl font-medium mt-4 sm:mt-0">Software developer, enthousiaste reiziger en nog iets in te vullen.</h2>

                <p class="leading-6 mt-4 sm:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis dolor a nisl venenatis lobortis.
                    Fusce lacinia tempus mauris, a faucibus elit tristique quis. Vestibulum sagittis purus vel augue rutrum,
                    eget euismod sem hendrerit. Etiam blandit lectus eu mi molestie sagittis. Sed lobortis porttitor dolor,
                    vitae tempor ex suscipit eu</p>

                <NuxtLink to="/about-me">
                    <Button title="Over mij"
                            class="mt-4 sm:mt-6"
                    />
                </NuxtLink>
            </div>

            <div class="flex-none">
                <img src="assets/mees.jpeg"
                    class="rounded-md h-96 w-96 object-cover"
                />
            </div>
        </div>

        <div class="mb-16">
            <h2 class="text-4xl font-medium">Mijn Projecten</h2>
            
            <div class="flex gap-32 mt-8">
                <ProjectCard v-for="project in projects"
                            :key="project.id" 
                            :project="project"
                />
            </div>

            <NuxtLink to="/projects">
                    <Button title="Alle projecten"
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