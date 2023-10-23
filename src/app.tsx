import { createPinia } from 'pinia'

export function onAppCreated({ app }: any) {
  const pinia = createPinia()
  app.use(pinia)
}
