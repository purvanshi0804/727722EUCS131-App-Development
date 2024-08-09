import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });

            console.log(response.data);
            // Assuming the response contains a token or user data
            // You may want to store the token in localStorage or context
            navigate('/user-dashboard'); // Adjust this route as needed
        } catch (error) {
            console.error('There was an error!', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    const handleAdminLoginRedirect = () => {
        navigate('/admin-login');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <Link to="/register">Create an Account?</Link>
                    </div>
                    <div className="form-group">
                        <a href="#Forgot password">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    {error && <div className="error">{error}</div>}
                </form>
                <button onClick={handleAdminLoginRedirect}>Admin Login</button>
            </div>
        </div>
    );
};

export default Login;
