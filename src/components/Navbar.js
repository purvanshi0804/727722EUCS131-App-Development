// import React from 'react';
// import '../css/Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">AgriLoan</div>
//             <ul className="navbar-nav">
//                 <li className="nav-item">Home</li>
//                 <li className="nav-item">About</li>
//                 <li className="nav-item">Contact</li>
//                 <li className="nav-item">Apply</li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


// import React from 'react';
// import '../css/Navbar.css';
// import { Link } from 'react-scroll'; // Import from react-scroll



// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">AgriLoan</div>
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <Link to="home" smooth={true} duration={500}>Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/apply">Apply</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/register">Register</Link>
//                 </li>
//                  <li className="nav-item">
//                     <Link to="about" smooth={true} duration={500}>About</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="contact" smooth={true} duration={500}>Contact</Link>
//                 </li> 
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//import LoansDropdown from './Loandropdown';
import ProfilePage from './Profile';
import Feature from './Feature';
 
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const Navbar = () => {
    return (
        <nav className="navbar">
            
            <div className="navbar-brand">AgriLoan</div>
            <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/apply">Apply</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
               
                    <Link to="/ProfilePage">ProfilePage</Link>
                </li>
                <li className="nav-item">
               
                    <Link to="/admin-dash">AdminDashboard</Link>
                </li>

                
            </ul>
        </nav>
    );
};

export default Navbar;
