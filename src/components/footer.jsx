import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500">
      <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} SAMLOX GAMES</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#twitter" className="hover:text-yellow-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#facebook" className="hover:text-yellow-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#instagram" className="hover:text-yellow-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#tiktok" className="hover:text-yellow-300">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#youtube" className="hover:text-yellow-300">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
