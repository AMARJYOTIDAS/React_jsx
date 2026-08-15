import React from 'react'
import { useState,useCallback } from 'react'
const Counter = () => {

    const  [count, setCount] = useState(0);

    const handleClick = useCallback(() =>{
        console.log("button clicked")
    },[])
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button onClick={() =>setCount(count + 1)}> Increase {count}</button>
    </div>
  )
}

export default Counter
