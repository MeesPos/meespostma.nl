import {defineNuxtPlugin, useRuntimeConfig} from "#app";

export default defineNuxtPlugin(nuxtApp => {
    console.log(useCookie('XSRF-TOKEN', {
        domain: 'api.meespostma.dev'
    }).value);

    const config = useRuntimeConfig()
    nuxtApp.provide('apiFetch', $fetch.create({
        baseURL: config.API_URL,
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value
        }
    }))
})