import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  let [count,setCount]=useState(0)
  let [apiData,SetApiData]=useState([])
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((q) => q.json())
    .then((data) => {
      console.log(data);
      SetApiData(data)
    });
}, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      {apiData.map((d,c)=>{
       return(<>
         <h2>{d.title}&nbsp;&nbsp;&nbsp;&nbsp;{d.id}</h2>
         <h3>{d.userId}</h3>
         </>
       )
      })}
    </div>
  )
}

export default App