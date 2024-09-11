import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <section className='features bg-green-100 py-8 px-5'>
      <div className='flex justify-between md:px-10 items-center'>
        <h1 className='text-green-600 font-semibold text-xl md:text-2xl'>Home Features</h1>
        <a href='/findhome'>
          <button className='bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-all duration-300'>
            See All
          </button>
        </a>
      </div>
      <div className='relative mt-6'>
        <div className='flex overflow-x-auto snap-x snap-mandatory pb-4 items-center justify-center'>
          <div className='flex flex-nowrap gap-4'>
            <div className='feature-card w-64 h-80 bg-livingroom flex items-center justify-center transition-all duration-300 cursor-pointer snap-center bg-cover bg-center'>
              <h1 className='text-white text-2xl font-semibold text-center'>Living Room</h1>
            </div>
            <div className='feature-card w-64 h-80 bg-bedroom flex items-center justify-center transition-all duration-300 cursor-pointer snap-center bg-cover bg-center'>
              <h1 className='text-white text-2xl font-semibold text-center'>Bedroom</h1>
            </div>
            <div className='feature-card w-64 h-80 bg-kitchen flex items-center justify-center transition-all duration-300 cursor-pointer snap-center bg-cover bg-center'>
              <h1 className='text-white text-2xl font-semibold text-center'>Kitchen</h1>
            </div>
            <div className='feature-card w-64 h-80 bg-livingroom2 bg-no-repeat bg-center bg-cover flex items-center justify-center transition-all duration-300 cursor-pointer snap-center'>
              <h1 className='text-white text-2xl font-semibold text-center'>Patio</h1>
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center cursor-pointer'>
          <div className='bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-full'>
            <FontAwesomeIcon className='text-white w-5 h-5 md:hidden' icon={faCaretLeft} />
          </div>
        </div>
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center cursor-pointer'>
          <div className='bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-full'>
            <FontAwesomeIcon className='text-white w-5 h-5 md:hidden' icon={faCaretRight} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
