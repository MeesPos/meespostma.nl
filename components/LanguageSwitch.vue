<template>
    <div class="text-zinc-800 font-medium">
        <div class="flex gap-1 items-center cursor-pointer" @click="setOpenModal">
            <span class="">NL</span>

            <Icon name="heroicons-solid:chevron-down" :class="openModal ? 'rotate-180' : ''" />
        </div>

        <div v-if="openModal" class="absolute z-10 mt-3 max-w-5 -translate-x-1/2 transform px-2 sm:px-0">
            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="relative grid gap-6 bg-white px-5 sm:px-5 sm:py-3 my-2">
                    <NuxtLink to="#" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                        <p class="text-base font-medium text-gray-900">Nederlands</p>
                    </NuxtLink>

                    <NuxtLink to="#" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                        <p class="text-base font-medium text-gray-900">English</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    let openModal = ref(false);

    function setOpenModal() {
        if (openModal.value) {
            return openModal.value = false;
        }

        return openModal.value = true;
    }
</script>