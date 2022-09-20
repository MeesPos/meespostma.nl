<template>
    <a :href="project.url" target="_blank">
        <div class="bg-white rounded-full w-10 h-10 shadow-md relative">
            <img :src="project.logo" class="w-8 h-8 left-1 top-1 absolute">
        </div>

        <h3 class="font-bold text-lg mt-4" v-text="project.title" />

        <p class="mt-4 leading-7" v-text="project.description" />

        <div :href="project.url" class="mt-4 flex items-center gap-2 text-zinc-400">
            <Icon name="heroicons-solid:link" />
            <a :href="project.url" v-text="project.url" />
        </div>
    </a>
</template>

<script setup>
    defineProps({
        project: {
            logo: '',
            title: '',
            description: '',
            url: ''
        }
    })
</script>