import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className='h-[200px] w-full  bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 relative'>
      <div className='flex items-center gap-2'>
        <img className='w-8 h-8' src={logo} alt='icon' />
        <p className='text-lg font-semibold'>Beautiful Homes</p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0'>
        <ul className='flex flex-wrap justify-center md:justify-start space-x-4'>
          <li className='m-2 hover:text-green-500 transition-all duration-300'>
            <a href='/'>Home</a>
          </li>
          <li className='m-2 hover:text-green-500 transition-all duration-300'>
            <a href='/findhome'>Find Home</a>
          </li>
          <li className='m-2 hover:text-green-500 transition-all duration-300'>
            <a href='/findagent'>Find Agent</a>
          </li>
          <li className='m-2 hover:text-green-500 transition-all duration-300'>
            <a href='/about'>About</a>
          </li>
          <li className='m-2 hover:text-green-500 transition-all duration-300'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}
