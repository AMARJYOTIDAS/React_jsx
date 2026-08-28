import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    ),
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <NavBar /> */}
    </>
  );
};

export default App;
