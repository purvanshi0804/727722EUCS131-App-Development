import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoanApplication from './components/LoanApplication';
import Profile from './components/Profile';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import CookieConsent from './components/CookieConsent';
import AdminDashboard from './components/AdminDashboard';
import ApprovedLoanDetails from'./components/ApprovedLoanDetails';

const App = () => {
    return (
        <Router>
            <CookieConsent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/apply" element={<LoanApplication />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/ProfilePage" element={<Profile />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dash" element={<AdminDashboard/>} />
                <Route path="/admin/approved-loans" element={<ApprovedLoanDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
