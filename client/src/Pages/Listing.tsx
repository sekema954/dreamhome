import { useParams } from 'react-router-dom';
import interior from '../assets/searchbg.png';
import ContactForm from '../Components/ContactForm';
import { useEffect, useState } from 'react';

interface ThumbnailsListing {
    id: number;
    thumbnails: string;
    address: string;
}

function Listing() {
    const [isthumbnail, setThumbnail] = useState<ThumbnailsListing[]>([]);
    const [isActive, setIsActive] = useState<string>(interior);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchImages = async () => {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
            const url = `${apiUrl}/listings/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP request failed with status: ${response.status}`);
                }
                const result = await response.json();
                console.log("API Response:", result);

                // Ensure thumbnails is an array before mapping
                if (Array.isArray(result.thumbnails)) {
                    setThumbnail(result.thumbnails.map((thumbnail: string, index: number) => ({
                        id: index + 1, // Create a unique id for each thumbnail
                        thumbnails: thumbnail, // This is now a single string
                        address: result.address, 
                    })));
                } else {
                    console.error("Thumbnails not found in response.");
                    setError("No thumbnails found.");
                }
            } catch (error) {
                setError('Failed to fetch images. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [id]);

    const handleActive = (src: string) => {
        setIsActive(src);
    };

    return (
        <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className='w-full max-w-4xl mx-auto'>
                <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-gray-300 shadow-xl px-4 py-4'>
                    <img className='w-full h-full object-cover' src={isActive} alt="Main Display" />
                </div>
                <div className='flex flex-wrap py-4 gap-4 items-center justify-center'>
                    {loading ? (
                        <p className='text-center'>Loading images...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : isthumbnail.length > 0 ? (
                        isthumbnail.map(image => (
                            <div
                                key={image.id} // Ensure image.id is unique for each thumbnail
                                onClick={() => handleActive(image.thumbnails)}
                                className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border border-gray-300 shadow-xl cursor-pointer ${isActive === image.thumbnails ? 'border-green-500' : ''}`}
                            >
                                <img className='w-full h-full object-cover' src={image.thumbnails} alt={`Thumbnail of ${image.address}`} />
                            </div>
                        ))
                    ) : (
                        <p className='text-center'>No images were found for this property. Contact Agent</p>
                    )}
                </div>
            </div>
            <div className='mt-6'>
                <ContactForm />
            </div>
        </div>
    );
}

export default Listing;
