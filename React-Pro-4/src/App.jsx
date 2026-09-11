import TopNavbar from "./Component/Common/TopNavbar";
import BottomNavbar from "./Component/Common/BottomNavbar";
import HeroSection from "./Component/HomeComponent/HeroSection";
import FoodGrocery from "./Component/HomeComponent/FoodGrocery";
import Service from "./Component/HomeComponent/Service";
import Lookatour_num from "./Component/HomeComponent/Lookatour_num";

import MobileApp from "./Component/Common/MobileApp";
import Aboutus from "./Component/AboutComponent/Aboutus";
import Feedback from "./Component/HomeComponent/Feedback ";
import Subscribe from "./Component/HomeComponent/Subscribe";
import ZeroSection from "./Component/HomeComponent/ZeroSection";
import BottomZero from "./Component/Common/BottomZero";
import Starter from "./Component/HomeComponent/Starter";

function App() {
  return (
    <div className="wrap">
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <FoodGrocery />
      <Starter />
      <Service />
      <Lookatour_num />
      <MobileApp />
      <Aboutus />
      <Feedback />
      <Subscribe />
      <ZeroSection />
      <BottomZero />
    </div>
  );
}

export default App;
