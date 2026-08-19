import React from "react";

const Service = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-12 gap-6 font-sans">
        <h1 className="font-bold text-4xl ">What We Provide</h1>
        <p className="max-w-4xl text-2xl text-center">
          Our customer service team serves as the primary bridge between our
          business and our valued clients, dedicated to delivering fast,
          empathetic, and accurate support at every stage of the buyer's
          journey.
        </p>
      </div>
      <div className=" flex justify-between items-center mt-2 px-7 font-sans">
        <div className="">
          <img
            src="src\assets\22bfc64062ff61edb0d7024aa75c9412db5c8587.png"
            alt="Fast Delivery"
          />
          <p>
            We provide the best delivery service. Your service agent provide you
            to fast delivery option without damaging or anyother issue We can't
            provide the return policy, if the fault is your
          </p>
        </div>
        <div className="">
          <img
            src="src\assets\5963c54101d7998df1094620cbd7156dd1b63ab4.png"
            alt="24/7 support"
          />
          <p>
            We provide the best delivery service. Your service agent provide you
            to fast delivery option without damaging or anyother issue We can't
            provide the return policy, if the fault is your
          </p>
        </div>
        <div className="">
          <img
            src="src\assets\bf9c61185bd424cef470ecf44dd47428babd75e7.png"
            alt="easy to use"
          />
          <p>
            We provide the best delivery service. Your service agent provide you
            to fast delivery option without damaging or anyother issue We can't
            provide the return policy, if the fault is your
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
