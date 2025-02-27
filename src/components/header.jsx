import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-yellow-500 font-luckiest">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <a href="home" className="hover:text-yellow-300  decoration-blue-500 text-yellow-500 text-5xl font-bold">
            SAMLOX
          </a>
        <nav className="hidden md:flex space-x-8 text-2xl">
            <a href="about" className="hover:text-yellow-300 hover:underline decoration-blue-500 text-yellow-500">
            ABOUT US
            </a>
            <a href="services" className="hover:text-yellow-300 hover:underline decoration-blue-500 text-yellow-500">
            OUR SERVICES
            </a>
            <a href="#news" className="hover:text-yellow-300 hover:underline decoration-blue-500 text-yellow-500">
            NEWS
            </a>
            <a href="portfolio" className="hover:text-yellow-300 hover:underline decoration-blue-500 text-yellow-500">
            PORTFOLIO
            </a>
        </nav>

        <button className="block md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
