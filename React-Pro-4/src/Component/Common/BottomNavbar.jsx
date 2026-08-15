import React from "react";

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
          <li className="cursor-pointer hover:text-green-400">Home</li>
          <li className="cursor-pointer hover:text-green-400">About</li>
          <li className="cursor-pointer hover:text-green-400">Services</li>
          <li className="cursor-pointer hover:text-green-400">Contact</li>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
