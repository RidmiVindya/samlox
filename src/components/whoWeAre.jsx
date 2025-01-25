import React from "react";
import player1Image from "../assets/AboutPage/player1.png";

const WhoWeAreSection = () => {
  return (
    <div className="relative bg-about-bg bg-cover bg-center text-white h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg max-w-5xl h-[60%]">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-6xl  font-luckiest font-bold mb-4 uppercase tracking-wide">
            <span className="text-yellow-500">|</span> Who Are We
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-yellow-500 ">
            Ignite your gaming passion. Join a vibrant community of developers
            pushing boundaries and creating unforgettable experiences. Your
            journey into the world of game development starts here.
          </p>
          <button className="flex items-center gap-2bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-500 magra-bold text-2xl font-semibold px-6 py-2 rounded-lg transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={player1Image}
            alt="Avatar"
            className="w-64 h-auto rounded-full shadow-lg" // Adjust size here
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
