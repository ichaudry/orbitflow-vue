<template>
  <div class="min-h-[75vh] grid place-items-center">
    <form @submit.prevent="login" class="card p-6 w-full max-w-sm space-y-4">
      <h1 class="text-2xl font-semibold">Welcome to OrbitFlow</h1>
      <p class="text-white/70">Log in with a display name to continue.</p>
      <input v-model="name" type="text" placeholder="Your name" class="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring focus:ring-brand-500/30" required />
      <button class="w-full px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">Enter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const name = ref('')
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

function login() {
  auth.login(name.value.trim())
  router.push(route.query.redirect || '/feed')
}
</script>
