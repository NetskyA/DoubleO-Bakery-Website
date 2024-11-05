import backgroundGif from "../../Image/ImageGif.gif";
import FooterPage from "../ComponentPage/Footer.jsx";
import PhoneImage from "../../Image/PhoneMockup.png";
import Arrowup from "../../Image/arrow-up.png";
import { Outlet, useNavigate } from "react-router-dom";

export default function RewardPage() {
    let navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className="cover bg-black">
                <div
                    className="relative w-full h-96 shadow-2xl"
                    style={{ backgroundImage: `url(${backgroundGif})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="flex h-full items-center pb-16 justify-center" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <div className="w-max">
                            <h1 className="font-['Open_Sans'] lg:text-9xl text-7xl text-center text-gray-200">Reward</h1>
                            <p className="lg:text-4xl text-2xl text-center font-medium mt-2 text-gray-200">Kami tak sabar untuk memberikan hadiah kepada anda!</p>
                        </div>
                    </div>
                </div>
                <div className="relative bg-third">
                    <div className="sticky top-0 h-screen flex flex-col bg-gradient-to-t from-sixth items-center justify-center">
                        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto py-10 px-4 lg:px-20">
                            <div className="content w-full lg:w-1/2 h-96 flex flex-col bg-white items-center rounded-xl lg:items-start text-center lg:text-left justify-center bg-beige p-8 drop-shadow-2xl">
                                <h2 className="text-2xl lg:text-5xl font-bold text-blue-950 mb-4">Segera register dan dapatkan hadiah menarik</h2>
                                <p className="text-lg text-gray-700 pt-5">Di setiap langkah, kami selalu berusaha memberikan yang terbaik untuk anda dan chef dan kue kami penuh dengan kreativitas, siap menghadirkan kreasi yang sempurna.
                                </p>
                                <div className="flex">
                                    <div className="rounded-md shadow-xl mt-10">
                                        <a onClick={() => navigate("/login/user")} className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md text-white bg-primary hover:bg-gray-200 hover:text-primary focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                            href="">
                                            Daftar sekarang dapatkan hadiah!
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-2/6 justify-center mb-20 lg:mb-0 mt-4 items-center">
                                <img src={PhoneImage} className="w-56 h-full lg:h-4/5 lg:w-72 animate-shake" alt="Cake" />
                            </div>

                        </div>
                    </div>
                    {/* <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                    <h2 className="text-4xl font-bold">The Second slide</h2>
                    <p className="mt-2">Scroll Down for next slide</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                    <h2 className="text-4xl font-bold">The Third slide</h2>
                    <p className="mt-2">Scroll Down</p>
                </div>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <h2 className="text-4xl font-bold">The Fourth slide</h2>
                </div> */}
                </div>
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none"
                >
                    <img src={Arrowup} alt="Scroll to top" className="w-6 h-6" />
                </button>
                <div className="covers bg-sixth h-32 lg:h-5 w-full">
                </div>
                <FooterPage />
            </div>
        </>
    )
}