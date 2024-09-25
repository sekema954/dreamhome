import { useEffect, useState } from 'react';

function Findhome() {
  interface Property {
    id: number;
    address: string;
    price: string;
    type: string;
    bathrooms: number;
    bedrooms: number;
    zip: number;
    image: string;
    state: string;
  }

  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProperties = async () => {
      const url = 'https://dreamhome-1d9852268c2c.herokuapp.com/listings';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP request failed error: ${response.status}`);
        }
        const result = await response.json();
        const newResult = result.dreamhomes || [];
        const recommended = result.recommended || [];
        const combinedResults = [...newResult, ...recommended];
        setProperties(combinedResults);
      } catch (error) {
        console.error(`Failed to retrieve property listings: ${error}`);
      }
    };
    fetchProperties();
  }, []);

  // Calculate total pages and current properties
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const currentProperties = properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='w-screen'>
      <div className='container mx-auto p-4'>
        <div className='bg-green-500 text-white py-2 px-4 mb-4 rounded-md text-center'>
          <p className='text-lg font-semibold'>Select the houses you are interested in</p>
        </div>

        {/* Property Listings */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {currentProperties.length > 0 ? (
            currentProperties.map(listings => (
              <a key={listings.id} href={`listing/${listings.id}`}>
                <div className='bg-white shadow-lg rounded-md overflow-hidden'>
                  <div className='relative'>
                    <div className='aspect-w-4 aspect-h-3 h-[300px]'>
                      <img className='object-center onject-cover w-full h-full' src={listings.image} alt='house' />
                    </div>
                  </div>
                  <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>{listings.address}</h2>
                    <p className='text-gray-600 mb-2'>{listings.type}</p>
                    <p className='text-gray-600 mb-2'>{listings.state}</p>
                    <p className='text-gray-900 text-lg font-bold mb-2'>${listings.price}</p>
                    <p className='text-gray-600 mb-2'>{listings.bedrooms} Bedrooms</p>
                    <p className='text-gray-600 mb-4'>{listings.bathrooms} Bathrooms</p>
                    <div className='flex flex-col md:flex-row gap-4'>
                      <button className='border border-gray-300 text-green-500 hover:bg-green-100 p-2 rounded-md transition duration-300 w-full'>
                        More
                      </button>
                      <a href="tel:4048234923" className='w-full'>
                        <button className='bg-green-500 text-white hover:bg-green-600 p-2 rounded-md transition duration-300 w-full'>
                          Schedule Tour
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className='text-center'>No properties found. Contact Agent.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-between mt-4'>
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>

        {/* Contact Form Section (unchanged) */}
                {/* Contact Form Section */}
                <div className='bg-white shadow-lg rounded-md p-6 mt-8'>
          <div className='mb-4'>
            <p className='text-lg font-semibold mb-2'>Get Information</p>
            <p className='text-gray-600 mb-2'>Get additional details on a new home, or request a meeting with a New Home Counselor.</p>
            <p className='text-sm text-gray-500'>*Denotes a required field</p>
          </div>
          <form className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input 
                className='border border-gray-300 p-2 rounded-md w-full' 
                type="text" 
                placeholder='First Name*' 
                required 
              />
              <input 
                className='border border-gray-300 p-2 rounded-md w-full' 
                type="text" 
                placeholder='Last Name*' 
                required 
              />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <input 
                className='border border-gray-300 p-2 rounded-md w-full' 
                type="phone" 
                placeholder='Phone*' 
                required 
              />
              <input 
                className='border border-gray-300 p-2 rounded-md w-full' 
                type="text" 
                placeholder='Current Zip*' 
                required 
              />
            </div>
            <input 
              className='border border-gray-300 p-2 rounded-md w-full' 
              type="email" 
              placeholder='Enter Email*' 
              required 
            />
            <textarea 
              className='border border-gray-300 p-2 rounded-md w-full' 
              rows={4} 
              placeholder='Enter Message*' 
              required 
            />
            <select 
              className='border border-gray-300 p-2 rounded-md w-full' 
              required
            >
              <option value="">When would you like to move?</option>
              <option value="immediately">Immediately</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="next year">Next year</option>
              <option value="unsure">Unsure</option>
            </select>
            <button 
              className='bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300 w-full'
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Findhome;
