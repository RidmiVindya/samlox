import React from 'react';
import Header from '../components/header';
// import background from '../assets/background.png';
import Footer from '../components/footer';

const Home = () => {

  // const blogPosts = [
  //   {
  //     date: 'Best',
  //     category: 'Backdrop',
  //     admin: 'admin',
  //     views: 'views',
  //     comments: 'comments',
  //     image: background,
  //   }
  // ]
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />
      <main className="flex-grow bg-blue-200 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Samlox Games</h1>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400">
          View Portfolio
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

