import NearbyOutletsMap from "../../FindMapping/NearbyOutletsMap";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import Arrowup from "../../Image/arrow-up.png";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FooterPage from "../ComponentPage/Footer.jsx";

function getRandomNumber() {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

export default function ProfileCompany() {
    const [locationUser, setLocationUser] = useState(null);
    const [outlet, setOutlet] = useState(null);
    const [loading, setLoading] = useState(true);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, getRandomNumber());

        return () => clearTimeout(timer);
    }, []);

    console.log(locationUser)
    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex-row items-center justify-center">
                        <h1 className="animate-typing2 font-['Open_Sans'] p-4 overflow-hidden text-4xl text-gray-500 text-center" style={{ width: 'fit-content' }}>
                            Find Location
                        </h1>
                        <p className="text-lg text-center items-center text-gray-700 pt-5">We are trying to find the nearest store to your location.</p>

                    </div>
                </div>
            ) : (
                <section id="home" className="pt-8 pb-12 dark:bg-dark flex bg-gradient-to-b from-white to-sixth" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="container w-full flex items-center mx-auto justify-center">
                        <div className="flex flex-col w-full items-center">
                            <h1 className="text-3xl font-bold text-blue-950">Location Outlet</h1>
                            <div className="w-32 h-1 mt-10 bg-gray-500 rounded-full mx-auto my-4"></div>
                            <p className="text-lg w-1/2 text-center items-center text-gray-700 pt-5">On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent.</p>
                            <div className="flex-row md:flex-row mt-10 w-full items-center justify-center mx-auto">
                                <div className="card w-full sm:w-11/12 md:w-5/12 h-full lg:w-full mb-4 md:mb-0 mx-auto" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <style>
                                        {`
                                            .w-full::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `}
                                    </style>
                                    {locationUser && locationUser.length > 0 && (
                                        <>
                                            {locationUser.sort((a, b) => a.distance - b.distance).map((outlet, index) => (
                                                <div key={index} className="w-full mx-auto border-2 bg-white shadow-lg rounded-lg overflow-hidden m-4 mt-0">
                                                    <div className="flex">
                                                        <div className="w-full p-4">
                                                            <h2 className="xl:text-3xl lg:text-xl text-left font-bold text-blue-950">{outlet.name}</h2>
                                                            <p className="text-left text-red text-lg pt-5 text-gray-600">{outlet.address}</p>
                                                            <p className="text-left text-red text-lg text-gray-600 cursor-pointer">{outlet.phone}</p>
                                                            <p className="pt-1 pb-1 xl:text-xl lg:text-xl text-left text-gray-600 text-lg">Distance: {outlet.distance} km</p>
                                                            <button className="bg-primary ms-2 float-end text-white hover:bg-slate-100 hover:text-primary py-2 px-4 rounded shadow-lg hover:shadow-xl font-bold transition-colors duration-500">
                                                                <a href={`https://www.google.com/maps/search/?api=1&query=${outlet.lat},${outlet.lng}`} target="_blank" rel="noopener noreferrer">Order Now</a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>

                                <p className="text-lg lg:text-2xl font-semibold text-gray-700 pt-5 text-center">Live Location.</p>
                                <div className="justify-center items-center w-full mt-10 lg:w-full ms-0 rounded-xl">
                                    <NearbyOutletsMap setLocationUser={setLocationUser} setOutlet={setOutlet} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none"
            >
                <img src={Arrowup} alt="Scroll to top" className="w-6 h-6" />
            </button>
            <FooterPage />
        </>
    )
}