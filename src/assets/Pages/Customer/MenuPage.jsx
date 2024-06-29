import Gif from "../../Image/ImageGif.gif";
import Gif1 from "../../Image/ImageGif1.gif";
import Gif2 from "../../Image/ImageGif2.gif";
import Gif3 from "../../Image/ImageGif2.gif";
// import Banner from "../../Image/banner.png";
import ArrowDown from "../../Image/arrow-down.png";
import LogoPromo from "../../Image/seemenu.png";
import LogoBrand from "../../Image/icon/logo.png";
import Product1 from "../../Image/product/product1.jpg";
import Product2 from "../../Image/product/product2.jpg";
import Product3 from "../../Image/product/product3.jpg";
import Product4 from "../../Image/product/product4.jpg";
import FooterPage from "../ComponentPage/Footer.jsx";
import Arrowup from "../../Image/arrow-up.png";

import Product5 from "../../Image/product/pac.jpg";
import Product6 from "../../Image/product/yeast.jpg";
import Product7 from "../../Image/product/glaze.jpg";
import Product8 from "../../Image/product/apple.jpg";
import Product9 from "../../Image/product/boston.jpg";
import Glide from "@glidejs/glide"
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import "../../.././index.css";

const backgroundGifs = [
    Gif, Gif1, Gif2, Gif3
    // Add more GIF URLs as needed
];

const products = [
    { id: 1, src: Product5, alt: 'Product 1', name: 'American Heritage Chocolate' },
    { id: 2, src: Product6, alt: 'Product 2', name: 'American Heritage Chocolate' },
    { id: 3, src: Product7, alt: 'Product 3', name: 'American Heritage Chocolate' },
    { id: 4, src: Product8, alt: 'Product 4', name: 'American Heritage Chocolate' },
    { id: 5, src: Product9, alt: 'Product 5', name: 'American Heritage Chocolate' },
];

export default function MenuPage() {
    let navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);

    useEffect(() => {
        new Glide('.glide-01').mount();
    }, []);

    const itemdonut = [
        { id: 1, src: Product5, alt: 'Product 1', name: 'American Heritage Chocolate' },
        { id: 2, src: Product6, alt: 'Product 2', name: 'American Heritage Chocolate' },
        { id: 3, src: Product7, alt: 'Product 3', name: 'American Heritage Chocolate' },
        { id: 4, src: Product8, alt: 'Product 4', name: 'American Heritage Chocolate' },
        { id: 5, src: Product9, alt: 'Product 5', name: 'American Heritage Chocolate' },
    ];

    const texts = [
        <div className="flex-row">
            <p className="text-gray-200 text-2xl lg:text-5xl">
                Selamat datang di
            </p>
            <p className="mt-2 text-5xl lg:text-9xl text-gray-200">
                Double O Bakery
            </p>
            <p className="mt-2 text-2xl text-gray-200">
                Follow Your Heart
            </p>
        </div>,
        <div className="justify-center w-full flex-row items-center">
            <div className="flex-row m-2 text-center items-center justify-center">
                <div className="flex flex-col items-center m-2">
                    <img src={LogoBrand} className="w-4/5" alt="Banner Image" />
                </div>
                {/* <p className="text-6xl lg:text-6xl m-2 mt-5">
                    Double O Bakery
                </p> */}
                <p className="text-3xl text-center mt-6 lg:mt-2 font-semibold">Sejak 2019</p>
                <p className="text-2xl lg:text-3xl text-center mt-5 font-semibold">
                    Bakery - Pastry - Cake - Donut
                </p>
            </div>
        </div>,
        // <div className="text-4xl flex-row items-center justify-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        //     <div className="flex flex-col items-center justify-center min-h-screen">
        //         <img src={Logo} className="w-96 mb-4" alt="logobrand" />
        //         <div className="flex justify-center text-center animate-typing overflow-hidden">
        //             <p className="text-4xl m-2">
        //                 Bakery - Pastry - Cake - Donut
        //             </p>
        //         </div>
        //     </div>

        // </div>,
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setFadeKey((prevKey) => prevKey + 1);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        AOS.refresh();
    }, [fadeKey]);

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

    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentGifIndex((prevIndex) => (prevIndex + 1) % backgroundGifs.length);
                setIsFading(false);
            }, 1000); // The duration of the fade-out animation
        }, 10000); // Change GIF every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const backgroundGif = backgroundGifs[currentGifIndex];

    useEffect(() => {
        const slider = new Glide(".glide-01", {
            type: "carousel",
            focusAt: "center",
            perView: 4,
            autoplay: 2600,
            animationDuration: 900,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    const products = [
        {
            image: Product1,
            title: 'Cheese Pastry',
            description: '3 Layer Vanilla Cake, Whipped Cream with Strawberry.',
            contains: 'Contains: Egg, Milk, Soy, Wheat.',
            servings: '10 Servings',
            price: '120k'
        },
        {
            image: Product2,
            title: 'Chocolate Pastry',
            description: 'Rich Chocolate Cake, Chocolate Cream Filling.',
            contains: 'Contains: Egg, Milk, Soy, Wheat.',
            servings: '8 Servings',
            price: '150k'
        },
        {
            image: Product3,
            title: 'Cheese Pastry',
            description: '3 Layer Vanilla Cake, Whipped Cream with Strawberry.',
            contains: 'Contains: Egg, Milk, Soy, Wheat.',
            servings: '10 Servings',
            price: '120k'
        }, {
            image: Product4,
            title: 'Cheese Pastry',
            description: '3 Layer Vanilla Cake, Whipped Cream with Strawberry.',
            contains: 'Contains: Egg, Milk, Soy, Wheat.',
            servings: '10 Servings',
            price: '120k'
        },
        // Add more product objects as needed
    ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [currentIndex1, setCurrentIndex1] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex1((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const handleNextClick = () => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % products.length);
    };

    return (
        <>
            <div className="cover bg-black">
                <div
                    className={`min-h-screen z-20 ${isFading ? 'fade-out' : 'fade-in'}`}
                    style={{
                        backgroundImage: `url(${backgroundGif})`,
                        marginTop: '-7.4%',
                        boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)', backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex items-center justify-center flex-col h-screen">
                        <div className="flex items-center justify-center bg-gradient-to-tr">
                            <div className="w">
                                <h1
                                    key={fadeKey}
                                    className=" font-['Open_Sans'] p-3 overflow-hidden whitespace-nowrap text-5xl md:text-7xl lg:text-7xl text-white font-medium"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-duration="2000"
                                >
                                    {texts[currentIndex]}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center" style={{ marginTop: "-5%" }}>
                        <a href="#allcake">
                            <img src={ArrowDown} className="w-8 vert-move" alt="" />
                        </a>
                    </div>
                </div >
                <div id="allcake" className="h-32 bg-white w-full flex justify-center items-center text-center">
                    <div className="h-fit text-7xl mb-5 lg:text-8xl text-center m-2 font-semibold text-blue-950">
                        <p>Cake </p>
                    </div>
                </div>
                <div className="w-full h-32 bg-white">
                    <div className="relative ">

                        {/* cake */}
                        <div className=" top-0 h-screen flex flex-col lg:flex-row bg-gradient-to-b from-white to-seventh">
                            <div className="relative flex w-full lg:w-fit overflow-hidden">
                                <img src={Product1} className="w-full lg:w-11/12 h-auto rounded-r-lg shadow-xl object-cover transition-transform duration-500 transform hover:scale-110" alt="Product" />
                                <img src={LogoPromo} alt="See menu" onClick={() => navigate("/menu/cake")} className="absolute right-0 top-1/2 -translate-y-1/2 w-32 lg:w-44 transform transition-transform duration-500 hover:scale-125 cursor-pointer" />
                            </div>
                            <div className="w-full lg:w-2/4 pt-10 flex lg:pt-40 flex-col items-center lg:items-start text-center lg:text-left">
                                <h2 className="text-xl flex lg:text-2xl font-['Open_Sans'] text-blue-950 font-bold cursor-pointer">
                                    <p className="text-sm lg:text-2xl underline transform transition-transform duration-500 hover:scale-105">New <span>item`s</span></p>
                                    <p className="text-sm lg:text-2xl ps-1 pr-1">/</p>
                                    <p className="text-sm lg:text-2xl transform transition-transform duration-500 hover:scale-105">Cake</p>
                                    <p className="text-sm lg:text-2xl ps-1 pr-1">/</p>
                                    <p className="text-sm lg:text-2xl transform transition-transform duration-500 hover:scale-105">American Heritage Chocolate</p>
                                </h2>
                                <div className="flex">
                                    <p className="lg:mt-5 text-4xl lg:text-7xl mt-5 font-semibold text-blue-950">American Heritage Chocolate</p>
                                </div>
                                <div className="flex-row justify-items-start lg:justify-center mt-5">
                                    <p className="lg:mt-5 text-lg lg:text-xl mt-5 font-normal text-blue-950">3 Layer Vanilla Cake, Whipped Cream Filling with Strawberry.</p>
                                    <p className="lg:mt-5 text-lg lg:text-xl mt-1 font-normal text-blue-950">Contains: Egg, Milk, Soy, Wheat.</p>
                                    <p className="lg:mt-5 text-lg lg:text-xl mt-1 font-normal text-blue-950">10 Servings</p>
                                    <p className="lg:mt-5 text-lg lg:text-xl mt-1 font-semibold text-blue-950">120k</p>
                                </div>
                            </div>
                        </div>

                        {/* bakery */}
                        <div className=" top-0 h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center text-primary" data-aos="fade-up"
                            style={{ backgroundImage: `url(${Gif1})`, backgroundPosition: 'top' }}>
                            <div className="flex w-full">
                                <div className="w-1/2">
                                    <div className="absolute top-0 left-0 p-4">
                                        <p className="text-7xl lg:text-8xl m-5 font-semibold text-white" data-aos="fade-right">
                                            Bakery
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glide-01 mt-24 w-full">
                                <div className="overflow-hidden w-full items-center justify-center mx-auto" data-glide-el="track">
                                    <ul className="flex space-x-4 overflow-x-auto">
                                        <li className="flex-shrink-0 items-center justify-center mx-auto relative">
                                            <img
                                                src={Product1}
                                                className="w-80 h-80 rounded-full lg:rounded-lg object-cover m-2 lg:w-80 lg:h-80"
                                                alt="Product 1"
                                            />
                                            <div className="absolute top-0 right-8 lg:right-0 mt-1 mr-1 lg:mt-2 lg:mr-2">
                                                <img src={LogoPromo} onClick={() => navigate("/menu/bakery")} alt="See Menu" className="w-28 lg:w-32 transform transition-transform duration-500 hover:scale-110 cursor-pointer" />
                                            </div>
                                            <div className="flex">
                                                <p className="lg:mt-5 text-3xl lg:text-2xl mt-5 font-semibold text-white">American Heritage Chocolate</p>
                                            </div>
                                        </li>
                                        <li className="flex-shrink-0 items-center justify-center mx-auto relative">
                                            <img
                                                src={Product2}
                                                className="w-80 h-80 rounded-full lg:rounded-lg object-cover m-2 lg:w-80 lg:h-80"
                                                alt="Product 2"
                                            />
                                            <div className="absolute top-0 right-8 lg:right-0 mt-1 mr-1 lg:mt-2 lg:mr-2">
                                                <img src={LogoPromo} onClick={() => navigate("/menu/bakery")} alt="See Menu" className="w-28 lg:w-32 transform transition-transform duration-500 hover:scale-110 cursor-pointer" />
                                            </div>
                                            <div className="flex">
                                                <p className="lg:mt-5 text-3xl lg:text-2xl mt-5 font-semibold text-white">American Heritage Chocolate</p>
                                            </div>
                                        </li>
                                        <li className="flex-shrink-0 items-center justify-center mx-auto relative">
                                            <img
                                                src={Product3}
                                                className="w-80 h-80 rounded-full lg:rounded-lg object-cover m-2 lg:w-80 lg:h-80"
                                                alt="Product 3"
                                            />
                                            <div className="absolute top-0 right-8 lg:right-0 mt-1 mr-1 lg:mt-2 lg:mr-2">
                                                <img src={LogoPromo} onClick={() => navigate("/menu/bakery")} alt="See Menu" className="w-28 lg:w-32 transform transition-transform duration-500 hover:scale-110 cursor-pointer" />
                                            </div>
                                            <div className="flex">
                                                <p className="lg:mt-5 text-3xl lg:text-2xl mt-5 font-semibold text-white">American Heritage Chocolate</p>
                                            </div>
                                        </li>
                                        <li className="flex-shrink-0 items-center justify-center mx-auto relative">
                                            <img
                                                src={Product4}
                                                className="w-80 h-80 rounded-full lg:rounded-lg object-cover m-2 lg:w-80 lg:h-80"
                                                alt="Product 4"
                                            />
                                            <div className="absolute top-0 right-8 lg:right-0 mt-1 mr-1 lg:mt-2 lg:mr-2">
                                                <img src={LogoPromo} onClick={() => navigate("/menu/bakery")} alt="See Menu" className="w-28 lg:w-32 transform transition-transform duration-500 hover:scale-110 cursor-pointer" />
                                            </div>
                                            <div className="flex">
                                                <p className="lg:mt-5 text-3xl lg:text-2xl mt-5 font-semibold text-white">American Heritage Chocolate</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
                        </div>

                        {/* pastries */}
                        <div className="top-0 h-screen flex-row items-center justify-center bg-primary">
                            <div className="flex h-40">
                                <div className="w-1/2 h-40 lg:w-full lg:h-48 shadow-2xl bg-black">
                                    <div className="top-0 left-0 p-4">
                                        <p className="text-5xl lg:text-8xl m-3 lg:m-5 pt-5 lg:pt-0 font-semibold text-primary">
                                            Pastry
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2 h-40 lg:h-48 bg-primary overflow-hidden lg:overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-0 left-0 p-4">
                                            <p className="text-4xl lg:text-7xl m-5 mt-10 lg:mt-10 font-semibold text-white marquee">
                                                Promo <span className="text-black">10%, </span>
                                                Promo <span className="text-black">10%, </span>
                                                Promo <span className="text-black">10%, </span>
                                                Promo <span className="text-black">10%, </span>
                                                Promo <span className="text-black">10%, </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-screen">
                                <div className="w-1/2 lg:w-2/3 h-2/3 lg:h-3/4 mt-0 lg:mt-8 bg-cover bg-center" style={{ backgroundImage: `url(${products[currentIndex1].image})` }}>
                                    <div className="flex items-center justify-between absolute top-1/2 mt-60 left-0 right-0 transform -translate-y-1/2">
                                        <button onClick={handlePrevClick} className="bg-primary rounded-full p-2 ml-4">
                                            <svg width="24" height="24" fill="currentColor" className="text-gray-900">
                                                <path d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button onClick={handleNextClick} className="bg-white rounded-full p-2 mr-4">
                                            <svg width="24" height="24" fill="currentColor" className="text-gray-900">
                                                <path d="M9 19l7-7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/3 h-2/3 lg:h-3/4 mt-0 lg:mt-8 bg-orange-500 bg-gradient-to-b from-orange-500 to-gray-900 flex flex-col justify-center p-5 text-white">
                                    <h2 className="text-2xl lg:text-6xl font-bold">{products[currentIndex1].title}</h2>
                                    <p className="mt-4 text-lg">{products[currentIndex1].description}</p>
                                    <p className="mt-2">{products[currentIndex1].contains}</p>
                                    <p className="mt-2">{products[currentIndex1].servings}</p>
                                    <p className="mt-2 font-bold">{products[currentIndex1].price}</p>
                                    <p onClick={() => navigate("/menu/pastry")} className="text-lg mt-2 lg:text-lg underline font-bold cursor-pointer transform transition-transform duration-800 hover:text-primary">See details</p>
                                </div>
                            </div>
                        </div>
                        <div className=" top-0 h-full flex flex-col items-center justify-center text-black" data-aos="fade-up">
                            <div className="flex-row w-full justify-center overflow-hidden overflow-x-auto shadow-2xl bg-third">
                                <p className="text-5xl lg:text-8xl m-3 text-center lg:m-8 pt-5 lg:pt-0 font-semibold text-blue-950" data-aos="fade-right">
                                    Donut
                                </p>
                                <div className="flex">
                                    <div className="flex-row w-full bg-gradient-to-b from-third to-sixth items-center justify-center">
                                        <div className="h-8 w-full bg-third rounded-br-RoundedSF2"> </div>
                                        <div className="glide-01 w-full">
                                            <div className="overflow-hidden w-full overflow-y-hidden" data-glide-el="track">
                                                <ul className="flex lg:flex-row flex-col items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 overflow-x-auto transparent-scrollbar">
                                                    {itemdonut.map((item) => (
                                                        <li key={item.id} className="flex-shrink-0 items-center justify-center m-5 relative">
                                                            <div className="w-64 h-64 rounded-full lg:rounded-lg overflow-hidden">
                                                                <img
                                                                    src={item.src}
                                                                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                                                                    alt={item.alt}
                                                                />
                                                            </div>
                                                            <div className="absolute top-0 lg:right-0 mt-1 lg:mt-2" onClick={() => navigate("/menu/donut")}>
                                                                <img
                                                                    src={LogoPromo}
                                                                    alt="See Menu"
                                                                    className="w-20 lg:w-24 transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                                                                />
                                                            </div>
                                                            <div className="flex justify-center w-full">
                                                                <p className="lg:mt-10 text-2xl w-52 lg:w-44 text-center lg:text-xl mt-4 font-semibold text-blue-950">
                                                                    {item.name}
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="covers bg-sixth h-32 lg:h-5 w-full">
                            </div>
                            <FooterPage />
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-10 right-10 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none"
                        >
                            <img src={Arrowup} alt="Scroll to top" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}