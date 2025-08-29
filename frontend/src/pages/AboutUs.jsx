import React from 'react';
import Box from '../components/Box';
import Typography from '../components/Typography';

const AboutUs = () => {
  return (
    <Box className="p-6 m-9 bg-dark shadow-lg shadow-pink-500 rounded-lg border hover:shadow-white">
      <Typography 
        variant="h2" 
        className="font-bold text-2xl mb-4 text-purple-700"
        align="left"
      >
        <marquee>About Us</marquee>
      </Typography>

      <Typography 
        variant="body1" 
        className="text-white text-lg leading-relaxed text-center"
      >
        Welcome to <span className="font-semibold text-pink-600">eGrampanchayat</span>, 
        where we believe in connecting villages and empowering rural communities with technology. 
        Our mission is to improve lives by providing access to essential services and resources. 
        Join us in our commitment to building a stronger, more connected, and sustainable future for all.
      </Typography>
    </Box>
  );
};

export default AboutUs;
