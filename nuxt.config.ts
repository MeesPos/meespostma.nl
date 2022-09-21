// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@intlify/nuxt3'
    ],
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'nl'
        }
    }
})