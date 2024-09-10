
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import homeGrid from '../assets/houseicon.png';
function Home() {
  return (
    <>
        <div className="bg-custom-bg bg-cover">
            {/**home grid */}
            <div className="grid grid-cols-2 h-full">
                {/**cols1 */}
                <div className="flex items-center justify-center px-[20px] text-white">
                    <div>
                        <div className="my-4">
                            <p className="font-[800] text-[45px]">Helping You Find Your Dream Home</p>
                        </div>
                        <div className="my-4">
                            <p><span className="font-[600]">DreamHome</span> is here to find the best home for you, whether for sale or for rent, with trustworthy sources."</p>
                        </div>
                        <div>
                            <a href="/findhome">
                                <button className="w-[140px] h-[45px] bg-white text-green-700 transition-all duration-[.5s] hover:bg-green-200">Find a Home</button>
                                <FontAwesomeIcon className="mx-5 text-[20px]" icon={faChevronRight}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
                {/**cols2 */}
                <div>
                    <img src={homeGrid} alt="home" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home