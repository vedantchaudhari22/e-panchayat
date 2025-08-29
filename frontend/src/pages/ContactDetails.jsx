import React from 'react';
import Box from '../components/Box';
import Typography from '../components/Typography';

const ContactDetails = () => {
    return (
        <Box className="p-6 m-9 bg-dark rounded-lg shadow-lg shadow-pink-500 hover:shadow-white">
            <Typography
                variant="h2"
                className="font-bold text-3xl mb-8 text-purple-700 text-center"
            >
                Contact Details
            </Typography>

            <div className="w-full max-w-4xl mx-auto my-8">
                <div className="overflow-x-auto">
                    <table className="w-full border border-purple-500 rounded-lg text-white">
                        <thead>
                            <tr className="bg-purple-900 text-purple-300 text-lg text-center">
                                <th className="px-6 py-3 border-b border-purple-500">Name</th>
                                <th className="px-6 py-3 border-b border-purple-500">Designation</th>
                                <th className="px-6 py-3 border-b border-purple-500">Contact Number</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-700 text-center">
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">श्री रामसाय रायसिंग मडावी</td>
                                <td className="px-6 py-3">सदस्य ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">NA</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">श्री नानाजी दिवाकर जनबंधु</td>
                                <td className="px-6 py-3">सदस्य ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">NA</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">सौ. कविता विनोद सुलाखे</td>
                                <td className="px-6 py-3">सदस्य ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">NA</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">सौ. सविता रवि कुमरे</td>
                                <td className="px-6 py-3">सदस्य ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">NA</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">मिथुन भवनदास पगडवार</td>
                                <td className="px-6 py-3">संगणक परिचालक ग्रामपंचायत चिखली
                                </td>
                                <td className="px-6 py-3">+91 7517654904</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">जितेश पगडवार</td>
                                <td className="px-6 py-3">शिपाई ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">+91 7588115135</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">कुमार जागेश रुपचंद साहारे</td>
                                <td className="px-6 py-3">पंचायत सहाय्यक ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">+91 7769895545</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">श्री. चैतराम तुलाराम मुंझरिया</td>
                                <td className="px-6 py-3">पाणीपुरवठा व दिवाबत्ती कर्मचारी ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">+91 9765865917</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">कु. रोशनी सिध्दार्थ सहारे</td>
                                <td className="px-6 py-3">ग्रामविकास अधिकारी ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">NA</td>
                            </tr>
                            <tr className="hover:bg-pink-500 transition">
                                <td className="px-6 py-3">श्री. सुधिर मंसाराम पोटावी</td>
                                <td className="px-6 py-3">रोजगार सेवक ग्रामपंचायत चिखली</td>
                                <td className="px-6 py-3">+91 7721856406</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Box>
    );
};

export default ContactDetails;
