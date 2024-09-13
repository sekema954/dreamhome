import thumbnail from '../assets/house.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faGlobe } from '@fortawesome/free-solid-svg-icons';
//AOS SCROLL ANIMATION LIBRARY
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Recommendations() {
    const RecommendedHouses = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ];

    useEffect(()=>{
        AOS.init();
    });

    return (
        <section className='bg-green-100 py-12'>
            <div className='container mx-auto px-4'>
                <div data-aos='zoom-in' className="text-center mb-8">
                    <p className="font-semibold text-green-700 text-2xl md:text-3xl">Home Recommendations For You</p>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                    {RecommendedHouses.map(home => (
                        <a href="/listing" key={home.id} className="w-full sm:w-80 md:w-96 lg:w-[380px]">
                            <div className="border shadow-lg bg-white rounded-lg overflow-hidden">
                                {/* House Thumbnail */}
                                <div className="w-full h-48 md:h-60 bg-white">
                                    <img className="w-full h-full object-cover" src={thumbnail} alt="house" />
                                </div>
                                {/* House Details */}
                                <div className="p-4">
                                    <div className="mb-2">
                                        <p className="font-medium text-xl md:text-2xl">200,000,000 USD</p>
                                        <p className="text-gray-700">109 Branch Valley Way, Dallas, Georgia</p>
                                        <p className="text-red-400">Rent</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBed} className="text-green-600" />
                                            <p>3</p>
                                            <p>Bedrooms</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBath} className="text-green-600" />
                                            <p>3</p>
                                            <p>Bathrooms</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faGlobe} className="text-green-600" />
                                            <p>1200<span> sqft</span></p>
                                            <p>Area</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className='text-center mt-6'>
                    <a className='text-green-600 hover:text-green-800 transition-all duration-300' href="/more">See more...</a>
                </div>
            </div>
        </section>
    );
}

export default Recommendations;
