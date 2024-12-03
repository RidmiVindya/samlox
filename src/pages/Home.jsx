import React from 'react';
import Header from '../components/header';
import background from '../assets/background.png';  // Import the background image
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div 
        className="text-center h-[85vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="backdrop-blur-sm h-[30vh] w-[30vw] flex items-center justify-center text-center rounded-3xl bg-black bg-opacity-70">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 font-luckiest">Welcome to Samlox Games</h1>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-500 magra-bold text-2xl"> 
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
