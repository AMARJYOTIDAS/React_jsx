import { useState } from "react";
import TopNavbar from "./Component/Common/TopNavbar";
import BottomNavbar from "./Component/Common/BottomNavbar";
import HeroSection from "./Component/HomeComponent/HeroSection";
import FoodGrocery from "./Component/HomeComponent/FoodGrocery";
// import Home from "./Component/HomeComponent/Home";

function App() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <FoodGrocery />
    </>
  );
}

export default App;
