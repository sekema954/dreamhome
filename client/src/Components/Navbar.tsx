    //bg-[#048853]--green color
import logo from '../assets/logo.png';
function Navbar() {
  return (
    <>
        <div className="w-full h-[60px] bg-custom-bg bg-cover flex items-center justify-between px-[15px] py-[15px]">
            <div className='flex flex-row gap-[15px] items-center'>
                {/**logo */}
                <img className='w-[20px] h-[20px]' src={logo} alt="logo" />
                <p className='font-[700] text-[20px] text-white'>DreamHome</p>
            </div>
            <div>
                {/**nav links */}
                <ul className='flex flex-row gap-[30px] text-gray-200'>
                    <li><a className='text-white' href="/">Home</a></li>
                    <li><a href="/">Catalog</a></li>
                    <li><a href="/">Agent</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

            <div className='flex gap-[35px]'>
                {/**login signup buttons */}
                <button className='text-white'>Login</button>
                <button className='w-[100px] h-[35px] text-green-700 bg-white transition-all duration-[.5s] hover:bg-green-100'>SignUp</button>
            </div>
        </div>
    </>
  )
}

export default Navbar