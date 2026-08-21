import React from "react";
import dev from "../../assets/dev.jpeg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const ZeroSection = () => {
  return (
    <div>
      <div className="">
        <img src={dev} alt="dev" />
        <p>
          Commercial Production Started And The Company Incorporated On February
          22, 2003.
        </p>
        <ul className="flex justify-between gap-3">
          <li>
            <FaFacebook size={10} />
          </li>
          <li>
            <FaInstagramSquare size={10} />
          </li>
          <li>
            <FaWhatsappSquare size={10} />
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default ZeroSection;
