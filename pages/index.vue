<template>
    <main>
        <div class="flex flex-row gap-48 items-center my-12">
            <div class="flex-initial">
                <h2 class="text-4xl font-medium">Software developer, enthousiaste reiziger en nog iets in te vullen.</h2>

                <p class="leading-6 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis dolor a nisl venenatis lobortis.
                    Fusce lacinia tempus mauris, a faucibus elit tristique quis. Vestibulum sagittis purus vel augue rutrum,
                    eget euismod sem hendrerit. Etiam blandit lectus eu mi molestie sagittis. Sed lobortis porttitor dolor,
                    vitae tempor ex suscipit eu</p>

                <NuxtLink to="/about-me">
                    <Button title="Over mij"
                            class="mt-6"
                    />
                </NuxtLink>
            </div>

            <div class="flex-none">
                <img src="assets/mees.jpeg"
                    class="rounded-md h-96 w-96 object-cover"
                />
            </div>
        </div>

        <div>

        </div>
        <!-- Projects -->
    </main>
</template>

<script setup>
    const projects = [
        {
            logo: '',
            title: '',
            description: '',
            url: ''
        },
        {
            logo: '',
            title: '',
            description: '',
            url: ''
        },
        {
            logo: '',
            title: '',
            description: '',
            url: ''
        }
    ];
</script>