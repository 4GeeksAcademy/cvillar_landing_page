// src/js/component/MainSection.js
import React from 'react';
import '../../styles/MainSection.css';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="jumbotron">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <button className="cta-button">Call to action!</button>
            </div>
        </section>
    );
};

export default MainSection;
