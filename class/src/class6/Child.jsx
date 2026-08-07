import  { useMemo } from 'react'

const Child = () => {
    let data = useMemo(() => {
        let res=0;
        for(let i=0; i<10000000000000000000000000000000000; i++){
            res+=i;
        }
        return res;
    }, [])
  return (
    <div>
        <h3>{data}</h3>
    </div>
  )
}

export default Child