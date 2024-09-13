import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMoneyBill, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SearchBar() {
    const [isActive, setActive] = useState('sell');
    


  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <p onClick={()=>setActive('sell')} className={`px-4 py-2 bg-white rounded-t-md border cursor-pointer flex-1 text-center ${isActive === 'sell' ? 'bg-green-300': ''}`}>Sell</p>
        <p onClick={()=>setActive('rent')} className={`px-4 py-2 bg-white rounded-t-md border cursor-pointer flex-1 text-center ${isActive === 'rent' ? 'bg-green-300': ''}`}>Rent</p>
        <p onClick={()=>setActive('buy')} className={`px-4 py-2 bg-white rounded-t-md border cursor-pointer flex-1 text-center ${isActive === 'buy' ? 'bg-green-300' : ''}`}>Buy</p>
      </div>

      {isActive === 'sell' &&(
        <div className="bg-white rounded-b-md shadow-md flex flex-col md:flex-row items-center justify-center p-4 gap-4">
            {/* Search Input  for sell*/}
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-full">
                <FontAwesomeIcon className="text-green-600" icon={faSearch} />
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Enter location, ID, Property"
                    className="focus:outline-none w-full"
                />
            </div>

            {/* Search Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-green-700 w-full md:w-auto">
                Search
            </button>
        </div>
      )}




    {isActive === 'rent' &&(
        <div className="bg-white rounded-b-md shadow-md flex flex-col md:flex-row items-center p-4 gap-4">
            {/* House Type Selector */}
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
                <FontAwesomeIcon className="text-green-600" icon={faHouse} />
                <select name="houseType" id="houseType" className="focus:outline-none flex-1">
                <option value="">House Type</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                </select>
            </div>

            {/* Price Range Selector */}
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
                <FontAwesomeIcon className="text-green-600" icon={faMoneyBill} />
                <select name="priceRange" id="priceRange" className="focus:outline-none flex-1">
                <option value="">Price Range</option>
                <option value="200000-400000">200,000-400,000</option>
                <option value="500000-900000">500,000-900,000</option>
                </select>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
                <FontAwesomeIcon className="text-green-600" icon={faSearch} />
                <input
                type="search"
                name="search"
                id="search"
                placeholder="Search based on location, ID, Property"
                className="focus:outline-none flex-1"
                />
            </div>

            {/* Search Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-green-700 w-full md:w-auto">
                Search
            </button>
        </div>
    )}
   
    {isActive === 'buy' &&(
           <div className="bg-white rounded-b-md shadow-md flex flex-col md:flex-row items-center p-4 gap-4">
           {/* House Type Selector */}
           <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
             <FontAwesomeIcon className="text-green-600" icon={faHouse} />
             <select name="houseType" id="houseType" className="focus:outline-none flex-1">
               <option value="">House Type</option>
               <option value="apartment">Apartment</option>
               <option value="condo">Condo</option>
             </select>
           </div>
           {/* Price Range Selector */}
           <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
             <FontAwesomeIcon className="text-green-600" icon={faMoneyBill} />
             <select name="priceRange" id="priceRange" className="focus:outline-none flex-1">
               <option value="">Price Range</option>
               <option value="200000-400000">200,000-400,000</option>
               <option value="500000-900000">500,000-900,000</option>
             </select>
           </div>
            {/* Search Input */}
           <div className="flex items-center gap-2 border rounded-md px-4 py-2 shadow-md w-full md:w-auto">
             <FontAwesomeIcon className="text-green-600" icon={faSearch} />
             <input
               type="search"
               name="search"
               id="search"
               placeholder="Search based on location, ID, Property"
               className="focus:outline-none flex-1"
             />
           </div>
           {/* Search Button */}
           <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-green-700 w-full md:w-auto">
             Search
           </button>
        </div>
    )}
    </div>
  );
}

export default SearchBar;
