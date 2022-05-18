import React from "react";
import HeroSection from '../components/HeroSection'
import ImproveSection from "../components/ImproveSection";
import QuoteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

const Home = () => {
  return(
    <div className="container main">
      <HeroSection />
      <ImproveSection />
      <QuoteSection />
      <ChiefsSection />
    </div>
  )
}

export default Home