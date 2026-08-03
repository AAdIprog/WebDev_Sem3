import { useReducer } from 'react'

const New = () => {
    function reducer(state,action){
        if(action.type=="add")
        {
            let i=document.getElementById('txt').value;
            if(i!=""){
            return [...state, i];
            }
            return state;
        }
        else if(action.type=="del"){
            return state.filter((item) => item !== action.payload); 
        }

    }
    let lis=['sdbiq','qiefdhoq']
    let [state,dispatch]=useReducer(reducer,lis)

  return (
    <div>
        <input id='txt' type="text" />
        <button onClick={()=>dispatch({type:"add"})}>add to list</button>
        <ul>
            {state.map((tast)=>{ 
                return <>
                <li>{tast}</li>
                <button onClick={()=>dispatch({type:"del",payload: tast})}>␡delete</button>
                </>
            })}
        </ul>
    </div>
  )
}

export default New