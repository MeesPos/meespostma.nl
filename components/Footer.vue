<template>
  <div class="mt-16">
    <div class="w-full border-t border-zinc-100" />

    <div class="max-w-7xl mx-auto my-6 flex w-full">
      <div class="flex flex-wrap gap-6 font-bold grow">
        <a
          v-for="(navItem, i) in navItems"
          :key="i"
          :href="navItem.href"
          class=""
          v-text="navItem.title"
        />
      </div>

      <div class="text-right grow text-zinc-400">
        <p>&copy; {{ new Date().getFullYear() }} Mees Postma. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
    const navItems = ref([
        {
            title: 'Over mij',
            href: '#',
            active: false,
        },
        {
            title: 'Projecten',
            href: '#',
            active: false,
        },
    ])
</script>