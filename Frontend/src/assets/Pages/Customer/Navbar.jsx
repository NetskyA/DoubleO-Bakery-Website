import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Landingpage() {
    let navigate = useNavigate()
    let [isOpen, setIsOpen] = useState(false);
    //Animasi Aos ===================
    useEffect(() => {
        AOS.init();
        const noSelectElements = document.querySelectorAll(".selectdisable");
        noSelectElements.forEach((element) => {
            element.style.webkitUserSelect = "none";
            element.style.mozUserSelect = "none";
            element.style.msUserSelect = "none";
            element.style.userSelect = "none";
        });
    }, []);
    //Animasi Aos ===================

    return (
        <>
            <nav className="cover h-28 bg-black">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" data-aos="fade-down" data-aos-duration="1000">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <p className="text-white font-['Open_Sans'] text-xl md:text-lg lg:text-4xl mt-5">DOUBLE O</p>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 mt-4 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-primary dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? 'true' : 'false'}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <>
                        <div className={`w-full md:block md:w-auto inset-full lg:bg-transparant2 bg-black rounded-tl-RoundedSF2 rounded-br-RoundedSF2 ${isOpen ? 'block' : 'hidden'}`} id="navbar-default" style={{ marginTop: "1.6%" }}>
                            <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                <li>
                                    <a href="/" onClick={() => navigate("/")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-900 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">Menu</a>
                                </li>
                                <li>
                                    <a href="/about/page/doubleo" onClick={() => navigate("/about/page/doubleo")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-900 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">About</a>
                                </li>
                                <li>
                                    <a href="/reward/page/doubleo/costumer" onClick={() => navigate("/reward/page/doubleo/costumer")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-900 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">Reward</a>
                                </li>
                                <li>
                                    <a href="/hotline/page/doubleo/hotline" onClick={() => navigate("/hotline/page/doubleo/hotline")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-900 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">Event</a>
                                </li>
                                <li>
                                    <a href="/order/page/doubleo/outlet" onClick={() => navigate("/order/page/doubleo/outlet")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-900 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">Location</a>
                                </li>
                                <li>
                                    <p className="hidden md:block text-2xl text-white">|</p>
                                </li>
                                <li>
                                    <a href="/login/user" onClick={() => navigate("/login/user")} className="block py-2 px-3 font-semibold font-['Open_Sans'] text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-300 dark:hover:text-primary md:dark:hover:bg-transparent hover:underline hover:underline-offset-4 hover:decoration-primary transform transition-transform duration-500 hover:scale-100">Login</a>
                                </li>
                            </ul>
                        </div>
                    </>
                </div>
            </nav>
            <Outlet className="a relative"></Outlet>
        </>
    )

}