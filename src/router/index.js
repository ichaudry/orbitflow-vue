import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import LoginView from '../views/LoginView.vue'
import FeedView from '../views/FeedView.vue'
import NewPostView from '../views/NewPostView.vue'
import ChatView from '../views/ChatView.vue'

const routes = [
  { path: '/', redirect: '/feed' },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/feed', name: 'feed', component: FeedView, meta: { requiresAuth: true } },
  { path: '/new', name: 'new', component: NewPostView, meta: { requiresAuth: true } },
  { path: '/chat', name: 'chat', component: ChatView, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } }
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.name === 'login' && auth.isLoggedIn) {
    return { name: 'feed' }
  }
})

export default router
