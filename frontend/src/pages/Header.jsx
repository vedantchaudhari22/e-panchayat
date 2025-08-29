import React from 'react';
import logo from '../assets/logo.jpg';
import Box from '../components/Box';
import Typography from '../components/Typography';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <Box className="flex items-center gap-4 m-6 bg-black p-4 shadow-md shadow-pink-500 rounded-lg hover:shadow-white">
            {/* Logo */}
            <img
                src={logo}
                alt="logo"
                className="w-16 h-16 rounded-lg object-cover"
            />

            {/* Website Name */}
            <Typography
                variant="h2"
                className=" font-bold text-2xl mb-4 text-pink-700"
            >
                Gram Panchayat, Chikhali, Maharashtra
            </Typography>

            <Outlet />
        </Box>
    );
};

export default Header;
