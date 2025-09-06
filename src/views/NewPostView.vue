<template>
  <div class="max-w-2xl mx-auto">
    <NewPostForm @publish="publish" />
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { usePostsStore } from '../stores/posts'
import NewPostForm from '../components/NewPostForm.vue'
const posts = usePostsStore()
const auth = useAuthStore()
function publish({ title, content, tags }) {
  posts.addPost({ title, content, tags, author: auth.user })
}
</script>
