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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./Component/AboutComponent/HomePage";
import AboutPage from "./Component/AboutComponent/AboutPage";
import ServicePage from "./Component/AboutComponent/ServicePage";
import ContactPage from "./Component/AboutComponent/ContactPage";

// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <div className="">
//           <Root />
//           <HomePage />
//         </div>
//       ),
//     },
//     {
//       path: "/about",
//       element: (
//         <div className="">
//           <Root />
//           <AboutPage />
//         </div>
//       ),
//     },
//     {
//       path: "/service",
//       element: (
//         <div className="">
//           <Root />
//           <ServicePage />
//         </div>
//       ),
//     },
//     {
//       path: "/contact",
//       element: (
//         <div className="">
//           <Root />
//           <ContactPage />
//         </div>
//       ),
//     },
//   ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="HomePage" element={<HomePage />}></Route>
//       <Route path="AboutPage" element={<AboutPage />}></Route>
//       <Route path="ServicePage" element={<ServicePage />}></Route>
//       <Route path="ContactPage" element={<ContactPage />}></Route>
//     </Route>,
//   ),
// );
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
    {/* <RouterProvider router={router} /> */}
  </div>
);

export default App;
