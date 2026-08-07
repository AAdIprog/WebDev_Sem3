import { useReducer } from 'react'


const App = () => {
  function reduser(count,action){
    if(action.type=="add"){
      return count+1
    }
    else if(action.type=="sub"){
      return count-1
    }
    else if(action.type=="res"){
      return 0
    }
    
    }
  let [count,dispatch]=useReducer(reduser,0)
  return (

    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"add"})}>Add</button>
      <button onClick={()=>dispatch({type:"sub"})}>sub</button>
      <button onClick={()=>dispatch({type:"res"})}>res</button>
    </div>
  )
}

export default App