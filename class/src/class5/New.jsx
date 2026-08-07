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
            return state.filter((item,id) => id !== action.payload); 
        }
        else if(action.type=="edit"){
            

    }
    let lis=['sdbiq','qiefdhoq']
    let [state,dispatch]=useReducer(reducer,lis)

    const styles = {
        container: {
            maxWidth: '420px',
            margin: '40px auto',
            padding: '24px',
            border: '1px solid #d1d5db',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            backgroundColor: '#fff',
            fontFamily: 'Arial, sans-serif'
        },
        input: {
            width: '100%',
            boxSizing: 'border-box',
            padding: '10px 12px',
            marginBottom: '12px',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            outline: 'none',
            fontSize: '16px'
        },
        addButton: {
            padding: '10px 14px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#2563eb',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
            marginBottom: '16px'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '10px'
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '10px 12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#f8fafc'
        },
        deleteButton: {
            padding: '8px 10px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#ef4444',
            color: '#fff',
            cursor: 'pointer'
        }
    }

  return (
    <div style={styles.container}>
        <input id='txt' type="text" placeholder="Enter item" style={styles.input} />
        <button onClick={()=>dispatch({type:"add"})} style={styles.addButton}>add to list</button>
        <ul style={styles.list}>
            {state.map((tast,index)=>{ 
                return (
                    <li key={tast} style={styles.item}>
                        <span>{tast}</span>
                        <button onClick={()=>dispatch({type:"del",payload: index})} style={styles.deleteButton}>␡</button>
                        <button onClick={()=>dispatch({type:"edit",payload: tast})} style={styles.deleteButton}>␡</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default New