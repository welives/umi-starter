import path from 'path'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'
import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    { path: '/vant', component: 'vant' },
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/model', '@umijs/plugins/dist/request'],
  tailwindcss: {},
  model: {},
  request: {},
  extraPostCSSPlugins: [
    postcsspxtoviewport8plugin({
      viewportWidth: (file: string) => {
        return path.resolve(file).includes(path.join('node_modules', 'react-vant')) ? 375 : 750
      },
      unitPrecision: 6,
      landscapeWidth: 1024,
    }),
  ],
})
