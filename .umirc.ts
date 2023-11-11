import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index', name: 'Home' },
    { path: '/docs', component: 'docs', name: 'Docs' },
  ],
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/antd',
  ],
  tailwindcss: {},
  model: {},
  request: {},
  antd: {},
})
