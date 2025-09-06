<template>
  <article class="card p-5 space-y-3">
    <header class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-brand-700 grid place-items-center text-sm font-semibold">{{ post.author.avatar }}</div>
      <div>
        <div class="font-medium leading-tight">{{ post.author.name }}</div>
        <div class="text-xs text-white/50">{{ post.author.handle }} • {{ timeAgo }}</div>
      </div>
    </header>
    <h3 class="text-lg font-semibold">{{ post.title }}</h3>
    <p class="text-white/80">{{ post.content }}</p>
    <footer class="flex items-center gap-4 text-sm text-white/60">
      <span>♥ {{ post.likes }}</span>
      <span>💬 {{ post.comments }}</span>
      <div class="ml-auto flex gap-2">
        <span v-for="t in post.tags" :key="t" class="px-2 py-0.5 rounded-full text-xs bg-white/10 border border-white/10">#{{ t }}</span>
      </div>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ post: Object })
const timeAgo = computed(() => {
  const diff = Date.now() - props.post.createdAt
  const h = Math.floor(diff / 3_600_000)
  if (h < 1) return 'just now'
  if (h < 24) return h + 'h'
  const d = Math.floor(h / 24)
  return d + 'd'
})
</script>
