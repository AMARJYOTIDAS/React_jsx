import BottomNavbar from "./Common/BottomNavbar";
import TopNavbar from "./Common/TopNavbar";
import HeroSection from "./Components/HeroSection";
import OurService from "./Components/OurService";
import MorServices from "./Components/MorServices";
import DownloadApp from "./Components/DownloadApp";
import FeedBack from "./Components/FeedBack";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import FindDisease from "./DoctorComponent/FindDisease";
import Medicines from "./Common/Medicine";

function App() {
  return (
    <div className="wrap-anywhere bg-blue-200">
      <BottomNavbar />
      <TopNavbar />
      <HeroSection />
      <OurService />
      <MorServices />
      <DownloadApp />
      <FindDisease />
      <Medicines />
      <FeedBack />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
