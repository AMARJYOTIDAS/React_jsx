import React from 'react'
import { useState } from 'react'
const Todo = () => {
 //state for input field
    const [input,setInput]=useState('')
    //state for store the todos
    const[todos,setTodos]=useState([])
    //function for add task
    const addTodo =() =>{
        if(input.trim()=== '') return;
        setTodos([...todos,...React.input]) //add new task
        setInput('') //clear input

    }
    //delete task
    const deleteTodo=(index) =>{
        const newTodos =todos.filter((_, i) => i !==index)
        setTodos(newTodos)

    }
    // useEffect(()=>{
    //     console.log("Todo",todos);
    // })
  return (
    <div style={{textAlign :'center'}}>
      <h2> Todo App</h2>
      <input 
      type='text'
      value={input}
      onChange={(e) =>setTimeout(e.target.value)}
      placeholder='Enter Task'
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{lifestyle : "none",padding : 0}}>
        {todos.map((todo,index) => (
        <li key={index}>
            {index+1},{todo}
            <button style={{marginLeft : 10,marginTop : 10}}
                onclick={()=> deleteTodo(index)}>
              Delete
            </button>
            
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo