<template>
    <div class="card p-3 h-[72vh] overflow-auto">
        <h3 class="px-2 py-1 text-sm font-semibold text-white/70">Channels</h3>
        <ul class="space-y-1 mb-3">
            <li v-for="c in store.data.channels" :key="c.id">
                <button @click="store.open(c)" :class="btnClass(c)">{{ '# ' + c.name }}</button>
            </li>
        </ul>
        <h3 class="px-2 py-1 text-sm font-semibold text-white/70">Direct Messages</h3>
        <ul class="space-y-1">
            <li v-for="u in store.data.dms" :key="u.id">
                <button @click="store.open(u)" :class="btnClass(u)">{{ '• ' + u.name }}</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useChatStore } from '../stores/chat'
const store = useChatStore()
const btnClass = (t) => [
  'w-full text-left px-3 py-2 rounded-lg border',
  store.current.id === t.id ? 'bg-brand-600/20 border-brand-600/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
]
</script>