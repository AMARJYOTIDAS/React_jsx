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
// import AboutPage from "./Component/AboutComponent/aboutpage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import HomePage from "./Component/AboutComponent/HomePage";
// import ServicePage from "./Component/AboutComponent/ServicePage";
// import ContactPage from "./Component/AboutComponent/ContactPage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //      path: "/",
  //     element: (
  //       <div className="">
  //         <TopNavbar />
  //         <BottomNavbar />
  //         <HomePage />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: (
  //       <div className="">
  //         <TopNavbar />
  //         <BottomNavbar />
  //         <AboutPage />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "/service",
  //     element: (
  //       <div className="">
  //         <TopNavbar />
  //         <BottomNavbar />
  //         <ServicePage />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "/contact",
  //     element: (
  //       <div className="">
  //         <TopNavbar />
  //         <BottomNavbar />
  //         <ContactPage />
  //       </div>
  //     ),
  //   },
  // ]);
  return (
    <>
      <div className="wrap">
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
        <ZeroSection />
        <BottomZero />
        {/* <AboutPage /> */}
        {/* <RouterProvider router={router} /> */}
      </div>
    </>
  );
}

export default App;
