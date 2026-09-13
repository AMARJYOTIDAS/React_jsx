import TopNavbar from "./Common/TopNavbar";
import HeroSection from "./Components/HeroSection";
import OurService from "./Components/OurService";
import MorServices from "./Components/MorServices";
import DownloadApp from "./Components/DownloadApp";
import FeedBack from "./Components/FeedBack";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import Snapp from "./Components/Snapp";

function App() {
  return (
    <div className="wrap-anywhere bg-blue-200">
      ;
      <TopNavbar />
      <HeroSection />
      <OurService />
      <MorServices />
      <DownloadApp />
      <FeedBack />
      <Snapp />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
