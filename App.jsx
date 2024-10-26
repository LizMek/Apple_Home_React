import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import SixthSection from "./components/SixthSection/SixthSection";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";
import "./components/YoutubeVideos/YoutubeVideos.css";


function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeVideos />
      <Footer />
    </>
  );

}

export default App;
