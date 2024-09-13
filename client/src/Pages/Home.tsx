import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import homeGrid from '../assets/houseicon.png';
import decor from '../assets/decor.png';
import property from '../assets/savings.png';
import town from '../assets/town 1.png';
import house from '../assets/house 1.png';
import SearchProp from "../Components/SearchProp";
import Recommendations from "../Components/Recommendations";
import ContactForm from "../Components/ContactForm";
import Features from '../Components/Features';
// AOS SCROLL ANIMATION LIBRARY
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

type TextColor = 'black' | 'white';

const textColor: Record<TextColor, string> = {
    black: '#000000',
    white: '#ffffff',
};

const gradients = {
    'custom-gradient': 'linear-gradient(to right, #00985B, #000000)',
    'white': '#ffffff',
};

interface Service {
    id: number;
    bg: keyof typeof gradients;
    src: string;
    title: string;
    titleColor: TextColor;
    tagline: string;
}

const services: Service[] = [
    { id: 1, bg: 'custom-gradient', src: house, title: 'Property', titleColor: 'white', tagline: 'Your dream home has now become a reality. Buy a new home with the best facilities and a comfortable environment.' },
    { id: 2, bg: 'white', src: property, title: 'Savings', titleColor: 'black', tagline: "Rent a beautiful house for your family, the best choice for your family's living space." },
    { id: 3, bg: 'white', src: town, title: 'Community', titleColor: 'black', tagline: "Buy the perfect home at the best price with guaranteed quality from trusted sources." }
];

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="bg-custom-bg bg-cover relative h-screen w-screen">
                <div className="absolute left-0 bottom-0">
                    <img className='' src={decor} alt="" />
                </div>
                {/**home grid */}
                <div className="grid md:grid-cols-2 h-full">
                    {/**cols1 */}
                    <div className="flex items-center justify-center text-white z-[1000] md:py-0 py-[30px]">
                        <div className="w-screen">
                            <div data-aos='zoom-in' className="px-[75px]">
                                <div className="my-4">
                                    <p className="font-[800] text-[25px] md:text-[45px]">Helping You Find Your Dream Home</p>
                                </div>
                                <div className="my-4">
                                    <p><span className="font-[600]">DreamHome</span> is here to find the best home for you, whether for sale or for rent, with trustworthy sources."</p>
                                </div>
                                <div>
                                    <a className="flex items-center justify-center md:block" href="/search">
                                        <button className="w-[140px] h-[45px] bg-white text-green-700 transition-all duration-[.5s] hover:bg-green-200">Find a Home</button>
                                        <FontAwesomeIcon className="mx-5 text-[20px] drop" icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**cols2 */}
                    <div className="relative">
                        <img className="absolute bottom-0 right-0" src={homeGrid} alt="home" />
                    </div>
                </div>
            </div>
            {/***service section */}
            <div className="bg-green-100">
                <div className="py-[40px] md:py-[80px] flex items-center justify-center">
                    <div>
                        <div data-aos='zoom-in' className="flex justify-center text-center">
                            <p className="text-green-600 text-[25px] md:text-[35px] font-[700]">Our Services</p>
                        </div>
                        <div className="flex justify-center text-center">
                            <p data-aos='zoom-in' >Dream Home is here to be the solution for you</p>
                        </div>
                    </div>
                </div>
                {/**service cards */}
                <div className="flex items-center justify-center gap-[20px] flex-wrap py-5 px-8 md:px-0">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="w-full md:w-[400px] h-[320px] shadow-lg rounded-[5px] flex flex-col items-center justify-between p-6"
                            style={{ background: gradients[service.bg] }}
                        >
                            <div
                                className="w-[80px] h-[80px] flex items-center justify-center rounded-full mb-4"
                                style={{ background: textColor[service.titleColor] }}
                            >
                                <img src={service.src} alt={service.title} className="w-[50px] h-[50px]" />
                            </div>
                            <p
                                className="text-[24px] font-[600] mb-2"
                                style={{ color: textColor[service.titleColor] }}
                            >
                                {service.title}
                            </p>
                            <p
                                className="text-center"
                                style={{ color: textColor[service.titleColor] }}
                            >
                                {service.tagline}
                            </p>
                        </div>
                    ))}
                </div>
                {/**search section */}
                <SearchProp />
                <Recommendations />
                <Features />
                <ContactForm />
            </div>
        </>
    );
}

export default Home;
