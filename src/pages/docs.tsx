import { useModel } from 'umi'

export default function DocsPage() {
  const { counter, increment, decrement } = useModel('count')
  return (
    <div>
      <p>This is umi docs.</p>
      <div>
        <button onClick={decrement}>minus</button>
        <span className="mx-3">{counter}</span>
        <button onClick={increment}>plus</button>
      </div>
    </div>
  )
}
