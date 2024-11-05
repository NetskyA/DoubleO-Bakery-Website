import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCakeProducts, fetchCakePopularProducts } from '../../../Store/productSlice';
import Arrowup from "../../../Image/arrow-up.png"
import FooterPage from "../../ComponentPage/Footer";
import LogoClose from "../../../Image/icon/close.png";
import LogoNoImage from "../../../Image/icon/no-camera.png";

const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const ProductCard2 = ({ image, title, description, price, onClick }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return(
    <div className="flex items-center space-x-4 p-4 m-2 bg-white bg-opacity-75 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        onClick={onClick} // Trigger modal on click
        style={{ cursor: 'pointer' }}>
        <div className="w-32 h-32 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col pl-0 lg:pl-4">
            <h3 className="lg:text-2xl text-lg flex-col">{title}</h3>
            <p className="text-gray-600 lg:text-lg text-sm">{truncateText(description, 40)}</p>
            {/* <p className="text-orange-500 lg:text-lg text-sm font-bold">{price}</p> */}
        </div>
    </div>
)};

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
                        <p className="text-gray-600">{product.keterangan}</p>
                        <h2 className="text-xl mb-4 text-orange-500">{formatRupiah(product.harga)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Cake() {
    const dispatch = useDispatch();
    const popularStatus = useSelector((state) => state.product.cake.popularStatus);
    const products = useSelector((state) => state.product.cake.items);
    const status = useSelector((state) => state.product.cake.status);
    const error = useSelector((state) => state.product.cake.error);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const productArray2 = products ? Object.values(products) : [];
    const [isModalVisible, setModalVisible] = useState(false); // State untuk visibilitas modal
    const [selectedProduct, setSelectedProduct] = useState(null); // State untuk menyimpan produk yang dipilih
    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        dispatch(fetchCakeProducts());
        dispatch(fetchCakePopularProducts());
    }, [dispatch]);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) { // If scrolled past half the window height
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
        dispatch(fetchCakeProducts()).then(response => {
            console.log('Fetched products 1:', response.payload); // Debugging data
        });
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(fetchCakePopularProducts()).then(response => {
            console.log('Fetched products 2:', response.payload); // Debugging data
        });
    }, [dispatch]);

    if (status === 'loading' || popularStatus === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed' || popularStatus === 'failed') {
        return <div className="flex justify-center items-center h-screen">
        <p className="text-center text-5xl text-primary">Loading</p>
    </div>;
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
                <div id="alldonut" className="h-full w-full items-center justify-center bg-gradient-to-t bg-white">
                    <div className="h-fit relative mt-6 mb-8 text-7xl lg:text-8xl text-center m-2 font-semibold bg-fourth text-blue-950">
                        <p>Cake</p>
                    </div>
                    <svg style={{marginTop:"-3.5rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fffaed" fillOpacity="1" d="M0,192L30,170.7C60,149,120,107,180,106.7C240,107,300,149,360,160C420,171,480,149,540,128C600,107,660,85,720,96C780,107,840,149,900,176C960,203,1020,213,1080,202.7C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                    </svg>
                    <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 -mt-8 lg:-mt-64">
                        <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                            data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="2000">
                            <p className="text-2xl text-blue-950 text-left font-['Open_Sans'] font-semibold overflow-hidden">Asal Usul Kata &quot;Cake&quot;</p>
                            <p className="text-base lg:text-lg pt-2 text-blue-950 text-left">Kata <span className="font font-semibold">&quot;Cake&quot;</span> berasal dari bahasa Norse kuno <span className="font font-semibold">&quot;kaka&quot;</span> yang berarti roti manis. Seiring waktu, kue berkembang dari sajian sederhana menjadi hidangan manis yang kompleks, digunakan dalam perayaan khusus.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/5 mx-auto lg:mt-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {productArray2.length > 0 ? (
                            productArray2.slice(0, 8).map((product, index) => (
                                <ProductCard2
                                    key={index}
                                    image={product.image || 'path/to/default-image.jpg'} // Berikan default jika 'image' kosong
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
                    <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-8">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <p className="text-2xl text-blue-950 text-right font-['Open_Sans'] font-semibold overflow-hidden">Tau Ga Kamu?</p>
                        <p className="text-base lg:text-lg pt-2 text-blue-950 text-right">
                        Tradisi kue ulang tahun dipercaya berasal dari Yunani Kuno. Mereka membuat kue bundar untuk dipersembahkan kepada Artemis, dewi bulan, dan lilin di atasnya sebagai simbol cahaya bulan. Tradisi inilah yang menjadi cikal bakal kebiasaan tiup lilin pada kue ulang tahun saat ini.
                        </p>
                    </div>
                </div>
                    <div className="w-full lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-10 lg:-mt-10">
                        {productArray2.length > 0 ? (
                            productArray2.slice(8, 40).map((product, index) => (
                                <ProductCard2
                                    key={index}
                                    image={product.image || 'path/to/default-image.jpg'} // Berikan default jika 'image' kosong
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
            <div id="allcake" className="h-10 w-full items-center justify-center bg-sixth">

            </div>
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

