import { useModel } from 'umi'
import yayJpg from '../assets/yay.jpg'

export default function HomePage() {
  const { counter, increment, decrement } = useModel('count')
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div>
        <button onClick={decrement}>minus</button>
        <span className="mx-3">{counter}</span>
        <button onClick={increment}>plus</button>
      </div>
    </div>
  )
}
