// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../css/CookieConsent.css'; // Optional: Add custom styles for your popup

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted cookies
        const consentGiven = Cookies.get('cookieConsent');
        if (!consentGiven) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // Set a cookie to remember the user's consent
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Optionally handle the decline action
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
                <div className="cookie-buttons">
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleDecline}>Decline</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
