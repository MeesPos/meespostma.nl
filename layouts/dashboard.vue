<template>
    <div class="min-h-screen bg-zinc-50 dark:bg-black dark:text-white">
        <div class="max-w-screen-2xl min-h-screen mx-auto bg-white dark:bg-zinc-900">
            <div class="max-w-7xl mx-auto">
                <Navigation />

                <slot />
            </div>
 
            <Footer />
        </div>
    </div>
</template>