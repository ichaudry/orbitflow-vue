<template>
  <aside class="hidden md:flex flex-col gap-2 p-4 border-r border-white/10 bg-[#0d1230]">
    <router-link class="navbtn" to="/feed">Feed</router-link>
    <router-link class="navbtn" to="/new">New Post</router-link>
    <router-link class="navbtn" to="/chat">Chat</router-link>
    <div class="mt-auto text-xs text-white/50">© OrbitFlow</div>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.navbtn {
  @apply px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm;
}
</style>
