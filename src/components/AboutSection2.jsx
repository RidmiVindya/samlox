import { motion } from "framer-motion";
import React from "react";

const AboutSection2 = ({ avatar, title, description }) => {
  return (
    <motion.div 
      className="relative object-center w-full max-w-lg p-6 bg-gray-900 rounded-2xl shadow-xl text-white overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
      <h2 className="text-xl font-bold flex items-center">
        <span className="text-yellow-500 text-2xl mr-2">▌</span> {title}
      </h2>
      <p className="text-sm mt-2 text-yellow-300">{description}</p>
      <motion.img 
        src={avatar} 
        alt="Roblox Avatar"
        className="absolute right-[-10%] top-[-30px] w-32 h-32 object-cover drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default AboutSection2;
