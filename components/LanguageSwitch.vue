<template>
    <div class="text-zinc-800 font-medium">
        <div class="flex gap-1 items-center cursor-pointer" @click="setOpenModal">
            <span>{{ locale.toUpperCase() }}</span>

            <Icon name="heroicons-solid:chevron-down" :class="openModal ? 'rotate-180' : ''" />
        </div>

        <div v-if="openModal" class="absolute z-10 mt-3 max-w-5 -translate-x-1/2 transform px-2 sm:px-0">
            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="relative grid gap-6 bg-white px-5 sm:px-5 sm:py-3 my-2">
                    <div @click="setLocale('nl')" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer">
                        <p class="text-base font-medium text-gray-900">Nederlands</p>
                    </div>

                    <div @click="setLocale('en')" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer">
                        <p class="text-base font-medium text-gray-900">English</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n'

    const { locale } = useI18n()

    let openModal = ref(false);

    onBeforeMount(() => {
        locale.value = localStorage.getItem('locale') || 'nl';
    })

    function setLocale(value) {
        locale.value = value;

        localStorage.setItem('locale', value);

        setOpenModal();
    }

    function setOpenModal() {
        if (openModal.value) {
            return openModal.value = false;
        }

        return openModal.value = true;
    }
</script>