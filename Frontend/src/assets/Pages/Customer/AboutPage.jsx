// import gambarpertama from "../../Image/carousel1.jpg"
// import gambarkedua from "../../Image/carousel2.jpg";
// import gambarketiga from "../../Image/carousel3.jpg";
// import gambarkeempat from "../../Image/carousel4.jpg";
// import AOS from 'aos';
import backgroundGif5 from "../../Image/ImageGif5.gif";
import backgroundGif3 from "../../Image/ImageGif3.gif";
import backgroundGif4 from "../../Image/ImageGif4.gif";
import backgroundGif6 from "../../Image/ImageGif6.gif";
import backgroundGif7 from "../../Image/ImageGif7.gif";
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
            <div className="cover bg-black">
                <div
                    className="w-full h-96"
                    style={{ backgroundImage: `url(${backgroundGif5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="w-max">
                            <h1 className="animate-typing font-['Open_Sans'] p-4 overflow-hidden whitespace-nowrap border-r-4 tracking-tight border-r-white pr-5 lg:text-8xl text-4xl text-gray-200">Double O Bakery</h1>
                            <p className="lg:text-2xl text-lg text-center mt-0 lg:mt-2 text-gray-200">Sejak 2019</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-2 px-4 lg:px-4">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center" data-aos="fade-up">
                        <p className="text-xl lg:text-4xl mt-4 items-center mx-auto text-primary text-center">
                            <span>#</span>untukdoubleolovers
                        </p>
                        <p className="text-lg pt-5 text-balance leading-8 text-blue-950 text-center">
                            Dengan tangan dan bahan pilihan terbaik,
                            kami persembahkan hidangan terbaik dengan aneka ragam pilihan,
                            serta dengan dengan harga yang terjangkau
                            membuat <span className="text-primary font-semibold">Double O</span> menjadi hidangan berkualitas yang pas
                            untuk segala rutinitas anda.
                        </p>
                        <div className="flex items-center justify-center py-10">
                            <div className="plate h-1 w-52 bg-seventh"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white py-2 lg:py-10 px-4 lg:px-20">
                    <div className="relative flex w-full lg:w-2/5 justify-center items-center">
                        <img src={ProductCook} className="w-full h-60 lg:h-96 shadow-xl object-cover" alt="Cake" />
                    </div>
                    <div className="content w-full lg:w-1/2 h-full lg:h-96 flex flex-col bg-third lg:items-start text-left justify-center bg-beige p-4 lg:p-8 shadow-xl">
                        <p className="text-4xl lg:text-6xl font-bold text-blue-950 tracking-tight font-['Open_Sans']">Double O Bakery</p>
                        <p className="text-sm lg:text-base tracking-tight p-1">Pilihan - Kualitas - Harga Terbaik</p>
                        <p className="text-lg text-gray-700 text-balance leading-6 pt-2 p-1 lg:pt-4 text-justify tracking-tight">
                        Kami selalu berkomitmen untuk memberikan yang terbaik bagi anda di setiap langkah. Chef roti dan kue kami penuh dengan kreativitas, siap menghadirkan kreasi yang sempurna. Kami memastikan setiap produk yang kami sajikan memberikan pengalaman yang istimewa, karena kepuasan anda adalah prioritas utama kami.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-8">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <p className="text-2xl text-blue-950 text-left font-['Open_Sans'] font-semibold overflow-hidden">Visi Kami</p>
                        <p className="text-lg pt-3 text-blue-950 text-left">
                            Menjadi pilihan utama untuk hidangan berkualitas yang terjangkau dan cocok untuk setiap rutinitas, dengan terus menjaga kepercayaan dan kepuasan pelanggan. Kami bercita-cita untuk tumbuh bersama komunitas dengan menghadirkan berbagai pilihan produk terbaik yang selalu diingat dan dinikmati
                      </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white py-10 px-4 lg:px-20">
                    <div className="content w-full lg:w-1/2 h-full lg:h-96 flex flex-col bg-third lg:items-start text-center lg:text-left justify-center bg-beige p-8 shadow-xl">
                        <p className="text-4xl lg:text-6xl lg:text-left text-right font-bold text-blue-950 tracking-tight font-['Open_Sans']">Double O Bakery</p>
                        <p className="text-lg text-gray-700 pt-4 lg:text-left text-right">
                            Double O Bakery menawarkan beragam jenis roti yang lezat, mulai dari roti manis hingga roti gurih, yang dibuat dengan bahan-bahan pilihan. Selain itu, kami juga menyediakan berbagai pilihan minuman kopi yang nikmat, sehingga Anda dapat menikmati hidangan roti favorit Anda sambil ditemani oleh secangkir kopi yang hangat dan berkualitas.
                        </p>
                    </div>
                    <div className="relative flex w-full lg:w-2/5 justify-center items-center">
                        <div className="w-full h-96 shadow-xl object-cover" alt="Cake" style={{ backgroundImage: `url(${backgroundGif3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-4 lg:px-8">
                    <div className="relative flex-row w-full lg:w-1/2 justify-center items-center"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000">
                        <p className="text-2xl text-blue-950 text-right font-['Open_Sans'] font-semibold overflow-hidden">Misi Kami</p>
                        <p className="text-lg pt-3 text-blue-950 text-right">
                            Dengan tangan dan bahan pilihan terbaik, kami mempersembahkan hidangan berkualitas tinggi yang beragam dan terjangkau. Kami berkomitmen untuk memberikan pelayanan yang sepenuh hati, serta selalu terbuka terhadap kritik dan saran, karena perhatian Anda adalah masa depan kami
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col lg:flex-row items-center justify-center mx-auto bg-third py-10 px-4 lg:px-20">
                    <div className="relative flex-row lg:flex w-full lg:w-full justify-center items-center m-2">
                        <div className="lg:w-5/6 lg:h-96 w-full h-56 shadow-xl object-cover mx-auto" alt="Cake" style={{ backgroundImage: `url(${backgroundGif6})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="lg:w-5/6 lg:h-96 w-full h-56 shadow-xl object-cover mx-auto" alt="Cake" style={{ backgroundImage: `url(${backgroundGif4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="lg:w-5/6 lg:h-96 w-full h-56 shadow-xl object-cover mx-auto" alt="Cake" style={{ backgroundImage: `url(${backgroundGif7})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center shadow-xl bg-gradient-to-b bg-white h-24 w-full justify-center mx-auto py-10 px-4 lg:px-20">

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

