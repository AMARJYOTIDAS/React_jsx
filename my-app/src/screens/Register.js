import React from 'react'


    const Register = () =>{

      function handleRegister(e){
           e.preventDeafult(e) //it handles the auto reload case..
            console.log("hello world")
          }  
          let age = 5
          const email = "amar@gmail.com"

  return (
   
   <form>
   {age > 18 && email == "amar@gmal.com"  ? (
      <div>
          <input type='email' placeholder='enter email'></input>
          <button onClick={handleRegister} style={{cursor: 'pointer'}}>submit</button>
      </div>
   ) : (
    <p>you are 18+</p>
   )}
   </form>
  )
  
}
Register()

export default Register
