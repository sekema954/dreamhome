import thumbnail from '../assets/house.png';

export default function Findhome() {
  return (
    <div className='w-screen'>
      <div className='container mx-auto p-4'>
        {/* Search Section */}
        <div className='bg-green-500 text-white py-2 px-4 mb-4 rounded-md text-center'>
          <p className='text-lg font-semibold'>Select the houses you are interested in</p>
        </div>

        <div className='flex items-center justify-center mb-4'>
          <input 
            className='w-full md:w-[300px] border border-gray-300 p-2 rounded-md' 
            type="search" 
            placeholder='e.g Houston' 
          />
          <button className='bg-green-500 text-white h-[45px] w-[120px] md:w-[150px] rounded-md ml-2 hover:bg-green-600 transition duration-300'>
            Search
          </button>
        </div>

        {/* Property Listings */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(6)].map((_, index) => (
            <a href='/listing'>
                <div key={index} className='bg-white shadow-lg rounded-md overflow-hidden'>
              <div className='relative'>
                <div className='aspect-w-4 aspect-h-3'>
                  <img 
                    className='object-cover w-full h-full' 
                    src={thumbnail} 
                    alt='house' 
                  />
                </div>
              </div>
              <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2'>Hunter's Ranch</h2>
                <p className='text-gray-600 mb-2'>Single Family Homes</p>
                <p className='text-gray-600 mb-2'>Dallas, GA</p>
                <p className='text-gray-900 text-lg font-bold mb-2'>$20,000</p>
                <p className='text-gray-600 mb-2'>3 Bedrooms</p>
                <p className='text-gray-600 mb-4'>4 Bathrooms</p>
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
          ))}
        </div>

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
