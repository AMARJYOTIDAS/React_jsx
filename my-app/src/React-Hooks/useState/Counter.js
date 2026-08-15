// import React from 'react'
// import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>Current count :{ count}</p>
        <button onClick={() => setCount(count + 1)}>
            increment
        </button>
         <button onClick={() => setCount(count - 1)}>
          Decreament
        </button>

    </div>
  )
}

export default Counter

// Hide password in hooks
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [showPassword, setPassword] = useState(false);
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Password Feild</h1>
      <input type={showPassword ? "text" : "password"} />

      <button
        style={{ borderRadius: "10px", transition: "0.5s" }}
        onClick={() => setPassword((prev) => !prev)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Counter;
