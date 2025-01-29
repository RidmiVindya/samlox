import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';
import TiltedDiv from "../components/TiltedDiv";
import AboutSection2 from "../components/AboutSection2";

import WhoWeAreSection from "../components/whoWeAre";

const About = () => {
    return (
      <div>
        <Header />

        <WhoWeAreSection />
        <TiltedDiv/>
        <div className="inset-0 bg-about-bg2 bg-cover bg-center h-96 from-blue-800 to-blue-400">
            <AboutSection2
              avatar="https://your-image-url.com/avatar1.png" 
              title="WHAT WE DO"
              description="At Samlox, we specialize in Roblox game development, turning your visions into virtual realities. Our skilled team crafts immersive experiences, ensuring every line of code tells a captivating story."
          />
          <AboutSection2
              avatar="https://your-image-url.com/avatar2.png" 
              title="WHAT WE DO"
              description="At Samlox, we specialize in Roblox game development, turning your visions into virtual realities. Our skilled team crafts immersive experiences, ensuring every line of code tells a captivating story."
          />

        </div>
       

   

      </div>
    );
  
};

export default transition(About); 
