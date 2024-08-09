import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Feature from './Feature';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import retail from '../img/retail.jpg';
import msme from '../img/msme.jpg';
import agribussloan from '../img/agriloan.jpg';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useRef } from 'react';
import FeedbackForm from './Feedback';

const Home = () => {
    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home">
            <Navbar />
            <header className="home-header">
                <h1>Welcome to AgriLoan</h1>
                <p>Your trusted partner in agricultural financing</p>
            </header>
            <section className="loan-containers">
                <Typography variant="h2" gutterBottom className="topic">
                    Our Loan Products
                </Typography>
                <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2}>
                    <Link to="/retail-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="Retail Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Retail Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Suitable for personal expenses and small businesses. Flexible repayment terms.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/msme-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={msme}
                                alt="MSME Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    MSME Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Designed for micro, small, and medium enterprises. Affordable interest rates.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/agri-business-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={agribussloan}
                                alt="Agri Business Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Agri Business Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailored for agricultural businesses with favorable repayment plans.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/retail-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="Retail Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Crop Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Suitable for personal expenses and small businesses. Flexible repayment terms.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/msme-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="MSME Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Irrigation and Fertilizer Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Designed for micro, small, and medium enterprises. Affordable interest rates.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/agri-business-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="Agri Business Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Agri Insurance and Sustainable Farming Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailored for agricultural businesses with favorable repayment plans.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/agri-business-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="Agri Business Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Rural Development Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailored for agricultural businesses with favorable repayment plans.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/agri-business-loan" className="loan-link">
                        <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={retail}
                                alt="Agri Business Loan"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Post Harvest Loan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailored for agricultural businesses with favorable repayment plans.
                                </Typography>
                                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#4CAF50' }}>
                                        Apply Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Link>
                </Box>
            </section>
            
            <section className="features">
                <Feature 
                    icon="🌱" 
                    title="Easy Application" 
                    description="Apply for a loan in just a few easy steps." 
                />
                <Feature 
                    icon="💰" 
                    title="Affordable Rates" 
                    description="We offer competitive interest rates for all farmers." 
                />
                <Feature 
                    icon="🌾" 
                    title="Flexible Terms" 
                    description="Choose a repayment plan that suits your needs." 
                />
                <Feature 
                    icon="🌱" 
                    title="Easy Application" 
                    description="Apply for a loan in just a few easy steps." 
                />
                <Feature 
                    icon="💰" 
                    title="Affordable Rates" 
                    description="We offer competitive interest rates for all farmers." 
                />
                <Feature 
                    icon="🌾" 
                    title="Flexible Terms" 
                    description="Choose a repayment plan that suits your needs." 
                />
            </section>
            
            <FeedbackForm/>
            
            <section id="contact" className="home-section" ref={contactRef}>
                <h2>Contact Us</h2>
                <p>
                    For inquiries and support, please reach out to us at:
                </p>
                <p>Email: support@agriloan.com</p>
                <p>Phone: +123-456-7890</p>
            </section>
            
            <Footer />
        </div>
    );
};

export default Home;
