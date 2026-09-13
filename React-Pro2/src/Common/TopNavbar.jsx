const TopNavbar = () => {
  return (
    <section
      id="navbar"
      className=" text-black font-semibold bg-blue-200 fixed top-0 left-0 w-full shadow-md z-50"
    >
      <nav className="flex items-center justify-between mt-5 px-20 py-2">
        <div className="flex item-center gap-2">
          <span className="text-white font-bold text-lg w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            T
          </span>
          <h3>Dr.Strange</h3>
        </div>

        <ul className=" flex justify-end ml-auto gap-8 font-medium text-shadow-2xs ">
          <li className="cursor-pointer  hover:text-blue-600 transition rounded-sm">
            <a href="#" />
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            <a href="#ourservice">Find a docter</a>
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Apps
          </li>
          <li className="cursor-pointer  hover:text-blue-600 transition">
            Testimonials
          </li>
          <li className="cursor-pointer  hover:text-blue-600 transition">
            About us
          </li>
        </ul>
        <div className=" px-1 ml-10 text-white">
          <button
            className="cursor-pointer font-bold bg-blue-600 px-2 py-2 "
            type="submit"
          >
            Login
          </button>
        </div>
      </nav>
    </section>
  );
};

export default TopNavbar;
