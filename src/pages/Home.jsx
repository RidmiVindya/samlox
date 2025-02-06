import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import background from '../assets/background.png';
import Footer from '../components/footer';
import transition from '../transition';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <Header />
      <motion.div
        className="text-center h-[80vh] flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
        animate={{
          backgroundPositionX: `${50 + mousePosition.x * 0.02}%`,
          backgroundPositionY: `${50 + mousePosition.y * 0.02}%`
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      >
        <div className="backdrop-blur-sm h-[30vh] w-[30vw] flex items-center justify-center text-center rounded-3xl bg-black bg-opacity-70">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 font-luckiest">Welcome to Samlox Games</h1>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-500 magra-bold text-2xl"> 
              View Portfolio
            </button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default transition(Home);
