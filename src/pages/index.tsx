import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useCounter } from '../stores'
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
          <Button danger type="primary" icon={<MinusOutlined />} onClick={counter.decrement} />
          <span class="mx-3">{counter.count}</span>
          <Button type="primary" icon={<PlusOutlined />} onClick={counter.increment} />
        </div>
      </div>
    )
  },
})
