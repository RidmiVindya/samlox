import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';

import WhoWeAreSection from "../components/whoWeAre";

const About = () => {
    return (
      <div>
        <Header />

        <WhoWeAreSection />
      </div>
    );
  
};

export default transition(About); 
