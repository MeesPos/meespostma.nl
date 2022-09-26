// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@intlify/nuxt3',
        '@nuxtjs/color-mode',
        '@nuxtjs-alt/auth',
        '@nuxtjs-alt/http',
        '@pinia/nuxt'
    ],
    colorMode: {
        classSuffix: ''
    },
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'nl'
        }
    },
    auth: {
        strategies: {
            localStorage: false,
            local: {
                endpoints: {
                    csrf: false,
                    login: { url: `${process.env.API_URL}/Auth/login`, method: 'post' },
                    user: false
                }
            },
        }
    }
})