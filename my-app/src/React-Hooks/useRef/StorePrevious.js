import React from 'react'
import { useState, useEffect, useRef } from 'react'

const StorePrevious = () => {

      const [count, setCount] = useState(0);
      // this store the current count
      const prevCountRef = useRef(0);

      // it does't trigger re-render
      // value stored in .current
      // store previous value

      useEffect(() => {
        prevCountRef.current = count;
      },[count])
  // Ui render with new count 
  // then useEffect runs
  // it saves current count into prevcountRef()
  // so next render -> it becomes "Previous Value"
  return (
    <div>
      <h2>Current Count : {count}</h2>
      <h2>Previous Count : {prevCountRef.current}</h2>
      <button onClick={() => setCount(count +  1)}> Increase Count</button>
    </div>
  )
}

export default StorePrevious
