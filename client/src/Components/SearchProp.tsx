
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import SearchBar from './SearchBar';



function SearchProp() {

    useEffect(()=>{
        AOS.init();
    }, []);
  return (
    <div>
        <div className="bg-search-bg bg-center bg-cover">
            <div className="px-[30px] py-[50px] text-white">
                <div className="flex justify-center text-center">
                    <p data-aos='zoom-in' className="font-[700] text-[30px]">Find Your Dream Home</p>
                </div>
                <div className="flex justify-center text-center">
                    <p data-aos='zoom-in'>Now you can save all the stress, time, and hidden costs, with hundreds of houses for you."</p>
                </div>
            </div>
            {/**import searchbar component */}
            <div className='w-full flex items-center justify-center mt-[90px]'>
                < SearchBar />
            </div>
        </div> 
    </div>
  )
}

export default SearchProp