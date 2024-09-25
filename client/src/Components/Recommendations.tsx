import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";
//AOS SCROLL ANIMATION LIBRARY
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function Recommendations() {
    const [recommendedHouses, setRecommendedHouses] = useState<RecomendedItem[]>([]);
    const { id: propertyId } = useParams();
    console.log(propertyId);
    interface RecomendedItem {
        id: Number,
        price: String,
        address: String,
        state: String,
        bedrooms: String,
        bathrooms: String,
        sqft: String,
        zip: Number,
        image: String,
        thumbnail: String,
        type: String
    };

    useEffect(()=>{
        AOS.init();
        const fetchRecommendedListings = async()=>{
            const url = `http://localhost:3001/listings`;
            const options = {
                method: 'GET',
                headers:{
                    "Content-Type": 'application/json'
                }
            }
            try{
                const response = await fetch(url, options);
                if(!response.ok) {
                    throw new Error(`HTTP request failed error: ${response.status}`);
                }
                const result = await response.json();
                const newResult = result.recommended;
                setRecommendedHouses(newResult)
                console.log(`Recommended Listings: ${recommendedHouses}`);
            }
            catch(error) {
                console.error(`Failed to fetch listings from API`);
            }
        };
        fetchRecommendedListings();
    }, []);

    return (
        <section className='bg-green-100 py-12'>
            <div className='container mx-auto px-4'>
                <div data-aos='zoom-in' className="text-center mb-8">
                    <p className="font-semibold text-green-700 text-2xl md:text-3xl">Home Recommendations For You</p>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                    {recommendedHouses.map(property => (
                        <Link to={`/listing/${property.id}`} key={String(property.id)} className="w-full sm:w-80 md:w-96 lg:w-[380px]">
                            <div className="border shadow-lg bg-white rounded-lg overflow-hidden">
                                {/* House Thumbnail */}
                                <div className="w-full h-48 md:h-60 bg-white">
                                    <img className="w-full h-full object-cover" src={String(property.image)} alt="house" />
                                </div>
                                {/* House Details */}
                                <div className="p-4">
                                    <div className="mb-2">
                                        <p className="font-medium text-xl md:text-2xl">{property.price}</p>
                                        <p className="text-gray-700">{`${property.address}, ${property.state}, ${property.zip}`}</p>
                                        <p className="text-red-400">{property.type}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBed} className="text-green-600" />
                                            <p>{property.bedrooms}</p>
                                            <p>Bedrooms</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBath} className="text-green-600" />
                                            <p>{property.bathrooms}</p>
                                            <p>Bathrooms</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faGlobe} className="text-green-600" />
                                            <p>{property.sqft}<span> sqft</span></p>
                                            <p>Area</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
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
