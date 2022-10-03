<template>
    <div class="flex min-h-full">
        <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-8">
                    <div class="mt-6">
                        <form action="#" @submit.prevent="login" class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                                <div class="mt-1">
                                    <input id="email" name="email" v-model="email" type="email" autocomplete="email"
                                        required=""
                                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <div class="mt-1">
                                    <input id="password" v-model="password" name="password" type="password"
                                        autocomplete="current-password" required=""
                                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <Button type="submit" title="Sign In"
                                    class="w-full justify-center rounded-md border border-transparent">Sign
                                    in</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img class="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                alt="" />
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'auth'
    })

    const email = ref('');
    const password = ref('');
    const errors = ref([]);

    const { $auth } = useNuxtApp()

    async function login() {
        try {
            const login = await $auth.loginWith('local', {
                body: {
                    email: email.value,
                    password: password.value
                }
            }).catch(err => {
                if (err.data.title === 'Unauthorized') {
                    errors.value = err.data.title;
                } else {
                    errors.value = Object.values(err.data.errors).flat();
                }
            });

            if (typeof login !== 'undefined') {
                $auth.setUserToken(login.token);

                window.location.pathname = '/dashboard';
            }
        } catch (err) {
            errors.value = err;
        }
    }
</script>