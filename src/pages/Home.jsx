import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import background from '../assets/background.png';
import Footer from '../components/footer';
import transition from '../transition'; // HOC transition

// Split text into words for individual animation
const titleWords = "Welcome to Samlox Games".split(" ");

const Home = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation config for background parallax
  const backgroundTransition = { 
    type: "tween", 
    ease: "easeOut", 
    duration: 0.2 
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ 
        x: event.clientX, 
        y: event.clientY 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <motion.div
        className="text-center h-[80vh] flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
        animate={{
          backgroundPosition: [
            `${50 + mousePosition.x * 0.02}%`,
            `${50 + mousePosition.y * 0.02}%`
          ].join(' ')
        }}
        transition={backgroundTransition} // Renamed here
      >
        <div className="backdrop-blur-sm h-[30vh] w-[30vw] flex items-center justify-center text-center rounded-3xl bg-black bg-opacity-70">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 font-luckiest">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block whitespace-nowrap cursor-pointer"
                  initial={{ scale: 1, color: "#ffffff" }}
                  whileHover={{
                    scale: 1.1,
                    color: "#facc15",
                    transition: { 
                      duration: 0.2,
                      ease: "easeInOut" 
                    }
                  }}
                >
                  {word}{index !== titleWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h1>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 font-magra-bold text-2xl transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export const HomeBase = Home;
const HomeWithPageTransition = transition(Home); // Renamed HOC instance
export default HomeWithPageTransition;