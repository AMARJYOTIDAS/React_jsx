import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
// import  {React, useState, useEffect} from 'react'

const RunsEveryRender = () => {

        const [count, setCount] = useState(0)

        useEffect(() =>{
            console.log ("component Render")
        })
  return (
    <div>
        <p>current Count : {count}</p>
        <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  )
}

export default RunsEveryRender
