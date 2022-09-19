<template>
    <div class="w-screen min-h-screen bg-zinc-50">
        <div class="max-w-screen-2xl min-h-screen mx-auto bg-white">
            <div class="max-w-7xl mx-auto">
                <Navigation />

                <slot />
            </div>

            <Footer />
        </div>
    </div>
</template>