import React from "react";
import img7 from "../Assets/img7.png";
import img8 from "../Assets/img8.png";
import img9 from "../Assets/img9.png";

const Article = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 mt-15 rounded-4xl mb-10">
      <div className=" flex flex-col items-center gap-8 mt-15 px-7">
        <h1 className="text-olive-900 text-2xl font-bold m- mx-auto">
          Check out our latest article
        </h1>
        <div className=" border-2 bg-black w-36 mx-auto"></div>
      </div>
      <section className="font-mono">
        <div className=" flex flex-row  justify-between mt-10 ">
          <div
            className=" flex flex-col items-center gap-1 border-1.5
           rounded-2xl border-mauve-800 shadow-2xl shadow-gray-800"
          >
            <img src={img7} alt="img7" className="h-64 w-96 rounded-3xl " />
            <h2 className=" font-semibold ">
              Disease detection, check up in the laboratory
            </h2>
            <p className="font-semibold font-5 max-w-3xs items-center ml-10 ">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <button className=" text-blue-400  items-center mt-5 cursor-pointer">
              Read More
            </button>
          </div>
          <div className="flex flex-col items-center gap-1 shadow-2xl shadow-gray-800 border-mauve-800 rounded-2xl">
            <img src={img8} alt="img7" className="h-64 w-96 rounded-3xl " />
            <h2 className="font-serif font-semibold ">
              Disease detection, check up in the laboratory
            </h2>
            <p className=" font-5 max-w-3xs items-center ml-10 ">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <button className=" text-blue-400  items-center mt-5 cursor-pointer">
              Read More
            </button>
          </div>
          <div className="flex flex-col items-center gap-1 shadow-2xl shadow-gray-800 border-mauve-800 rounded-2xl">
            <img src={img9} alt="img7" className="h-64 w-96 rounded-3xl " />
            <h2 className=" font-semibold ">
              Disease detection, check up in the laboratory
            </h2>
            <p className="font-semibold font-5 max-w-3xs items-center ml-10 ">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <button className=" text-blue-400  items-center mt-5 cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
