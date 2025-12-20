import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from "../transition";
import { ServiceCard, WhySamlox } from "../components/ServiceComponents";

const Services = () => {
  const servicesList = [
    {
      title: "GFX",
      description: "Under Gfx we do all kinds of 2D designing for roblox games including ads, thumbnails, icons and logos. We follow cartoonish, realistic and anime styles."
    },
    {
      title: "3D DEVELOPMENT",
      description: "Under Gfx we do all kinds of 2D designing for roblox games including ads, thumbnails, icons and logos. We follow cartoonish, realistic and anime styles."
    },
    {
      title: "GUI",
      description: "Under Gfx we do all kinds of 2D designing for roblox games including ads, thumbnails, icons and logos. We follow cartoonish, realistic and anime styles."
    },
    {
      title: "SCRIPT GAMES",
      description: "Under Gfx we do all kinds of 2D designing for roblox games including ads, thumbnails, icons and logos. We follow cartoonish, realistic and anime styles."
    }
  ];

  return (
    <div className="bg-samlox-dark min-h-screen flex flex-col">
      <Header />

      {/* Hero / Header for Services? Design shows cards directly under a header? 
            Image 0 shows header 'SAMLOX ...' then cards overlaid on a busy background.
        */}
      <div className="flex-grow container mx-auto px-4 py-20 relative z-10">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/src/assets/AboutPage/aboutBG.png')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>

      <WhySamlox />

      <Footer />
    </div>
  );
};

export default transition(Services);