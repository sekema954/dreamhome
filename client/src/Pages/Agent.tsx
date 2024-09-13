import { useState } from 'react';
import agentPhoto from '../assets/real-estate-agent.jpg';

const Agent = () => {
  const [activeTab, setActiveTab] = useState('biography');

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Agent Photo */}
          <div className="flex justify-center items-center">
            <img
              src={agentPhoto}
              alt="Real Estate Agent"
              className="w-full h-auto max-w-sm rounded-lg shadow-md"
            />
          </div>

          {/* Agent Details */}
          <div className="flex flex-col justify-center p-6">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-300 mb-4">
              <button
                className={`py-2 px-4 text-lg font-semibold ${activeTab === 'biography' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('biography')}
              >
                Biography
              </button>
              <button
                className={`py-2 px-4 text-lg font-semibold ${activeTab === 'contact' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
              <button
                className={`py-2 px-4 text-lg font-semibold ${activeTab === 'services' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('services')}
              >
                Services
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'biography' && (
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Demur Doe</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">Real Estate Agent</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Demur Doe is an experienced real estate agent with over 10 years in the industry. He specializes in residential properties and is dedicated to helping clients find their dream homes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When not working with clients, Demur enjoys hiking, reading, and spending time with his family. His commitment to excellence and customer satisfaction makes him a trusted partner in real estate.
                </p>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
                  </li>
                  <li className="mb-2">
                    <strong>Email:</strong> <a href="mailto:Demurdoe@example.com" className="text-blue-500 hover:underline">Demurdoe@example.com</a>
                  </li>
                  <li className="mb-2">
                    <strong>Website:</strong> <a href="https://www.Demurdoe-realestate.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">www.Demurdoe-realestate.com</a>
                  </li>
                  <li className="mb-2">
                    <strong>Social Media:</strong>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <a href="https://www.facebook.com/Demurdoe" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                      <a href="https://www.linkedin.com/in/Demurdoe" className="text-blue-700 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <a href="https://www.instagram.com/Demurdoe" className="text-pink-600 hover:text-pink-800" target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Services Offered</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Residential Property Sales</li>
                  <li className="mb-2">Property Rentals</li>
                  <li className="mb-2">Market Analysis and Consulting</li>
                  <li className="mb-2">Property Management</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
