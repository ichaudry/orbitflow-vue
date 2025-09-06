<template>
  <div class="grid lg:grid-cols-[1fr_300px] gap-6">
    <div class="space-y-4">
      <NewPostForm @publish="publish" />
      <PostCard v-for="p in posts.list" :key="p.id" :post="p" />
    </div>
    <aside class="space-y-4">
      <div class="card p-5">
        <h3 class="font-semibold mb-2">Trending topics</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in topics" :key="t" class="px-2 py-0.5 rounded-full text-xs bg-white/10 border border-white/10">#{{ t }}</span>
        </div>
      </div>
      <div class="card p-5">
        <h3 class="font-semibold mb-2">Who to follow</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="u in whoToFollow" :key="u.handle" class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/10 grid place-items-center text-xs">{{ u.avatar }}</div>
            <div class="flex-1">
              <div class="font-medium">{{ u.name }}</div>
              <div class="text-white/50">{{ u.handle }}</div>
            </div>
            <button class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">Follow</button>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { usePostsStore } from '../stores/posts'
import NewPostForm from '../components/NewPostForm.vue'
import PostCard from '../components/PostCard.vue'

const posts = usePostsStore()
const auth = useAuthStore()

const topics = ['architecture','realtime','design','tailwind','postgres','performance','security']
const whoToFollow = [
  { name: 'Noah Ortiz', handle: '@noaho', avatar: 'NO' },
  { name: 'Sara Malik', handle: '@saram', avatar: 'SM' },
  { name: 'Kenji Sato', handle: '@kenjis', avatar: 'KS' },
]

function publish({ title, content, tags }) {
  posts.addPost({ title, content, tags, author: auth.user })
}
</script>
