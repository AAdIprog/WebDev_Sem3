
import Child from './Child'
import { useState } from 'react'
const New = () => {
    let [count, setCount] =useState(0)
  return (
    <div>
        <Child />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default New