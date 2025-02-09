import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';
import TiltedDiv from "../components/TiltedDiv";
import AboutSection2 from "../components/AboutSection2";
import Card from "../components/cardSection";

import WhoWeAreSection from "../components/whoWeAre";

const About = () => {
    return (
      <div>
        <Header />

        <WhoWeAreSection />
        <TiltedDiv/>
        <div className="inset-0 pt-[100vh] z-[-3] relative bg-about-bg2 bg-cover bg-center h-100 from-blue-800 to-blue-400 object-center">
          <Card/>
        </div>
       

   

      </div>
    );
  
};

export default transition(About); 
