const TopNavbar = () => {
  return (
    <section id="navbar" className=" text-black font-semibold bg-blue-200">
      <nav className="flex items-center justify-between mt-10 px-20">
        <div className="flex item-center gap-2">
          <span className="text-white font-bold text-lg w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            T
          </span>
          <h3>Dr.Strange</h3>
        </div>

        <ul className="flex items-center gap-8 font-medium ">
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
            <a href="#"></a>
            About us
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default TopNavbar;
