import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';
import TiltedDiv from "../components/TiltedDiv";

import WhoWeAreSection from "../components/whoWeAre";

const About = () => {
    return (
      <div>
        <Header />

        <WhoWeAreSection />
        <TiltedDiv/>

      </div>
    );
  
};

export default transition(About); 
