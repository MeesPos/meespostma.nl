<template>
  <button type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          v-text="title"
  />
</template>

<script setup>
    defineProps({
        title: ''
    })
</script>