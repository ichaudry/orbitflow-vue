import { defineStore } from 'pinia'

const LS_KEY = 'orbitflow:user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem(LS_KEY) || 'null')
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    name: (state) => state.user?.name || ''
  },
  actions: {
    login(name) {
      const user = { name, handle: '@' + name.toLowerCase().replace(/\s+/g,'') }
      this.user = user
      localStorage.setItem(LS_KEY, JSON.stringify(user))
    },
    logout() {
      this.user = null
      localStorage.removeItem(LS_KEY)
    }
  }
})
