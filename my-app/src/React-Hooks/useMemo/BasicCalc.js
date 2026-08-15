import React, { useState } from 'react'
import { useMemo } from 'react'

const BasicCalc = () => {

    const [count, setCount] = useState(0)
    const square = useMemo(() => {
        console.log("calculating")
        return count * count;
    },[count])
  return (
    <div>
      <h2>count :{count}</h2>
      <h2>square :{square}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default BasicCalc
