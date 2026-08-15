import React from 'react'
import { useRef, useState } from 'react'
const StoreValue = () => { 
    const countRef = useRef(0)

    const [stateCount, setStateCount] = useState(0);

    const increaseRef = () =>{

        countRef.current++;
        console.log("ref count:", countRef.current)
    }

    const increaseState = () => {

        setStateCount(stateCount + 1)
    }
    //  it render & increment the count

  return (
    <div>
      <h2>state Count : {stateCount}</h2>
      <button onClick={increaseState}>increase State</button>
      <button onClick={increaseRef}> Increase Ref</button>
    </div>
  )
}

export default StoreValue
