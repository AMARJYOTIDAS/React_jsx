import React from 'react'
import { useRef } from 'react'

const AccessDomElement = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus()
         
    }
    //it is a prebuild function that focus on a point
    //.current is a container
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter name'/>
      <button onClick={handleFocus}> Focus Input</button>
    </div>
  )
}

export default AccessDomElement
