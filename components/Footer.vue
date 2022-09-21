<template>
  <div class="mt-16">
    <div class="w-full border-t border-zinc-100" />

    <div class="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row w-11/12 lg:w-full">
      <div class="flex flex-wrap gap-6 font-bold grow mx-auto">
        <NuxtLink v-for="(navItem, i) in navItems"
            :key="i"
            :to="navItem.href"
        >
            {{ $t(navItem.title) }}
        </NuxtLink>
      </div>

      <div class="sm:text-right text-center grow text-zinc-400 mt-4 sm:mt-0">
        <p>&copy; {{ new Date().getFullYear() }} Mees Postma. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
    const navItems = ref([
        {
            title: 'pages.about-me',
            href: '/about-me',
            active: false,
        },
        {
            title: 'pages.projects',
            href: '/projects',
            active: false,
        },
    ])
</script>