import interior from '../assets/searchbg.png';
import listing1 from '../assets/listing1.jpg';
import listing2 from '../assets/listing2.jpg';
import listing3 from '../assets/listing3.jpg';
import listing4 from '../assets/listing4.jpg';
import listing5 from '../assets/listing5.jpg';
import ContactForm from '../Components/ContactForm';
import { useState } from 'react';

function Listing() {
    const listingImages = [
        { id: 1, src: listing1, alt: 'icon' },
        { id: 2, src: listing2, alt: 'icon' },
        { id: 3, src: listing3, alt: 'icon' },
        { id: 4, src: listing4, alt: 'icon' },
        { id: 5, src: listing5, alt: 'icon' }
    ];

    const [isActive, setIsActive] = useState(interior);

    const handleActive = (src:string) => {
        setIsActive(src);
    };

    return (
        <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className='w-full max-w-4xl mx-auto'>
                <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-gray-300 shadow-xl px-4 py-4'>
                    <img className='w-full h-full object-cover' src={isActive} alt="Main Display" />
                </div>
                <div className='flex flex-wrap py-4 gap-4 items-center justify-center'>
                    {listingImages.length > 0 ? (
                        listingImages.map(image => (
                            <div
                                key={image.id}
                                onClick={() => handleActive(image.src)}
                                className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border border-gray-300 shadow-xl cursor-pointer ${isActive === image.src ? 'border-green-500' : ''}`}
                            >
                                <img className='w-full h-full object-cover' src={image.src} alt={image.alt} />
                            </div>
                        ))
                    ) : (
                        <p>No images were found for this property. Contact Agent</p>
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
