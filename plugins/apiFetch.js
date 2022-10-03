import {defineNuxtPlugin, useRuntimeConfig} from "#app";

export default defineNuxtPlugin(nuxtApp => {
    const { $auth } = useNuxtApp()
    const config = useRuntimeConfig()

    nuxtApp.provide('apiFetch', $fetch.create({
        baseURL: config.API_URL,
        headers: {
            Authorization: $auth.strategy.token.get()
        }
    }))
})