<template>
    <section class="w-full text-gray-700 bg-white tails-selected-element">
        <div class="container flex flex-col flex-wrap items-center justify-between py-8 mx-auto md:flex-row">
            <div class="relative flex flex-col md:flex-row">
                <a href="/" class="flex items-center mb-5 font-bold text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span class="mx-auto text-xl leading-none select-none">Mees Postma</span>
                </a>
                <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-zinc-100">
                    <a v-for="(navItem, i) in navItems"
                       :key="i"
                       :href="navItem.href"
                       class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                       v-text="navItem.title"
                    />
                </nav>
            </div>

            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                <LanguageSwitch />

                <ModeToggle />
            </div>
        </div>
    </section>
</template>

<script setup>
    const navItems = ref([
        {
            title: "Over mij",
            href: '#',
            active: false
        },
        {
            title: "Projecten",
            href: '#',
            active: false
        }
    ])
</script>