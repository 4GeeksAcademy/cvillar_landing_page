// src/js/component/Home.js
import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Features from './Features';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <MainSection />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;
