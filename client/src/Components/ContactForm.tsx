import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import phone from '../assets/phone.png';
import building from '../assets/building.png';
import envelope from '../assets/envelope.png';


export default function ContactForm() {
  return (
    <div className='mt-1'>
      <div className='contact-bg flex items-center justify-center p-4 md:p-8 lg:p-[60px]'>
        <div className='max-w-6xl h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Left Grid Section */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left p-4'>
            <div className='my-4'>
              <h1 className='text-white font-bold text-xl md:text-2xl lg:text-[30px]'>Do you have any questions?</h1>
            </div>
            <div className='mb-4'>
              <p className='text-white'>Please feel free to reach out.</p>
            </div>

            {/* Flex Column Layout for Contact Info */}
            <div className='flex flex-col items-start gap-4 mb-4'>
              {/* Address */}
              <div className='flex items-center'>
                <img className='w-6 h-6' src={building} alt="address icon" />
                <p className='text-white ml-2'>Martin Luther King Blvd 30424 Atlanta GA</p>
              </div>

              {/* Phone Number */}
              <div className='flex items-center'>
                <img className='w-6 h-6' src={phone} alt="phone icon" />
                <a className='text-white ml-2' href="tel:4042349234">(404)-123-3454</a>
              </div>

              {/* Email */}
              <div className='flex items-center'>
                <img className='w-6 h-6' src={envelope} alt="mail icon" />
                <a className='text-white ml-2' href="mailto:testemail@email.com">testgmail@email.com</a>
              </div>
            </div>

            <div className='mb-4'>
              <h3 className='text-white font-semibold text-lg'>Social Media</h3>
            </div>
            <div className='flex gap-4 mt-4'>
              <a href='/facebook'>
                <img className='w-6 h-6' src={facebook} alt='Facebook icon' />
              </a>
              <a href='/twitter'>
                <img className='w-6 h-6' src={twitter} alt='Twitter icon' />
              </a>
              <a href='/instagram'>
                <img className='w-6 h-6' src={instagram} alt='Instagram icon' />
              </a>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className='flex items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white p-4 rounded-lg shadow-md'>
              <form className='space-y-4'>
                <div>
                  <h2 className='text-lg md:text-xl'>Are there any questions?</h2>
                </div>
                <div>
                  <input className='w-full p-2 border border-gray-300 rounded' type="email" placeholder='Enter Email' />
                </div>
                <div>
                  <textarea className='w-full p-2 border border-gray-300 rounded' cols={30} rows={5} placeholder='Enter Message'></textarea>
                </div>
                <div>
                  <button type='submit' className='w-full py-2 bg-green-400 hover:bg-green-600 transition-all duration-300 text-white rounded'>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
