import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'; // Import Redux hooks
import {fetchDonutProducts, fetchRotiProducts, fetchCakeProducts, fetchPastryProducts} from '../../Store/productSlice.js'; // Import actions
import {useNavigate} from "react-router-dom";

import Gif from "../../Image/ImageGif.gif";
import Gif1 from "../../Image/ImageGif1.gif";
import Gif2 from "../../Image/ImageGif2.gif";
import Gif3 from "../../Image/ImageGif2.gif";
import ArrowDown from "../../Image/arrow-down.png";
import LogoPromo from "../../Image/seemenu.png";
import LogoBrand from "../../Image/icon/logo.png";
import LogoNoImage from "../../Image/icon/no-camera.png";
import LogoClose from "../../Image/icon/close.png";
import FooterPage from "../ComponentPage/Footer.jsx";
import Arrowup from "../../Image/arrow-up.png";
import Glide from "@glidejs/glide"
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import "../../.././index.css";

const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const Modal = ({ isVisible, onClose, product }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 w-full p-1 bg-black bg-opacity-85 flex items-center justify-center z-50">
            <div className="border-double p-1 border-4 border-primary rounded-tl-RoundedSF4 rounded-br-RoundedSF4">
                <div className="p-1 bg-third max-w-3xl w-full relative shadow-lg flex-row lg:flex items-center rounded-tl-RoundedSF3 rounded-br-RoundedSF3">
                    <img
                        src={LogoClose}
                        onClick={onClose}
                        className="absolute top-2 right-2 w-3 h-3 lg:h-5 lg:w-5 cursor-pointer"
                        alt="Close"
                        />
                    <img
                        src={product.image || LogoNoImage}
                        alt={product.product_name}
                        className="w-full lg:w-2/3 h-52 lg:h-96 object-cover uppercase rounded-tl-RoundedSF3 rounded-br-RoundedSF3"
                        />
                    <div className="flex w-72 flex-col p-2 lg:p-4">
                        <h2 className="text-lg lg:text-4xl font-semibold font-['Open_Sans']">{product.product_name}</h2>
                        <p className="text-sm lg:text-xl text-gray-600 pt-1 lg:pt-4">{product.keterangan}</p>
                        <h2 className="text-sm lg:text-xl mb-4 font-['Open_Sans'] text-orange-500">{formatRupiah(product.harga)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function MenuPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const popularStatus = useSelector((state) => state.product.donuts.popularStatus);
    const productss = useSelector((state) => state.product.donuts.items);
    const status = useSelector((state) => state.product.donuts.status);
    const error = useSelector((state) => state.product.donuts.error);

    const popularStatusRoti = useSelector((state) => state.product.roti.popularStatus);
    const productssRoti = useSelector((state) => state.product.roti.items);
    const statusRoti = useSelector((state) => state.product.roti.status);
    const errorRoti = useSelector((state) => state.product.roti.error);

    const popularStatusCake = useSelector((state) => state.product.cake.popularStatus);
    const productssCake = useSelector((state) => state.product.cake.items);
    const statusCake = useSelector((state) => state.product.cake.status);
    const errorCake = useSelector((state) => state.product.cake.error);

    const popularStatusPastry = useSelector((state) => state.product.pastry.popularStatus);
    const productssPastry = useSelector((state) => state.product.pastry.items);
    const statusPastry = useSelector((state) => state.product.pastry.status);
    const errorPastry = useSelector((state) => state.product.pastry.error);

    const productArray2 = productss ? Object.values(productss) : [];
    const productArray3 = productssRoti ? Object.values(productssRoti) : [];
    const productArray4 = productssCake ? Object.values(productssCake) : [];
    const productArray5 = productssPastry ? Object.values(productssPastry) : [];
    const [showScrollButton, setShowScrollButton] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const backgroundGifs = [Gif, Gif1, Gif2, Gif3];
    const backgroundGif = backgroundGifs[currentGifIndex];
    const scrollToTop = () => { window.scrollTo({top: 0, behavior: 'smooth'}); };
    const texts = [
        <div className="flex-row">
            <p className="text-gray-200 text-2xl lg:text-5xl">
                Selamat datang di
            </p>
            <p className="mt-2 text-5xl lg:text-9xl text-gray-200">
                Double O Bakery
            </p>
            <p className="mt-2 lg:text-2xl text-lg text-gray-200">
                Follow Your Heart
            </p>
        </div>,
        <div className="justify-center w-full flex-row items-center">
            <div className="flex-row m-2 text-center items-center justify-center">
                <div className="flex flex-col items-center m-2">
                    <img src={LogoBrand} className="lg:w-4/5 w-1/2 relative" alt="Banner Image"/>
                </div>
                <p className="lg:text-3xl text-lg text-center lg:mt-6 mt-2 lg:mt-2 font-semibold">Sejak 2019</p>
                <p className="text-lg lg:text-3xl text-center lg:mt-5 mt-2 font-semibold">
                    Bakery - Pastry - Cake - Donut
                </p>
            </div>
        </div>
    ];

    const [isModalVisible, setModalVisible] = useState(false); // State untuk visibilitas modal
    const [selectedProduct, setSelectedProduct] = useState(null); // State untuk menyimpan produk yang dipilih
    const handleOpenModal = (product) => {
        setSelectedProduct(product); // Menyimpan produk yang dipilih
        setModalVisible(true); // Menampilkan modal
    };
    
    const handleCloseModal = () => {
        setModalVisible(false); // Menutup modal
        setSelectedProduct(null); // Mengosongkan produk yang dipilih
    };

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) { 
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchDonutProducts()).then(response => {
            console.log('Fetched products donut:', response.payload);
        });
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchRotiProducts()).then(response => {
            console.log('Fetched products bakery:', response.payload);
        });
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCakeProducts()).then(response => {
            console.log('Fetched products cake:', response.payload);
        });
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchPastryProducts()).then(response => {
            console.log('Fetched products pastry:', response.payload);
        });
    }, [dispatch]);

    useEffect(() => {
        new Glide('.glide-01').mount();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setFadeKey((prevKey) => prevKey + 1);
        }, 6000);

        return() => clearInterval(interval);
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentGifIndex((prevIndex) => (prevIndex + 1) % backgroundGifs.length);
                setIsFading(false);
            }, 1000);
        }, 10000);

        return() => clearInterval(interval);
    }, []);

    if (status === 'loading' || popularStatus === 'loading' || statusCake === 'loading' || popularStatusCake === 'loading' || statusRoti === 'loading' || popularStatusRoti === 'loading' || statusPastry === 'loading' || popularStatusPastry === 'loading') {
        return <div className="loaders-container">
            <div className="loaders"></div>
        </div>
    }

    if (status === 'failed' || popularStatus === 'failed') {
        return <p>Error: {error}</p>;
    }
    if (statusCake === 'failed' || popularStatusCake === 'failed') {
        return <p>Error: {errorCake}</p>;
    }
    if (statusRoti === 'failed' || popularStatusRoti === 'failed') {
        return <p>Error: {errorRoti}</p>;
    }
    if (statusPastry === 'failed' || popularStatusPastry === 'failed') {
        return <p>Error: {errorPastry}</p>; 
    }

    return (
        <> <div className = "cover bg-black" > <div
            className={`lg:96 min-h-screen z-20 ${isFading
                ? 'fade-out'
                : 'fade-in'}`}
            style={{
                backgroundImage: `url(${backgroundGif})`,
                marginTop: '-7.4%',
                boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="flex items-center justify-center flex-col h-screen">
                <div className="flex items-center justify-center bg-gradient-to-tr">
                    <div className="w">
                        <h1
                            key={fadeKey}
                            className=" font-['Open_Sans'] p-3 overflow-hidden whitespace-nowrap text-5xl md:text-7xl lg:text-7xl text-white font-medium"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="2000">
                            {texts[currentIndex]}
                        </h1>
                    </div>
                </div>
            </div>
            <div
                className="flex items-center justify-center"
                style={{
                    marginTop: "-5%"
                }}>
                <a href="#allcake">
                    <img src={ArrowDown} className="w-8 vert-move" alt=""/>
                </a>
            </div>
        </div >
        <div className="w-full h-32 bg-white">
            <div className="relative ">
                <div id="allcake" className="h-32 bg-white w-full flex justify-center items-center text-center">
                    <div
                        className="h-fit text-7xl mb-5 lg:text-8xl text-center m-2 font-semibold text-blue-950">
                        <p>Cake
                        </p>
                    </div>
                </div>
                {/* cake */}
                <div className="bg-gradient-to-b from-white to-seventh">
                    {productArray4.slice(0, 1).map((product, index) => (
                        <div className="top-0 h-screen flex flex-col lg:flex-row " key={index}>
                            <div className="relative flex w-full lg:w-fit overflow-hidden rounded-r-lg">
                                <div className="w-full lg:w-11/12 h-auto overflow-hidden rounded-r-lg">
                                    <img 
                                        src={product.image || LogoNoImage} 
                                        alt={product.product_name} 
                                        className="w-full h-full cursor-pointer rounded-r-lg shadow-xl object-cover transition-transform duration-500 transform hover:scale-110"
                                    />
                                </div>
                                <img
                                    src={LogoPromo}
                                    alt="See menu"
                                    onClick={() => handleOpenModal(product)}
                                    className="absolute right-2 lg:top-1/2 top-14 -translate-y-1/2 w-28 lg:w-44 transform transition-transform duration-500 hover:scale-125 cursor-pointer"
                                />
                            </div>
                            <div className="w-full lg:w-2/4 pt-5 p-5 lg:pt-32 flex flex-col items-center lg:items-start text-center lg:text-left">
                                <h2 className="text-xl flex lg:text-2xl font-['Open_Sans'] text-left text-blue-950 font-bold cursor-pointer transition-transform duration-500 hover:scale-105">
                                    <p className="text-lg lg:text-2xl underline">New
                                        <span>item`s</span>
                                    </p>
                                    <p className="text-lg lg:text-2xl ps-1 pr-1">/</p>
                                    <p className="text-lg lg:text-2xl hover:underline" onClick={() => navigate("/menu/cake")}>Cake</p>
                                </h2>
                                <div className="flex">
                                    <p className="lg:mt-5 text-5xl lg:text-7xl mt-5 font-semibold text-blue-950">{product.product_name}</p>
                                </div>
                                <div className="flex-row justify-items-start lg:justify-center mt-2 lg:mt-2">
                                    <p className="lg:mt-5 text-lg lg:text-xl mt-1 font-normal text-blue-950">{product.keterangan}</p>
                                    <p className="lg:mt-5 text-lg text-center lg:mx-0 mx-auto lg:text-xl mt-1 font-semibold text-blue-950">Rp. {product.harga}</p>
                                </div>
                                <div className="flex-row justify-items-start lg:justify-center mt-5">
                                    <p onClick={() => navigate("/menu/cake")} className="text-center underline cursor-pointer hover:text-blue-950 text-primary font-['Open_Sans'] text-sm lg:text-lg"
                                        data-aos="fade-up">show more
                                    </p>                        
                                </div>
                            </div>
                        </div>
                    ))   
                }
                <Modal isVisible={isModalVisible} onClose={handleCloseModal} product={selectedProduct} />
                </div>

                {/* bakery */}
                <div
                    className="top-0 h-2/5 lg:h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center text-primary"
                    style={{
                        backgroundImage: `url(${Gif1})`,
                        backgroundPosition: 'top'
                    }}>
                    <div className="w-full">
                        <p className="text-7xl p-5 lg:text-8xl font-semibold text-white" data-aos="fade-right">
                            Bakery
                        </p>
                    </div>
                    <div className="glide-01 w-full">
                        <div className="overflow-hidden w-full mt-4 lg:mt-10 items-center justify-center mx-auto" data-glide-el="track">
                            <ul className="grid flex-wrap grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 items-center justify-center overflow-x-auto transparent-scrollbar">
                            {productArray3.slice(0, 4).map((product, index) => (
                                <li key={index} className="flex-shrink-0 pb-0 lg:pb-7 relative">
                                <div className="w-40 h-40 lg:w-80 lg:h-80 overflow-hidden rounded-t-xl">
                                    <img 
                                        src={product.image || LogoNoImage} 
                                        alt={product.product_name} 
                                        className="w-full h-full rounded-t-xl cursor-pointer transition-transform duration-500 transform hover:scale-110"
                                    />
                                </div>
                                <div className="absolute lg:-top-2 -top-1 right-0 lg:right-1" onClick={() => handleOpenModal(product)}>
                                    <img 
                                        src={LogoPromo} 
                                        alt="See Menu" 
                                        className="w-16 lg:w-32 right-0 cursor-pointer object-cover transition-transform duration-500 transform hover:scale-110"
                                    />
                                </div>
                                <div className="flex items-center justify-center rounded-b-xl bg-transparant w-40 h-6 lg:h-14 lg:w-80">
                                    <p className="text-center text-sm lg:text-2xl font-normal lg:font-normal cursor-pointer text-white">
                                        {product.product_name}
                                    </p>
                                </div>
                            </li>
                            
                            ))
                            }
                            </ul>
                        </div>
                        <p onClick={() => navigate("/menu/bakery")} className="text-center underline cursor-pointer hover:text-primary text-white font-['Open_Sans'] text-sm lg:text-lg p-5"
                            data-aos="fade-up">show more
                        </p>
                    </div>

                    <Modal isVisible={isModalVisible} onClose={handleCloseModal} product={selectedProduct} />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
                </div>

                {/* pastries */}
                <div className="top-0 min-h-screen flex-row items-center justify-center">
                    <div className="w-full items-center justify-center">
                        <div className="flex w-full">
                            <div className="lg:w-full w-full bg-primary">
                                <p className="text-6xl text-center lg:text-left lg:text-8xl m-5 font-semibold text-white" data-aos="fade-right">
                                    Pastry
                                </p>                        
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            {productArray5.slice(0, 4).map((product, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/4 relative">
                                <div className="absolute inset-0"></div>
                                <div className="w-full h-full flex items-center justify-center lg:pt-0 pt-4">
                                    <div className="overflow-hidden">
                                        <div className="w-full h-96 overflow-hidden">
                                            <img
                                                src={product.image || LogoNoImage}
                                                onClick={() => handleOpenModal(product)}
                                                alt={product.product_name}
                                                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 transform hover:scale-110"
                                            />
                                        </div>
                                        <h2 className="text-3xl pl-4 lg:pl-0 lg:text-5xl font-bold text-blue-950">{product.product_name}</h2>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="next">
                            <p onClick={() => navigate("/menu/pastry")} className="text-center pt-10 underline cursor-pointer hover:text-primary text-blue-950 font-['Open_Sans'] text-sm lg:text-lg p-5" data-aos="fade-up">
                                show more
                            </p>
                        </div>
                    </div>
                    <div className="border-double border-4 mt-10 border-primary"/>
                </div>

                {/* donut */}
                <div className="top-0 h-full flex flex-col items-center justify-center text-black" data-aos="fade-up">
                    <div className="flex-row w-full lg:mt-5 mt-0 justify-center overflow-hidden overflow-x-auto shadow-2xl bg-third">
                        <p className="text-5xl lg:text-8xl m-3 text-center lg:m-8 pt-2 lg:pt-0 font-semibold text-blue-950" data-aos="fade-up">
                            Donut
                        </p>
                        <div className="flex justify-center items-center">
                            <div className="flex-row w-full bg-gradient-to-b from-third to-sixth items-center justify-center">
                                <div className="h-8 w-full bg-third rounded-br-RoundedSF2"></div>
                                <div className="glide-01 w-full">
                                    <div className="overflow-hidden w-full overflow-y-hidden" data-glide-el="track">
                                        <ul
                                            className="grid flex-wrap grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 items-center justify-center overflow-x-auto transparent-scrollbar">
                                            {productArray2.slice(0, 5).map((product, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex flex-col items-center p-1 pt-3 pb-7 bg-opacity-75 rounded-full transform transition-transform duration-500 hover:scale-105 relative">
                                                            {/* See Menu Badge */}
                                                            <div
                                                                className="absolute top-2 right-2 z-10"
                                                                onClick={() => handleOpenModal(product)}>
                                                                <img
                                                                    src={LogoPromo}
                                                                    alt="See Menu"
                                                                    className="w-14 h-14 lg:w-32 lg:h-32 transform transition-transform duration-500 hover:scale-101 cursor-pointer"/>
                                                            </div>
                                                            {/* Product Image */}
                                                            <div className="w-40 h-40 sm:w-40 sm:h-40 lg:w-64 lg:h-64 relative">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.product_name}
                                                                    className="w-full h-full rounded-full object-cover cursor-pointer transition-transform duration-500 transform hover:scale-101"/>
                                                            </div>
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                    <p onClick={() => navigate("/menu/donut")} className="text-center underline cursor-pointer hover:text-primary text-blue-950 font-['Open_Sans'] text-sm lg:text-lg p-5"
                                        data-aos="fade-up">
                                        show more
                                    </p>
                                </div>
                                <Modal isVisible={isModalVisible} onClose={handleCloseModal} product={selectedProduct} />
                            </div>
                        </div>
                    </div>
                    <div className="covers bg-sixth h-32 lg:h-5 w-full"></div>
                    <FooterPage/>
                </div>

                {showScrollButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-3 right-3 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none">
                        <img src={Arrowup} alt="Scroll to top" className="w-6 h-6"/>
                    </button>
                )}
            </div>
        </div> 
    </div> </>
    )
}