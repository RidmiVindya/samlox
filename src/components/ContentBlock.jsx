import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "../Typewriter";

const ContentBlock = ({ title, text, image, imageLeft = false, buttonText, showTypewriter = false }) => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY * 0.1);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative py-20 px-4 md:px-20 flex justify-center">
            <div className={`flex flex-col ${imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-black bg-opacity-70 p-10 rounded-3xl shadow-2xl max-w-6xl w-full border border-gray-800`}>

                {/* Text Section */}
                <div className="flex-1 text-left">
                    <h2 className="text-5xl md:text-6xl font-luckiest font-bold mb-8 uppercase tracking-wide text-white">
                        <span className="text-samlox-gold mr-4">|</span>{title}
                    </h2>
                    <div className="text-xl leading-relaxed mb-8 text-samlox-gold font-magra">
                        {showTypewriter ? <Typewriter text={text} speed={15} /> : text}
                    </div>

                    {buttonText && (
                        <button className="flex items-center gap-2 bg-samlox-gold text-black px-8 py-3 rounded-xl hover:bg-samlox-gold-light font-bold text-2xl transition duration-300 transform hover:scale-105">
                            {buttonText}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Image Section */}
                <motion.div
                    className="flex-1 relative flex justify-center"
                    style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                >
                    {/* Background glow or accent can go here */}
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
                            No Image
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ContentBlock;
