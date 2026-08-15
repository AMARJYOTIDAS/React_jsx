import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosExample = () => {

    const [user, setUser] = useState([])
    //return data using axios

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            setUser(response.data)
        })
        .catch((error) =>{
            console.log("error:",error)
        })
    },[])

  return (
    <div style={{textAlign:"center"}}>
      <h1>User list</h1>
      {user.map((user) =>

        <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default AxiosExample
// - useEffect() runs when component loads
// - axios.get() fetches data from API
// - setUser() stores data in state
// - data3
 
