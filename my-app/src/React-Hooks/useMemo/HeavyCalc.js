import React from 'react'
import { useMemo, useState } from 'react'

const HeavyCalc = () => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState("")

    const HeavyCalculation = (n) =>{
        console.log ("Heavy")
        for(let i =0; i < 100000000; i++){
            return n*2
        } 
        
    }

    const result = useMemo(() =>HeavyCalculation(num),[num])
    
  return (
    <div>
      <h2>Result : {result}</h2>
      <p>Text :{text}</p>
      <button onClick={() => setNum(num + 1)}> Increase Number</button>
      <input value={text} onChange={(e)=> setText(e.target.value)} 
      placeholder='type here'/>
    </div>
  )
}

export default HeavyCalc
