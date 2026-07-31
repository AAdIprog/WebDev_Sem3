import { useState } from 'react'

const Q1 = () => {
  const [count, setCount] = useState(0)

  function increment() {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="assignment-card">
      <h2>Q1. Counter with Limit</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Q1