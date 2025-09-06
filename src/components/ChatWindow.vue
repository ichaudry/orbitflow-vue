<template>
  <div class="card p-4 h-[72vh] flex flex-col">
    <div class="flex-1 overflow-auto space-y-3">
      <div v-for="m in messages" :key="m.id" class="flex gap-2 items-start">
        <div class="w-8 h-8 rounded-full bg-white/10 grid place-items-center text-xs">{{ m.from.slice(1,3).toUpperCase() }}</div>
        <div>
          <div class="text-xs text-white/50">{{ m.from }} • {{ new Date(m.ts).toLocaleTimeString() }}</div>
          <div>{{ m.text }}</div>
        </div>
      </div>
    </div>
    <form @submit.prevent="send" class="mt-3 flex gap-2">
      <input v-model="text" placeholder="Message..." class="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring focus:ring-brand-500/30" />
      <button class="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useChatStore } from '../stores/chat'

const auth = useAuthStore()
const chat = useChatStore()
const text = ref('')
const messages = computed(() => chat.currentMessages)

function send() {
  if (!text.value.trim()) return
  chat.send(auth.user.handle, text.value.trim())
  text.value = ''
}
</script>
