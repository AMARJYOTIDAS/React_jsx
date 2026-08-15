import { useState } from "react";
import react from "react";
// import './App.css'
import Health from "./Components/Health";
import OurServices from "./Components/Ourservice";
import MorServices from "./Components/MorServices";
import DownloadApp from "./Components/DownloadApp";
import FeedBack from "./Components/FeedBack";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Health />
      <OurServices />
      <MorServices />
      <DownloadApp />
      <FeedBack />
      <Article />
      <Footer />
    </>
  );
}

export default App;
