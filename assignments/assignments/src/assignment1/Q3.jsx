import { useState } from 'react'

function Display({ count }) {
  return <h3>Count: {count}</h3>
}

function Buttons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  )
}

const Q3 = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="assignment-card">
      <h2>Q3. Counter Split into Two Components</h2>
      <Display count={count} />
      <Buttons setCount={setCount} />
    </div>
  )
}

export default Q3