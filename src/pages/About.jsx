import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import transition from '../transition';

const About = () => {
    return (
      <div>
        <Header />
        <h1>About Us</h1>
      </div>
    );
  
};

export default transition(About); 
