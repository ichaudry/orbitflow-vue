# OrbitFlow — Social Media Dashboard (Vue 3 + Vite + TailwindCSS)

A portfolio-ready social dashboard with mock login, feed (create/read posts), and chat.
Component-based, clean dark UI, and deployable to GitHub Pages.

## Quickstart
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` — local dev
- `npm run build` — production build
- `npm run preview` — preview the build

## GitHub Pages
- For **user/organization** pages (e.g., `ichaudry.github.io`), leave base as `/`.
- For **project** pages (e.g., `ichaudry.github.io/orbitflow`), set base by creating `.env` with:
  ```
  VITE_BASE=/orbitflow/
  ```
  Or edit `vite.config.js` and change `base` to `'/orbitflow/'`.

### Deploy via GitHub Actions
1. Create a repository and push (see commit plan below).
2. Enable Pages: Settings → Pages → Build from GitHub Actions.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on push to `main`.

## Mock Auth
- Username-only login; stored in `localStorage`.
- Route guards for protected routes.

## Tech
- Vue 3 (Composition API), Vue Router, Pinia, TailwindCSS, Vite

## Commit Plan (copy-pasteable)
```bash
git init
git add .
git commit -m "chore: scaffold Vite + Vue + Tailwind for OrbitFlow dashboard"

git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main

# docs & structure
git add README.md
git commit -m "docs: add quickstart, deploy steps, commit plan"
git push

# auth
git add src/stores/auth.js src/views/LoginView.vue src/router/index.js
git commit -m "feat(auth): add mock login + route guards"
git push

# feed & posts
git add src/stores/posts.js src/components/PostCard.vue src/components/NewPostForm.vue src/views/FeedView.vue src/views/NewPostView.vue
git commit -m "feat(posts): feed list + create post with localStorage persistence"
git push

# chat
git add src/stores/chat.js src/components/ChatList.vue src/components/ChatWindow.vue src/views/ChatView.vue
git commit -m "feat(chat): basic DM channels and messaging with seed data"
git push

# layout polish
git add src/components/NavBar.vue src/components/SideBar.vue src/App.vue src/index.css
git commit -m "style(ui): dark dashboard layout, navbar, sidebar, brand styling"
git push
```

---
**Brand**: OrbitFlow — “where ideas orbit and connect.”
Use this as a realistic demo brand across UI copy.
