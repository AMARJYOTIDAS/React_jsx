import React from "react";
// import NavLink from "react-router-dom";
// import { Link } from "react-router-dom";
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
              <a href="/home">Home</a>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <a href="#service">Service</a>
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BottomNavbar;
