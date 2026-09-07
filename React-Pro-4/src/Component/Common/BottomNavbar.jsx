import React from "react";
import NavLink, { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  return (
    <section id="BottomNavbar">
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
          <ul className="flex justify-center items-center gap-18 text-black font-semibold ">
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <NavLink
                to="/AboutPage"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <NavLink
                to="/ServicePage"
                className={({ isActive }) => (isActive ? "active:link" : "")}
              >
                Service
              </NavLink>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <NavLink
                to="/ContactPage"
                className={({ isActive }) => (isActive ? "active:link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BottomNavbar;
