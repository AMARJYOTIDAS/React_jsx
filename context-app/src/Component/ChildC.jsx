import React from 'react'
// import { UserContext } from '../App'

import { useContext } from 'react';
import {ThemeContext} from '../App'

const ChildC = () => {

    // const user = useContext(Theme);
    const {theme, setTheme} = useContext(ThemeContext);


    function handleClick(){
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (

    <div>
      <button onClick={handleClick}>
        Change Theme</button>
    </div>
  )
}

export default ChildC
