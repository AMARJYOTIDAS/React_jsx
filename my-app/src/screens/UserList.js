import React from 'react'

    const UserList = () =>{
        let data = [

          {  name: "rahul",
            email: "abc@gmail.com",
            roll: 1
          },
        {
          
            name: "stark",
            email: "abc@gmail.com",
            roll: 2
        },
         {
            name: "ca",
            email: "abc@gmail.com",
            roll: 3
         },
    ]
    
  return (
    <div>
      {data.map(({name, email, roll}) =>{

        return(
            <div>
                <h1>{name}</h1>
                <p> {email} </p>
                <h2> {roll}</h2>
            </div>
        )
            
      })}
    </div>
  )
}

export default UserList
