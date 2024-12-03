import React from 'react';
import Header from "../components/header";
import transition from '../transition';

const Portfolio = () => {
    return(
        <div>
           <Header />
            <h1>Portfolio will be displayed here</h1>;
        </div>

    );
    
};

export default transition(Portfolio);