import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const RunsDependecyChanges = () => {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        console.log(`count changes to ${count}`)
    }, [count]);
  return (
   <button onClick={() => setCount(count +1)}>{count}</button>
  )
}

export default RunsDependecyChanges
