// src/js/component/Features.js
import React from 'react';
import '../../styles/Features.css';

// Importa las imágenes locales
import tajmajal from '../../img/tajmajal.jpg';
import stonhenge from '../../img/stonhenge.jpg';
import murallaImg from '../../img/muralla.jpg';
import gizaImg from '../../img/giza.jpg';

const featuresData = [
    { 
        title: 'Feature 1', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: tajmajal
    },
    { 
        title: 'Feature 2', 
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: stonhenge
    },
    { 
        title: 'Feature 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: murallaImg
    },
    { 
        title: 'Feature 4', 
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: gizaImg
    }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="card-container">
                {featuresData.map((feature, index) => (
                    <div className="card" key={index}>
                        <img src={feature.image} alt={feature.title} className="card-image" />
                        <div className="card-content">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                        <button className="card-button">Find Out More!</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
