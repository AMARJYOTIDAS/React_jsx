import { useState } from "react";
import TopNavbar from "./Component/Common/TopNavbar";
import BottomNavbar from "./Component/Common/BottomNavbar";
import HeroSection from "./Component/HomeComponent/HeroSection";
import FoodGrocery from "./Component/HomeComponent/FoodGrocery";
import Service from "./Component/HomeComponent/Service";
import Lookatour_num from "./Component/HomeComponent/Lookatour_num";

import MobileApp from "./Component/Common/MobileApp";
import Aboutus from "./Component/HomeComponent/Aboutus";
import Feedback from "./Component/HomeComponent/Feedback ";
import Subscribe from "./Component/AboutComponent/Subscribe";

function App() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <FoodGrocery />
      <Service />
      <Lookatour_num />
      <MobileApp />
      <Aboutus />
      <Feedback />
      <Subscribe />
    </>
  );
}

export default App;
