import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPastryProducts, fetchPastryPopularProducts } from '../../../Store/productSlice';
import BannerCake from "../../../Image/carousel2.jpg";
import Arrowup from "../../../Image/arrow-up.png"
import FooterPage from "../../ComponentPage/Footer";
import LogoClose from "../../../Image/icon/close.png";
import LogoNoImage from "../../../Image/icon/no-camera.png";

const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const ProductCard = ({ image, product_name, quantity, keterangan, harga, onClick }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="flex items-center space-x-4 p-1 mr-2 lg:mr-0 ml-2 lg:ml-0 bg-white bg-opacity-75 lg:rounded-lg rounded-xl shadow-lg"
            onClick={onClick} // Trigger modal on click
            style={{ cursor: 'pointer' }}>
            <div className="w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 m-0 lg:m-4">
                <img src={image} alt={product_name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col mx-auto justify-center w-32 lg:w-96 lg:h-52">
                <h3 className="lg:text-3xl text-sm">
                    {product_name}
                </h3>
                <p className="text-gray-600 lg:text-lg text-sm">
                    {truncateText(keterangan, 30)}
                </p>
                {/* <p className="text-orange-500 lg:text-base text-sm font-bold">
                    Price: {harga}
                </p> */}
            </div>
        </div>
    );
};


const ProductCard2 = ({ image, title, description, price, onClick }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
    <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        onClick={onClick} // Trigger modal on click
        style={{ cursor: 'pointer' }}>
        <div className="w-32 h-32 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
            <h3 className="lg:text-2xl text-lg">{title}</h3>
            <p className="text-gray-600 lg:text-lg text-sm">{truncateText(description, 30)}</p>
            {/* <p className="text-orange-500 lg:text-lg text-sm font-bold">{price}</p> */}
        </div>
    </div>
    );
};

const Modal = ({ isVisible, onClose, product }) => {
    if (!isVisible || !product) return null; // Prevent rendering if modal isn't visible or product is null
    return (
        <div className="fixed inset-0 w-full bg-black bg-opacity-75 flex items-center justify-center z-50" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
            <div className="border-double p-1 border-4 border-primary rounded-tl-RoundedSF4 rounded-br-RoundedSF4">
                <div className="p-1 bg-third max-w-3xl w-full relative shadow-lg flex-row lg:flex items-center rounded-tl-RoundedSF3 rounded-br-RoundedSF3">
                    <img
                        src={LogoClose}
                        onClick={onClose}
                        className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                        alt="Close"
                        />
                    <img
                        src={product.image || LogoNoImage}
                        alt={product.product_name}
                        className="w-full lg:w-2/3 h-52 lg:h-96 object-cover uppercase rounded-tl-RoundedSF3 rounded-br-RoundedSF3"
                        />
                    <div className="flex w-72 flex-col p-2 lg:p-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">{product.product_name}</h2>
                        <p className="text-gray-600 pt-1 lg:pt-4">{product.keterangan}</p>
                        <h2 className="text-xl mb-4 text-orange-500">{formatRupiah(product.harga)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Pastry() {
    const dispatch = useDispatch();
    const popularItems = useSelector((state) => state.product.pastry.popularItems);
    const popularStatus = useSelector((state) => state.product.pastry.popularStatus);
    const products = useSelector((state) => state.product.pastry.items);
    const status = useSelector((state) => state.product.pastry.status);
    const error = useSelector((state) => state.product.pastry.error);
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {setIsVisible(!isVisible);};
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' });};
    const productArray = popularItems ? Object.values(popularItems) : [];
    const productArray2 = products ? Object.values(products) : [];
    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) { // If scrolled past half the window height
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };
    const [isModalVisible, setModalVisible] = useState(false); // State untuk visibilitas modal
    const [selectedProduct, setSelectedProduct] = useState(null); // State untuk menyimpan produk yang dipilih
    const handleOpenModal = (product) => { setSelectedProduct(product);setModalVisible(true); };
    const handleCloseModal = () => {
        setModalVisible(false); setSelectedProduct(null);
    };

    useEffect(() => {
        dispatch(fetchPastryProducts());
        dispatch(fetchPastryPopularProducts());
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchPastryProducts()).then(response => {
            console.log('Fetched products 1:', response.payload); 
        });
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(fetchPastryPopularProducts()).then(response => {
            console.log('Fetched products 2:', response.payload);
        });
    }, [dispatch]);
    
    if (status === 'loading' || popularStatus === 'loading') {
        return <div className="flex justify-center items-center h-screen">
                    <p className="text-center text-5xl text-primary">Loading</p>
                </div>;
    }

    if (status === 'failed' || popularStatus === 'failed') {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <div
                id="toppage"
                className={`min-h-screen z-20`}
                style={{
                    backgroundImage: `url(${BannerCake})`,
                    boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)',
                    backgroundSize: 'cover',
                    paddingTop: '20px',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex items-center w-full lg:w-4/5 mx-auto justify-center flex-col h-screen" data-aos="fade-up">
                    <div className="bg-colortrs w-full h-full mb-10 rounded-tl-RoundedSF2 rounded-br-RoundedSF2 relative">
                        <div className="absolute inset-0 m-3 border-double border-4 border-primary rounded-tl-RoundedSF2 rounded-br-RoundedSF2">
                            <div className="bannertext">
                                <p className="text-center animate-typing text-blue-950 whitespace-nowrap border-r-4 border-r-gray-700 font-['Open_Sans'] justify-center items-center lg:text-6xl text-3xl p-1 lg:p-2">
                                    Popular Pastry
                                </p>
                            </div>
                            <div className="w-full lg:w-4/5 mx-auto items-center lg:mt-5 mt-0 grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-2">
                            {Array.isArray(productArray) && productArray.length > 0 ? (
                                    productArray.slice(0, 4).map((product, index) => (
                                        <ProductCard
                                            className="items-center mx-auto"
                                            key={index}
                                            image={product.image || LogoNoImage}
                                            product_name={product.product_name || 'No title available'}
                                            quantity={product.quantity || 'Qty description available'}
                                            keterangan={product.keterangan || 'No description available'}
                                            harga={product.harga || 'Price not available'}
                                            onClick={() => handleOpenModal(product)}
                                        />
                                    ))
                                ) : (
                                    <p>No popular products available</p>
                                )}
                            </div>
                            <div className="flex justify-center items-center" onClick={toggleVisibility}>
                                <a href="#alldonut" className="text-center underline cursor-pointer hover:text-primary mt-4 text-blue-950 font-['Open_Sans'] text-sm lg:text-lg p-5">
                                    {isVisible ? 'Close' : 'Show'} All Pastry
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible && (
                <div id="alldonut" className="h-full w-full items-center justify-center bg-gradient-to-t bg-white">
                    <div className="h-fit mt-6 mb-8 relative text-7xl lg:text-8xl text-center m-2 font-semibold bg-fourth text-blue-950">
                        <p>Pastry</p>
                    </div>
                    <svg style={{marginTop:"-3.5rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fffaed" fillOpacity="1" d="M0,192L30,170.7C60,149,120,107,180,106.7C240,107,300,149,360,160C420,171,480,149,540,128C600,107,660,85,720,96C780,107,840,149,900,176C960,203,1020,213,1080,202.7C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                    </svg>
                    <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 -mt-8 lg:-mt-64">
                        <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                            data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="2000">
                            <p className="text-2xl text-blue-950 text-left font-['Open_Sans'] font-semibold overflow-hidden">Asal Usul &quot;Croissant&quot;</p>
                            <p className="text-base lg:text-lg pt-2 text-blue-950 text-left">Meskipun sering dianggap berasal dari Prancis, <span className="font-semibold">&quot;Croissant&quot;</span> sebenarnya berasal dari Austria dan dikenal sebagai <span className="font-semibold">&quot;kipferl&quot;</span> sejenis roti berbentuk bulan sabit yang populer di Austria. Prancis kemudian mengadopsi dan memodifikasi resepnya, hingga menjadi croissant yang kita kenal renyah di luar, lembut di dalam.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/5 mx-auto lg:mt-10 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {productArray2.length > 0 ? (
                            productArray2.map((product, index) => (
                                <ProductCard2
                                    key={index}
                                    image={product.image || LogoNoImage}
                                    title={product.product_name || 'No title available'}
                                    description={product.keterangan || 'No description available'}
                                    price={product.harga || 'Price not available'}
                                    onClick={() => handleOpenModal(product)}
                                />
                            ))
                        ) : (
                            <p>No products available</p>
                        )}

                    </div>
                    <div className="h-24 w-full items-center justify-center bg-white"/>
                </div>
            )}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-3 right-3 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none">
                    <img src={Arrowup} alt="Scroll to top" className="w-6 h-6"/>
                </button>
            )}
            <Modal isVisible={isModalVisible} onClose={handleCloseModal} product={selectedProduct} />
            <div className="covers bg-sixth h-32 lg:h-5 w-full">
            </div>
            <FooterPage />
        </>
    )
}