import React from "react";
import HeroSection from "../HomeComponent/HeroSection";
import ZeroSection from "../HomeComponent/ZeroSection";
import Feedback from "../HomeComponent/Feedback ";
import FoodGrocery from "../HomeComponent/FoodGrocery";
import Lookatour_num from "../HomeComponent/Lookatour_num";
import Service from "../HomeComponent/Service";
import Subscribe from "../HomeComponent/Subscribe";
import MobileApp from "../Common/MobileApp";
import BottomZero from "../Common/BottomZero";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ZeroSection />
      <Feedback />
      <FoodGrocery />
      <Lookatour_num />
      <Service />
      <Subscribe />
      <MobileApp />
      <BottomZero />
    </div>
  );
};

export default HomePage;
