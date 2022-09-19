<template>
    <div class="cursor-pointer" @click="setDarkMode">
        <Icon v-if="darkMode"
              name="heroicons-outline:moon"
              class="w-6 h-6 text-yellow-300"
        />

        <Icon v-else
              name="heroicons-outline:sun"
              class="w-6 h-6 text-zinc-800"
        />
    </div>
</template>

<script setup>
    let darkMode = ref(false);

    function setDarkMode() {
        if (darkMode.value) {
            return darkMode.value = false;
        }

        return darkMode.value = true;
    }
</script>