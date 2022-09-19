<template>
    <div class="w-screen h-full bg-zinc-50">
        <div class="max-w-screen-2xl h-full mx-auto bg-white">
            <div class="max-w-7xl mx-auto">
                <Navigation />

                <slot />
            </div>

            <Footer />
        </div>
    </div>
</template>