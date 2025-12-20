import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';
import { motion } from 'framer-motion';

const PortfolioSection = ({ title, imageClass, isHero = false }) => {
    return (
        <div className={`relative ${isHero ? 'h-[80vh]' : 'h-64 md:h-96'} w-full overflow-hidden group`}>
            {/* Background Image Placeholder */}
            <div className={`absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110 ${imageClass}`}></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-500"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <h2 className={`${isHero ? 'text-6xl md:text-8xl' : 'text-4xl'} font-luckiest text-white uppercase drop-shadow-lg mb-4`}>
                    {title}
                </h2>
                {isHero && (
                    <button className="bg-transparent border-2 border-white text-white font-magra px-6 py-2 rounded hover:bg-white hover:text-black transition">
                        see more
                    </button>
                )}
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="bg-samlox-dark min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <PortfolioSection title="Beach Environment Design" imageClass="bg-[url('/src/assets/AboutPage/aboutBG.png')]" isHero={true} />

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <PortfolioSection title="Neon Style" imageClass="bg-gradient-to-br from-purple-600 to-blue-600" />
                <PortfolioSection title="Lowpoly City" imageClass="bg-gradient-to-br from-yellow-400 to-orange-500" />
                <PortfolioSection title="Realistic" imageClass="bg-[url('/src/assets/AboutPage/player1.png')]" />
            </div>

            {/* Detail Section */}
            <div className="flex flex-col md:flex-row h-auto md:h-[60vh]">
                <div className="w-full md:w-1/2 bg-[url('/src/assets/AboutPage/aboutBG.png')] bg-cover bg-center min-h-[300px]"></div>
                <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-black p-12 md:p-20 flex flex-col justify-center text-left">
                    <h2 className="text-5xl font-luckiest text-white mb-6">LOWPOLY STYLES</h2>
                    <p className="text-gray-300 font-magra text-lg leading-relaxed mb-8">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                    </p>
                    <button className="self-start border-2 border-samlox-gold text-samlox-gold px-6 py-2 rounded hover:bg-samlox-gold hover:text-black transition uppercase font-bold">
                        see more
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default transition(Portfolio);