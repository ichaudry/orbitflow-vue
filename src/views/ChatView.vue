<template>
  <div class="grid lg:grid-cols-[280px_1fr] gap-6">
    <ChatList />
    <ChatWindow />
  </div>
</template>

<script setup>
import ChatList from '../components/ChatList.vue'
import ChatWindow from '../components/ChatWindow.vue'
</script>
