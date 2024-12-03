import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500">
      <div className="container mx-auto py-6 px-6 flex flex-col items-center justify-center ">
        <div className="flex space-x-6 mt-4 text-5xl">
          <a href="#twitter" className="hover:text-yellow-300 text-yellow-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#facebook" className="hover:text-yellow-300 text-yellow-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#instagram" className="hover:text-yellow-300 text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#tiktok" className="hover:text-yellow-300 text-yellow-500">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#youtube" className="hover:text-yellow-300 text-yellow-500">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        {/* <p className="text-center md:text-left">&copy; {new Date().getFullYear()} SAMLOX GAMES</p> */}
      </div>
    </footer>
  );
};

export default Footer;
