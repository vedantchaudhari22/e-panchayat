import React from 'react'
import Box from '../components/Box'
import Typography from '../components/Typography'
import { Mail, Facebook } from "lucide-react";


const Footer = () => {
    return (
        <Box className='flex flex-col sm:flex-row justify-around sm: flex-col-1 m-6 bg-black p-4 shadow-md shadow-pink-500 rounded-lg hover:shadow-white space-y-5'>

            <Box className={'space-y-5'}>
                <Typography variant="h3" className="text-purple-500" align="center">
                    Contact Details
                </Typography>

                <Typography variant="h6" className="text-white" align="center">Email :- info@grampanchayat.gov.in</Typography>

                <a href="https://grampanchayatchikhali.in/" className='text-white'><Typography variant="h6" className='text-pink-400 underline hover:text-white' align="center">
                    👉 Visit our official website
                </Typography></a>
            </Box>

            <Box className={'space-y-5'}>
                <Typography variant="h3" className='text-purple-500' align="center">
                    Social Media Links
                </Typography>

                <Box className={'flex justify-around'}>
                    <a
                        href="https://www.facebook.com/p/Chikhli-Gram-Panchayat-100064648961348/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className="p-2 rounded-full transition"
                    >
                        <Facebook className="w-5 h-5 text-white hover:text-blue-600" />
                    </a>
                    <a
                        href="mailto:info@grampanchayat.gov.in"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                        className="p-2 rounded-full transition"
                    >
                        <Mail className="w-5 h-5 text-white hover:text-red-600" />
                    </a>
                </Box>

            </Box>


        <Typography variant="h6" className='text-gray-300 mb-3'>
            © 2025 Gram Panchayat Chikhali. All rights reserved.
        </Typography>
        </Box>

    )
}

export default Footer
