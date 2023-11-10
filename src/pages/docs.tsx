import { defineComponent } from 'vue'
import { useCounter } from '../stores'

export default defineComponent({
  setup() {
    const counter = useCounter()
    return () => (
      <div>
        <p>This is umi docs.</p>
        <div>
          <button onClick={counter.decrement}>minus</button>
          <span class="mx-3">{counter.count}</span>
          <button onClick={counter.increment}>plus</button>
        </div>
      </div>
    )
  },
})
