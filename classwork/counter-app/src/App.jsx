import React from 'react'
import {useState} from 'react'

const App = () => {
  function fun1(){
    SetCount(0)
    SetColor("teal")
  }
  let [count,SetCount]=useState(0)
  let [color,SetColor]=useState("red")
  return (
    <div style={{backgroundColor:color, height:"1000vh"}}>
      <h1>{count}</h1>
      <button onClick={()=>SetCount(count+1)}>+</button>
      <button onClick={()=>SetCount(count-1)}>-</button>
      <button onClick={()=>SetCount(count=0)}>0</button>
      <button onClick={fun1}>very krazy</button>
      <button onClick={()=>SetColor("green")}>bgchange</button>
    </div>

  )
}

export default App