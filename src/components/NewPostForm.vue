<template>
  <form @submit.prevent="submit" class="card p-5 space-y-4">
    <h3 class="text-lg font-semibold">Create a new post</h3>
    <input v-model="title" type="text" placeholder="Title" class="input" required />
    <textarea v-model="content" rows="5" placeholder="Share your thoughts..." class="input resize-y" required></textarea>
    <input v-model="tags" type="text" placeholder="Tags (comma separated)" class="input" />
    <div class="flex justify-end">
      <button class="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500">Publish</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['publish'])

const title = ref('')
const content = ref('')
const tags = ref('')

function submit() {
  emit('publish', { title: title.value, content: content.value, tags: tags.value.split(',').map(t=>t.trim()).filter(Boolean) })
  title.value = ''
  content.value = ''
  tags.value = ''
}
</script>

<style scoped>
.input { @apply w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring focus:ring-brand-500/30; }
</style>
