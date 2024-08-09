

import React, { useState } from 'react';
import { Menu, MenuItem, Button, TextField, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LoansDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.toLowerCase() === 'loans') {
            setAnchorEl(event.currentTarget); // or use a reference to the search bar if needed
        } else {
            setAnchorEl(null);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Button
                aria-controls="loans-menu"
                aria-haspopup="true"
                endIcon={<ArrowDropDownIcon />}
                style={{ display: 'none' }} // Hide the button itself
            >
                Loans
            </Button>
            <Menu
                id="loans-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Retail</MenuItem>
                <MenuItem onClick={handleClose}>MSME</MenuItem>
                <MenuItem onClick={handleClose}>Agri Business</MenuItem>
                <MenuItem onClick={handleClose}>Gold Loan</MenuItem>
                <MenuItem onClick={handleClose}>Government Schemes</MenuItem>
            </Menu>
        </Box>
    );
};

export default LoansDropdown;
