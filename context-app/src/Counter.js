import React from 'react'
import { useReducer } from 'react'


// reducer funcyion :

function reducer (state, action)
{

    switch (action.type){
        case "increament":
            return{count: state.count + 1}
        case "decreament":
            return {count: state.count - 1}
        
        case "reset":
            return {count: 0}
        
        default:
            return state;
    }
};
const Counter = () => {
    const [count, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h2>  count: {count.count}</h2>
      <button onClick={() =>dispatch({type:"increament"})}>Increament +</button>
      <button onClick={() =>dispatch({type:"decreament"})}>Decreament -</button>
      <button onClick={() =>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Counter
