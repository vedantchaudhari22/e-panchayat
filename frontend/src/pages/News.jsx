import React from 'react';
import Box from '../components/Box';
import Card from '../components/Card';
import Typography from '../components/Typography';

const News = () => {
    return (
        <Box className="p-6 m-9 bg-dark rounded-lg shadow-lg shadow-pink-500 hover:shadow-white">
            
            {/* Heading */}
            <Typography
                variant="h2"
                className="font-bold text-3xl mb-8 text-purple-700 text-center"
            >
                Latest News / Updates / Schemes
            </Typography>

            {/* Grid Layout for News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <Card
                    className="bg-black hover:shadow-lg shadow-purple-700 transform transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden"
                    media={
                        <img
                            src={'src/assets/pm-yojana.jpg'}
                            alt="Pantpradhan Vishwakarma Yojana"
                            className="w-full h-48 object-cover"
                        />
                    }
                    content={
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                पंतप्रधान विश्वकर्मा योजना
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                               पंतप्रधान विश्वकर्मा ही केंद्रीय क्षेत्र योजना 17 सप्टेंबर 2023 रोजी पंतप्रधानांनी कारागीर आणि कारागीरांना शेवटपर्यंत समर्थन देण्यासाठी सुरू केली होती जे त्यांच्या हातांनी आणि साधनांनी काम करतात. या योजनेत 18 व्यापारांमध्ये गुंतलेले कारागीर आणि कारागीर समाविष्ट आहेत, उदा. सुतार (सुथार/बधाई), बोट बनवणारा, चिलखत बनवणारा, लोहार (लोहार), हातोडा आणि साधन किट 
                            </p>
                        </div>
                    }
                />

                {/* Card 2 */}
                <Card
                    className="bg-black hover:shadow-lg shadow-purple-700 transform transition-transform duration-300 hover:scale-105 rounded-xl overflow-hidden"
                    media={
                        <img
                            src={'src/assets/ujwala-yojana.jpeg'}
                            alt="Pradhanmantri Ujjwala Yojana"
                            className="w-full h-48 object-cover"
                        />
                    }
                    content={
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                प्रधानमंत्री उज्जवला योजना
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                               “उज्जवला योजना” (Ujjwala Yojana) म्हणजे भारतीय सरकारच्या एक अहम योजना आहे, ज्यामुळे गरीबीत आणि अपंग लोकांना शासनाची मदत करण्यात आली आहे. ही योजना मुख्यत: गरीब महिलांना प्रोपेन गॅस कनेक्शन देण्याच्या माध्यमातून अपंगता, गरीबी, आणि सामाजिक आर्थिक अशिक्षितता सुधारणाऱ्या उद्देशाने कार्यान्वित केली जाते. गरीब महिलांना पहिल्यांदाच प्रोपेन गॅस सिलिंडर, गॅस स्टव्ह, आणि गॅस
                            </p>
                        </div>
                    }
                />

                {/* You can add more news cards in the same structure */}
            </div>
        </Box>
    );
};

export default News;
