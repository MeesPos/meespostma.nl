<template>
    <button class="cursor-pointer" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
        <Icon v-if="$colorMode.value == 'dark'"
              name="heroicons-outline:moon"
              class="w-6 h-6 text-yellow-300"
        />

        <Icon v-else
              name="heroicons-outline:sun"
              class="w-6 h-6 text-zinc-800"
        />
    </button>
</template>

<script setup lang="ts">
    type Theme = 'light' | 'dark';

    const setColorTheme = (newTheme: Theme) => {
        useColorMode().preference = newTheme
    }
</script>