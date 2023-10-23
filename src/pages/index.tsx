import { defineComponent } from 'vue'
import { useCounter } from '../stores/counter'

export default defineComponent({
  setup() {
    const counter = useCounter()
    return () => (
      <div>
        <h2>Yay! Welcome to umi ❤️ vue!</h2>
        <p>
          <img src={require('../assets/yay.jpg')} width="388" />
        </p>
        <p>
          To get started, edit <code>pages/index.vue</code> and save to reload.
        </p>
        <div>
          <button onClick={counter.decrement}>minus</button>
          <span class="mx-3">{counter.count}</span>
          <button onClick={counter.increment}>plus</button>
        </div>
      </div>
    )
  },
})
