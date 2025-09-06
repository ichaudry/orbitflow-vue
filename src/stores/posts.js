import { defineStore } from 'pinia'
import { nanoid } from '../utils/nanoid'
const LS_KEY = 'orbitflow:posts'

const seed = [
  {
    id: 'p1',
    author: { name: 'Isha Khan', handle: '@ishak', avatar: 'IK' },
    createdAt: Date.now() - 1000*60*60*5,
    title: 'Keynote snippets: Scaling realtime chat',
    content: 'Sharing notes from today\'s talk on WebSocket backpressure, sharding, and fan-out. Slides in comments.',
    likes: 42,
    comments: 7,
    tags: ['architecture','realtime']
  },
  {
    id: 'p2',
    author: { name: 'Ravi Patel', handle: '@ravip', avatar: 'RP' },
    createdAt: Date.now() - 1000*60*60*24,
    title: 'Design token cleanup',
    content: 'Refactored our Tailwind theme to separate semantic tokens from raw scales. Dark mode is buttery now.',
    likes: 27,
    comments: 3,
    tags: ['design','tailwind']
  },
  {
    id: 'p3',
    author: { name: 'Emily Chen', handle: '@emilyc', avatar: 'EC' },
    createdAt: Date.now() - 1000*60*60*30,
    title: 'Postgres tip',
    content: 'Use partial indexes for hot paths you filter on 90%+ of the time. Cut query time by 70%.',
    likes: 58,
    comments: 12,
    tags: ['postgres','tips']
  }
]

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: JSON.parse(localStorage.getItem(LS_KEY) || 'null') || seed
  }),
  getters: {
    list: (state) => [...state.posts].sort((a,b) => b.createdAt - a.createdAt)
  },
  actions: {
    addPost({ title, content, author, tags=[] }) {
      const newPost = {
        id: nanoid(),
        author: { name: author.name, handle: author.handle, avatar: author.name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase() },
        createdAt: Date.now(),
        title, content, likes: 0, comments: 0, tags
      }
      this.posts.unshift(newPost)
      localStorage.setItem(LS_KEY, JSON.stringify(this.posts))
      return newPost
    }
  }
})
