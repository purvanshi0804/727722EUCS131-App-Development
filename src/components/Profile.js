import React, { useState } from 'react';
import '../css/Profile.css';

const Profile = () => {
    const [name, setName] = useState('Person 1');
    const [email, setEmail] = useState('p1@gmail.com');
    const [phone, setPhone] = useState('+91 9094567890');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePhoneChange = (event) => setPhone(event.target.value);

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (event) => {
        event.preventDefault();
        // Logic to save profile data goes here
        console.log('Profile saved', { name, email, phone });
    };

    return (
        <div className="profile-card">
            <div className="profile-left">
                <img
                    src={profilePicture || 'https://via.placeholder.com/80'}
                    alt="Profile"
                />
                <h2>{name}</h2>
                <p>Loan Applicant</p>
                <label htmlFor="profile-picture-upload" className="change-picture-label">
                    <span>Change Picture</span>
                    <input
                        accept="image/*"
                        id="profile-picture-upload"
                        type="file"
                        onChange={handleProfilePictureChange}
                        style={{ display: 'none' }}
                    />
                </label>
                <button onClick={handleSave} className="save-button">Save</button>
            </div>
            <div className="profile-right">
                <h3>Information</h3>
                <div className="info">
                    <div>
                        <p>Email:</p>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <p>Phone:</p>
                        <input
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                </div>
                <div className="projects">
                    <h3>Projects</h3>
                    <div className="project">
                        <div>
                            <p>Recent:</p>
                            <p>Status Pending</p>
                        </div>
                        <div>
                            <p>Most Viewed:</p>
                            <p>Loan</p>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
