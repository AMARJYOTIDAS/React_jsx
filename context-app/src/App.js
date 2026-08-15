// import './App.css';
// import { createContext, useState, Provider} from 'react'
// import ChildA from './Component/ChildA';

// // Step -1 create context
// const UserContext = createContext();

// // step-2 wrap all the child inside a provider

// // step-3 : pass the value.s

// // step-4 : consume the value in the respective place
// function App() {

//   const [user, setUser] = useState({name:"web"})
//   return (
//     <UserContext.Provider value={user}>
//       <ChildA />
//     </UserContext.Provider>
//   )
// }

// export default App;
// export {UserContext};

import React, { useState } from 'react'
import './App.css';
import Counter from './Counter';
// import { createContext, useContext } from 'react'
// import ChildA from './Component/ChildA'

// const ThemeContext = createContext();

const App = () => {

  // const [theme, setTheme] = useState('light')
  return (
      // <ThemeContext.Provider value={{theme, setTheme}}>
      // <div id='container' style={{backgroundColor: theme === 'light'? 'beige':'black'}}>
      // <ChildA />
      // </div>

      // </ThemeContext.Provider>

      <div>

        <Counter />
      </div>
  )
}

export default App
// export  {ThemeContext}

 
