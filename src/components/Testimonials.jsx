import React from "react";

const Testimonials = () => {
    return (
        <div className="py-20 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-luckiest font-bold mb-16 uppercase tracking-wide text-white">
                <span className="text-samlox-gold mr-3">|</span> What Our Clients Say
            </h2>

            <div className="relative max-w-2xl mx-auto mt-12">
                {/* Circle Image */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-black overflow-hidden">
                        {/* Placeholder Image */}
                        <div className="w-full h-full bg-gray-400"></div>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-samlox-gold text-black p-8 pt-16 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                    <p className="font-magra text-lg md:text-xl font-bold leading-relaxed">
                        "At Samlox, we specialize in Roblox game development, turning your visions into virtual realities. Our skilled team crafts immersive experiences, ensuring every line of code tells a captivating story."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
