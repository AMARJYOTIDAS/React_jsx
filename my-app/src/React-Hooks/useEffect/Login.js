import React, { useState, useEffect } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("User Logged In");
    }
  }, [isLoggedIn]);

  return (
    <div style={{ alignContent:"center",textAlign:"center",backgroundColor:"lightsalmon" }}>
      <h2 style={{fontSize:30, }}>Login System</h2>

      <button  style={{backgroundColor:"grey" }} onClick={() => setIsLoggedIn(true)}> Login </button>

      <button onClick={() => setIsLoggedIn(false)}>Logout </button>

      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Login;