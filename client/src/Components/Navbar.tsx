    //bg-[#048853]--green color
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const handleHamburgerClick = ()=>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY >= 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);

    }, []);

  
  return (
    <>
        <nav className={`w-full h-[65px] bg-custom-bg bg-cover flex items-center justify-between px-[20px] py-[15px] z-[3000] relative ${isScroll ? 'fixed' : ''}`}>
            <div className='flex flex-row gap-[15px] items-center'>
                {/**logo */}
                <img className='w-[20px] h-[20px]' src={logo} alt="logo" />
                <p className='font-[700] text-[20px] text-white'>DreamHome</p>
            </div>
            <div>
                {/**nav links */}
                <ul className='md:flex flex-row gap-[30px] text-gray-200 hidden'>
                    <li><a className='text-white' href="/">
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    </a></li>
                    <li><a href="/search">FindHome</a></li>
                    <li><a href="/agent">Agent</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className='md:flex gap-[35px] hidden items-center'>
                {/**login signup buttons */}
                <a href="/login">
                    <button className='text-white'>Login</button>
                </a>
                <a href="/register">
                    <button className='w-[100px] h-[35px] text-green-700 bg-white transition-all duration-[.5s] hover:bg-green-100'>SignUp</button>
                </a>
            </div>

                {/***hamburger icon */}
            <div className='cursor-pointer flex flex-col gap-1 md:hidden'
            onClick={handleHamburgerClick}
            >
                <div className={`w-5 h-1 bg-green-500 transtion-all duration-[.5s] ${isOpen ? 'transform translate-x-[-1px] translate-y-[8px] rotate-[-45deg]' : ''}`}></div>
                <div className={`w-5 h-1 bg-green-500 transtion-all duration-[.5s] ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-1 bg-green-500 transtion-all duration-[.5s] ${isOpen ? 'transform translate-x-[-1px] translate-y-[-8px] rotate-[45deg]' : ''}`}></div>
            </div>
        </nav>
        <div className={`flex items-center justify-center relative z-[1000] md:hidden transition-all duration-[.5s] bg-custom-bg bg-cover ${isOpen ? 'h-[200px]' : 'h-0'}`}>
            <ul className={`leading-10 text-center ${isOpen ? 'block' : 'hidden'}`}>
                <a href="/">
                    <FontAwesomeIcon className='text-white' icon={faHouse}></FontAwesomeIcon>
                </a>
                <li><a href="/search">FindHome</a></li>
                <li><a href="/agent">Agent</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar