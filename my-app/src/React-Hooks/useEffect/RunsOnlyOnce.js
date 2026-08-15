// import React from 'react'
// import { useEffect } from 'react'

// const RunsOnlyOnce = () => {
  
//     useEffect(() =>{

//          fetch("https://jsonplaceholder.typicode.com/users")
//    .then((res) => res.json())
//    .then((data) => console.log(data))

//   }, [])

//   return (
//    <h1>User</h1>
//   )
// }

// export default RunsOnlyOnce

import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
// import  {React, useState, useEffect} from 'react'

const RunsOnlyOnce = () => {
        
        const [count, setCount] = useState(0)

        useEffect(() =>{
             fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
           .then((data) => console.log(data))

        }, [])
  return (
    <div>
        <p>current Count : {count}</p>
        <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  )
}

export default RunsOnlyOnce

