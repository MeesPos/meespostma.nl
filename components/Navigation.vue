<template>
    <section class="w-full bg-white dark:bg-zinc-900">
        <div class="container flex flex-col flex-wrap items-center justify-between py-8 mx-auto md:flex-row">
            <div class="relative flex flex-col md:flex-row">
                <NuxtLink to="/" class="flex items-center mb-5 font-bold text-gray-900 dark:text-white lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span class="mx-auto text-xl leading-none select-none">Mees Postma</span>
                </NuxtLink>

                <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-zinc-100">
                    <NuxtLink v-for="(navItem, i) in navItems"
                       :key="i"
                       :to="navItem.href"
                       class="mx-4 md:mx-0 md:mr-8 leading-6 text-black hover:text-gray-900 dark:text-white"
                    > 
                        {{ $t(navItem.title) }}
                    </NuxtLink>
                </nav>
            </div>

            <div class="inline-flex items-center md:ml-5 space-x-6 lg:justify-end">
                <LanguageSwitch />

                <ModeToggle />
            </div>
        </div>
    </section>
</template>

<script setup>
    const navItems = ref([
        {
            title: "pages.about-me",
            href: '/about-me'
        },
        {
            title: "pages.projects",
            href: '/projects'
        }
    ])
</script>

<style>
    .router-link-active {
        font-weight: bold;
    }
</style>