import React from 'react';
import '../css/Feature.css';
const Feature = ({ icon, title, description }) => {
    return (
        <div className="feature">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default Feature;
