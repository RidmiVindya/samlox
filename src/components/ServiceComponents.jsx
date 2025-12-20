import React from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({ title, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-samlox-gold rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center h-full"
        >
            <h3 className="text-4xl font-luckiest text-black uppercase mb-4 drop-shadow-sm border-b-4 border-black w-full pb-2">
                {title}
            </h3>
            <p className="text-black font-magra text-lg leading-snug">
                {description}
            </p>
        </motion.div>
    );
};

export const WhySamlox = () => {
    const reasons = [
        { title: "On time Delivery", desc: "We ensure timely delivery of all projects." },
        { title: "Quality product", desc: "We maintain high standards for all our outputs." },
        { title: "100% refund policy", desc: "Satisfaction guaranteed or your money back." },
    ];

    return (
        <div className="py-20 bg-cover bg-center relative">
            {/* Background could be an image or gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-samlox-dark opacity-90"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-6xl font-luckiest text-white mb-12 drop-shadow-lg">
                    WHY SAMLOX?
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl border border-gray-600 w-80 shadow-xl hover:bg-gray-700 transition duration-300">
                            <h4 className="text-samlox-gold text-3xl font-luckiest mb-2">{reason.title}</h4>
                            {/* <p className="text-white font-magra">{reason.desc}</p> */}
                            {/* Design shows just title mostly distinct */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
