<template>
    <form @submit.prevent="login">
        <pre>{{ errors }}</pre>
        <div>
            <label for="email">E-mailadres</label>
            <input type="text" id="email" v-model="email" />
        </div>

        <div>
            <label for="password">Wachtwoord</label>
            <input type="password" id="password" v-model="password" />
        </div>

        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
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
                    console.log(err.data);
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