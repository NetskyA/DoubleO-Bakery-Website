// import gambarpertama from "../../Image/carousel1.jpg"
// import gambarkedua from "../../Image/carousel2.jpg";
// import gambarketiga from "../../Image/carousel3.jpg";
// import gambarkeempat from "../../Image/carousel4.jpg";
// import AOS from 'aos';
import backgroundGif from "../../Image/ImageGif2.gif";
import ProductCook from "../../Image/Cookings.png";
import FooterPage from "../ComponentPage/Footer.jsx";
import Arrowup from "../../Image/arrow-up.png";
import 'aos/dist/aos.css';
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from 'framer-motion';

// const images = [
//     gambarpertama, gambarkedua, gambarketiga, gambarkeempat,
// ];

export default function AboutPage() {
    // const [activeIdx, setActiveIdx] = useState(0);
    // useEffect(() => {
    //     AOS.init();
    //     const noSelectElements = document.querySelectorAll(".selectdisable");
    //     noSelectElements.forEach((element) => {
    //         element.style.webkitUserSelect = "none";
    //         element.style.mozUserSelect = "none";
    //         element.style.msUserSelect = "none";
    //         element.style.userSelect = "none";
    //     });
    // }, []);

    // const goPrev = () => {
    //     setActiveIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
    // };
    // const goNext = () => {
    //     setActiveIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         goNext();
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [activeIdx]);

    // const sliderVariants = {
    //     enter: {
    //         x: 1000,
    //         opacity: 0
    //     },
    //     center: {
    //         zIndex: 1,
    //         x: 0,
    //         opacity: 1
    //     },
    //     exit: {
    //         zIndex: 0,
    //         x: -1000,
    //         opacity: 0
    //     }
    // };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            {/* <div className="relative">
                <AnimatePresence>
                    <motion.img
                        key={activeIdx}
                        src={images[activeIdx]}
                        variants={sliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            },
                            opacity: {
                                duration: 0.2
                            }
                        }}
                        className="w-full absolute object-cover bg-"
                        style={{ height: '500px' }}
                    />
                </AnimatePresence>
                <button
                    className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10 xl:mt-60 m-3 md:mt-0 md:m-3 bg-primary hover:bg-primary-dark hover:scale-105 duration-300 text-lg w-20 text-white p-2 md:p-4 cursor-pointer"
                    onClick={goPrev}>
                    Prev
                </button>
                <button
                    className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10 xl:mt-60 m-3 md:mt-0 md:m-3 bg-primary hover:bg-primary-dark hover:scale-105 duration-300 text-lg w-20 text-white p-2 md:p-4 cursor-pointer"
                    onClick={goNext}>
                    Next
                </button>
            </div> */}

            <div className="cover bg-black">
                <div
                    className="relative w-full h-96"
                    style={{ backgroundImage: `url(${backgroundGif})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="w-max">
                            <h1 className="animate-typing font-['Open_Sans'] p-4 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-8xl text-5xl text-gray-200">Double O Bakery</h1>
                            <p className="lg:text-2xl text-lg text-center mt-0 lg:mt-2 text-gray-200">Sejak 2019</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-8">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                        data-aos="fade-up">
                        <p className="text-4xl text-blue-950 text-center">
                            We are a family-owned bakery
                        </p>
                        <p className="text-lg pt-5 text-blue-950 text-center">
                            On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent and eager to share their perfectly crafted creations.
                        </p>
                        <div className="flex items-center justify-center py-8">
                            <div className="plate h-1 w-52 bg-seventh"></div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white py-10 px-4 lg:px-20">
                    <div className="relative flex w-full lg:w-2/5 justify-center items-center">
                        <img src={ProductCook} className="w-full h-96 shadow-xl object-cover" alt="Cake" />
                    </div>
                    <div className="content w-full lg:w-1/2 h-96 flex flex-col bg-third items-center lg:items-start text-center lg:text-left justify-center bg-beige p-8 shadow-xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">Masters at Work</h2>
                        <p className="text-lg text-gray-700">
                            On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent and eager to share their perfectly crafted creations. On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent and eager to share their perfectly crafted creations.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-8">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <p className="text-2xl text-blue-950 text-left animate-typing font-['Open_Sans'] font-semibold overflow-hidden">Our Mission</p>
                        <p className="text-4xl pt-3 text-blue-950 text-left">
                            To bring expertly crafted baked and brewed goods to our guests through a warm and welcoming bakery café experience that delivers joy to everyone.                    </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white py-10 px-4 lg:px-20">
                    <div className="content w-full lg:w-1/2 h-96 flex flex-col bg-third items-center lg:items-start text-center lg:text-left justify-center bg-beige p-8 shadow-xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">Masters at Work</h2>
                        <p className="text-lg text-gray-700">
                            On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent and eager to share their perfectly crafted creations. On every level, we strive to do our best to deliver the very best to you. Our certified bakers, cakers, and baristas are brimming with talent and eager to share their perfectly crafted creations.
                        </p>
                    </div>
                    <div className="relative flex w-full lg:w-2/5 justify-center items-center">
                        <img src={ProductCook} className="w-full h-96 shadow-xl object-cover" alt="Cake" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center shadow-xl bg-gradient-to-b bg-white h-24 w-full justify-center mx-auto py-10 px-4 lg:px-20">

                </div>

                <div className="flex flex-col lg:flex-row items-center shadow-xl bg-gradient-to-b from-third to-sixth h-96 w-full justify-center mx-auto py-10 px-4 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center justify-centerpy-10 px-4 lg:px-20">
                        <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="2000">
                            <p className="text-2xl text-blue-950 text-left animate-typing font-['Open_Sans'] font-semibold overflow-hidden">Our Mission</p>
                            <p className="text-4xl pt-3 text-blue-950 text-left">
                                To bring expertly crafted baked and brewed goods to our guests through a warm and welcoming bakery café experience that delivers joy to everyone.
                            </p>
                        </div>
                    </div>
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

