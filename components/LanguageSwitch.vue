<template>
    <div class="text-zinc-800 font-medium">
        <div class="flex gap-1 items-center cursor-pointer" @click="setOpenModal">
            <span class="">NL</span>

            <Icon name="heroicons-solid:chevron-down"
                  :class="openModal ? 'rotate-180' : ''"
            />
        </div>

        <div v-if="openModal">
            <h1>Test</h1>
        </div>
    </div>
</template>

<script setup>
    let openModal = ref(false);

    function setOpenModal() {                
        if(openModal.value) {
            return openModal.value = false;
        }

        return openModal.value = true;
    }
</script>