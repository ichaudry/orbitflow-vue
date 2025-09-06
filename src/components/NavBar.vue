<template>
  <header class="sticky top-0 z-40 backdrop-blur bg-[#0b1020]/70 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-brand-600 grid place-items-center font-bold">OF</div>
        <span class="font-semibold tracking-wide">OrbitFlow</span>
      </div>
      <div class="ml-auto flex items-center gap-3">
        <input v-model="q" type="text" placeholder="Search OrbitFlow..." class="px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring focus:ring-brand-500/30 w-64" />
        <div v-if="auth.isLoggedIn" class="flex items-center gap-3">
          <span class="text-sm text-white/70">{{ auth.name }}</span>
          <button @click="auth.logout()" class="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
const q = ref('')
const auth = useAuthStore()
</script>
