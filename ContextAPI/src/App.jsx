import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>react from amar</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
