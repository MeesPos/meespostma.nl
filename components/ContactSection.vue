<template>
    <div class="sm:max-w-2xl w-11/12 mx-auto">
        <h2 class="text-xl sm:text-4xl font-medium mt-4 sm:mt-0 text-center" v-text="$t('contact.title')" />

        <p class="mt-6" v-text="$t('contact.description')" />

        <div class="flex gap-6 sm:gap-12 justify-center mt-6">
            <a href="mailto:mail@meespostma.nl">
                <Button title="E-mail" class="px-6 sm:px-12" />
            </a>

            <a href="https://nl.linkedin.com/in/mees-postma-a911b1196" target="_blank">
                <Button title="LinkedIn" class="px-6 sm:px-12" />
            </a>
        </div>
    </div>
</template>