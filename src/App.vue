<template>
    <div class="min-h-screen grid grid-cols-[260px_1fr]">
        <SideBar />

        <div class="flex flex-col">
            <NavBar />
            <main class="p-6">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
</script>