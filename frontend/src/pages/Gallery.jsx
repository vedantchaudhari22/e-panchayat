import React from 'react';
import Box from '../components/Box';
import Card from '../components/Card';
import Typography from '../components/Typography';

const cardBaseClass =
    'bg-gray-900 hover:shadow-xl shadow-purple-700 transform transition-transform duration-300 hover:scale-105 rounded-2xl overflow-hidden';

const imgClass = 'w-full h-56 object-cover hover:scale-110 transition-transform duration-500';

const Gallery = () => {
    return (
        <Box className="p-6 m-9 bg-dark rounded-lg shadow-lg shadow-pink-500 hover:shadow-white">
            <Typography
                variant="h2"
                className="font-bold text-3xl mb-8 text-purple-700 text-center"
            >
                Photo Gallery
            </Typography>

            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Panchayat Office Card */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/building-of-panchayat.jpg" alt="Panchayat Office" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Panchayat Office, Chikhali</h3>
                            <p className="text-gray-300 text-sm">
                                A stunning view of the Panchayat office in Chikhali, showcasing its perfect infrastructure.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Good Facilities</li>
                                <li>Helpful People</li>
                                <li>Supportive Staff</li>
                            </ul>
                        </div>
                    }
                />

                {/* Love for Chikhali Card */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/i-love-chikhli.jpeg" alt="I Love Chikhali" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Love for Chikhali</h3>
                            <p className="text-gray-300 text-sm">
                                A symbolic representation of love and pride for Chikhali.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Positive Vibes</li>
                                <li>Public Affection</li>
                                <li>Government Support</li>
                            </ul>
                        </div>
                    }
                />

                {/* Smooth Roads Card */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/road.webp" alt="Smooth Roads" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Smooth Roads</h3>
                            <p className="text-gray-300 text-sm">
                                Well-maintained roads that ensure safe and efficient travel.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Efficient Transportation</li>
                                <li>High-Quality Work</li>
                                <li>Government Involvement</li>
                            </ul>
                        </div>
                    }
                />

                {/* Schools of Chikhali */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/chikhali-schools.avif" alt="Schools of Chikhali" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Schools of Chikhali</h3>
                            <p className="text-gray-300 text-sm">
                                Modern educational institutions offering quality education and infrastructure.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Quality Education</li>
                                <li>Excellent Facilities</li>
                                <li>Qualified Teaching Staff</li>
                            </ul>
                        </div>
                    }
                />

                {/* Tourist Attractions */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/wada2.jpeg" alt="Tourist Attraction" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Tourist Attractions</h3>
                            <p className="text-gray-300 text-sm">
                                Beautiful tourist spots in Chikhali, perfect for nature lovers.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Clean and Well-Maintained</li>
                                <li>Popular Tourist Destination</li>
                                <li>Scenic Views</li>
                            </ul>
                        </div>
                    }
                />

                {/* Divine Temples */}
                <Card
                    className={cardBaseClass}
                    media={<img src="src/assets/templ4.avif" alt="Temples of Chikhali" className={imgClass} />}
                    content={
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-white">Divine Temples</h3>
                            <p className="text-gray-300 text-sm">
                                Spiritual places in Chikhali that spread positivity and peace.
                            </p>
                            <ul className="list-disc pl-6 text-gray-200 text-sm space-y-1">
                                <li>Cleanliness</li>
                                <li>Spiritual Environment</li>
                                <li>Government-Supported Development</li>
                            </ul>
                        </div>
                    }
                />
            </Box>
        </Box>
    );
};

export default Gallery;
