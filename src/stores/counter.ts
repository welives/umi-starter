import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    decrement() {
      this.count--
    },
    increment() {
      this.count++
    },
  },
})
