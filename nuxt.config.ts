// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@intlify/nuxt3',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: ''
    },
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'nl'
        }
    }
})