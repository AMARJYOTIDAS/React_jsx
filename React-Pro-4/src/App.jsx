import { useState } from "react";
import TopNavbar from "./Component/Common/TopNavbar";
import BottomNavbar from "./Component/Common/BottomNavbar";
import HeroSection from "./Component/HomeComponent/HeroSection";
import FoodGrocery from "./Component/HomeComponent/FoodGrocery";
import Service from "./Component/HomeComponent/Service";

function App() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <FoodGrocery />
      <Service />
    </>
  );
}

export default App;
