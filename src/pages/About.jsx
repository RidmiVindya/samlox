import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';
import ContentBlock from "../components/ContentBlock";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Collaborators from "../components/Collaborators";

// Images
import player1Image from "../assets/AboutPage/player1.png";
// We use player1Image as a primary placeholder. 
// For diversity, we might want to mirror/rotate or filter it if we lack other assets, 
// but for now reusing it is consistent with "reuse images as placeholders".

const About = () => {
  return (
    <div className="bg-samlox-dark min-h-screen text-white overflow-hidden">
      <Header />

      {/* Background Overlay */}
      <div className="fixed inset-0 bg-about-bg bg-cover bg-center opacity-20 pointer-events-none z-0"></div>

      <div className="relative z-10 pt-10">
        {/* Who Are We */}
        <ContentBlock
          title="Who Are We"
          text="Ignite your gaming passion. Join a vibrant community of developers pushing boundaries and creating unforgettable experiences. Your journey into the world of game development starts here."
          image={player1Image}
          buttonText="Projects"
          showTypewriter={true}
        />

        {/* Separator / Divider Style */}
        <div className="h-1 bg-gradient-to-r from-transparent via-samlox-gold to-transparent w-3/4 mx-auto my-12 opacity-50"></div>

        {/* What We Do 1 */}
        <ContentBlock
          title="What We Do"
          text="At Samlox, we specialize in Roblox game development, turning your visions into virtual realities. Our skilled team crafts immersive experiences, ensuring every line of code tells a captivating story."
          image={player1Image} // Placeholder reuse
          imageLeft={true}
        />

        {/* What We Do 2 - (Using the same text as per screenshot repeating, but maybe vary it slightly?) 
                 Screenshot image 2 shows 'What We Do' twice with different characters but same text.
             */}
        <ContentBlock
          title="What We Do"
          text="At Samlox, we specialize in Roblox game development, turning your visions into virtual realities. Our skilled team crafts immersive experiences, ensuring every line of code tells a captivating story."
          image={player1Image} // Placeholder reuse
        />

        {/* Stats */}
        <Stats />

        {/* Testimonials */}
        <Testimonials />

        {/* Collaborators */}
        <Collaborators />
      </div>

      <Footer />
    </div>
  );
};

export default transition(About);
