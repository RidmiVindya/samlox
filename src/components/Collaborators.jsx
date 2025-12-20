import React from "react";

const Collaborators = () => {
    return (
        <div className="py-16 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-luckiest font-bold mb-12 uppercase tracking-wide text-white">
                <span className="text-samlox-gold mr-3">|</span> Collaborated With
            </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-80">
                {/* Logo Placeholders - FontAwesome or simple divs */}
                <div className="text-samlox-gold text-6xl hover:text-white transition"><i className="fab fa-twitter"></i></div>
                <div className="text-samlox-gold text-6xl hover:text-white transition"><i className="fab fa-discord"></i></div>
                <div className="text-samlox-gold text-6xl hover:text-white transition"><i className="fab fa-youtube"></i></div>
                <div className="text-samlox-gold text-6xl hover:text-white transition"><i className="fab fa-twitch"></i></div>
            </div>
        </div>
    );
};

export default Collaborators;
