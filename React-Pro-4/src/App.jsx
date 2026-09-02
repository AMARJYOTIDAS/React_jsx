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
import AboutPage from "./Component/AboutComponent/AboutPage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import HomePage from "./Component/AboutComponent/HomePage";
// import ServicePage from "./Component/AboutComponent/ServicePage";
// import ContactPage from "./Component/AboutComponent/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BotOffIcon } from "lucide-react";
import ContactPage from "./Component/AboutComponent/ContactPage";
import ServicePage from "./Component/AboutComponent/ServicePage";

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
        {/* <BrowserRouter> */}
        {/* <Routes> */}
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

        {/* <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/ServicePage" element={<ServicePage />} /> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
        {/* <RouterProvider router={router} /> */}
      </div>
    </>
  );
}

export default App;
