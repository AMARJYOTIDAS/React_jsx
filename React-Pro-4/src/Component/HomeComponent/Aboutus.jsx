import React from "react";
import img13 from "../../assets/img13.png";

const Aboutus = () => {
  return (
    <>
      <div className="">
        <div className=" flex flex-col justify-between items-center gap-3 font-sans">
          <img src={img13} alt="" />
          {/* <img
          src="https://www.debsaipl.in/static/media/food.af1d5305eccbdb1454c5.png"
          alt=""
        />
        <img
          src="https://www.debsaipl.in/static/media/delivery.d4a37197ac1d532642b5.png"
          alt=""
        /> */}
          <h1 className="font-bold text-3xl">What Customers Say About us</h1>
          <p className="max-w-4xl text-center font-normal text-black">
            "What Customers Say About Us" reflects genuine feedback,
            highlighting our commitment to excellence, reliable service, and
            customer satisfaction through testimonials from those who trust and
            value our solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
