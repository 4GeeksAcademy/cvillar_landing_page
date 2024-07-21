// src/js/component/Features.js
import React from 'react';
import '../../styles/Features.css';

const featuresData = [
    { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Feature 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Feature 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Feature 4', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="card-container">
                {featuresData.map((feature, index) => (
                    <div className="card" key={index}>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                        <button className="card-button">Find Out More!</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
