import React from "react";
// import NavLink from "react-router-dom";
const BottomNavbar = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 px-16">
        <div className=" flex justify-center items-center">
          <span>
            <img
              src="https://www.debsaipl.in/static/media/logo.3972d7bb875cfd6b6a8cde6ad1f60c16.svg"
              alt="logo"
            />
          </span>
        </div>
        <div className="flex justify-center items-center list-none gap-22 text-black font-semibold">
          <a href="/">
            <li className="cursor-pointer hover:text-green-400">Home</li>
          </a>
          <a href="#food">
            <li className="cursor-pointer hover:text-green-400">About</li>
          </a>
          <a href="#service">
            <li className="cursor-pointer hover:text-green-400">Services</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-green-400">Contact</li>
          </a>
        </div>
        {/* <div> */}
        {/* <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li> */}
        {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li> */}
        {/* <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Service
              </NavLink>
            </li> */}
        {/* <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li> */}
        {/* </ul>
        </div> */}
      </div>
    </>
  );
};

export default BottomNavbar;
