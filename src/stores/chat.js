import { defineStore } from 'pinia'
import { nanoid } from '../utils/nanoid'
const LS_KEY = 'orbitflow:chats'

const seed = {
  channels: [
    { id: 'c1', name: 'General', type: 'channel' },
    { id: 'c2', name: 'Frontend', type: 'channel' },
    { id: 'c3', name: 'Backend', type: 'channel' },
  ],
  dms: [
    { id: 'u1', name: 'Isha Khan', handle: '@ishak', type: 'dm' },
    { id: 'u2', name: 'Ravi Patel', handle: '@ravip', type: 'dm' },
    { id: 'u3', name: 'Emily Chen', handle: '@emilyc', type: 'dm' },
  ],
  messages: {
    'c1': [
      { id: 'm1', from: 'system', text: 'Welcome to OrbitFlow!', ts: Date.now()-1000*60*60*24*2 }
    ],
    'u1': [
      { id: 'm2', from: '@ishak', text: 'Ship day tomorrow. You in?', ts: Date.now()-1000*60*60*6 }
    ]
  }
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    data: JSON.parse(localStorage.getItem(LS_KEY) || 'null') || seed,
    current: { type: 'channel', id: 'c1' }
  }),
  getters: {
    currentMessages(state) {
      const key = state.current.id
      return state.data.messages[key] || []
    }
  },
  actions: {
    open(target) {
      this.current = target
    },
    send(fromHandle, text) {
      const key = this.current.id
      if (!this.data.messages[key]) this.data.messages[key] = []
      this.data.messages[key].push({ id: nanoid(), from: fromHandle, text, ts: Date.now() })
      localStorage.setItem(LS_KEY, JSON.stringify(this.data))
    }
  }
})
