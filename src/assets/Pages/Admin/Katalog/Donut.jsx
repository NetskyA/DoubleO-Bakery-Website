import React from 'react';
import { useState } from 'react';
import BannerCake from "../../../Image/carousel5.jpg";
import Product1 from "../../../Image/product/product1.jpg";
import Product2 from "../../../Image/product/product2.jpg";
import Product3 from "../../../Image/product/product3.jpg";
import Product4 from "../../../Image/product/product4.jpg";
import Arrowup from "../../../Image/arrow-up.png"
import FooterPage from "../../ComponentPage/Footer";

const ProductCard = ({ image, title, description, price }) => (
    <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
            <h3 className="lg:text-lg text-lg font-semibold">{title}</h3>
            <p className="text-gray-600 lg:text-lg text-xs">{description}</p>
            <p className="text-orange-500 font-bold">{price}</p>
        </div>
    </div>
);

const ProductCard2 = ({ image, title, description, price }) => (
    <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
        <div className="w-32 h-32 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-orange-500 font-bold">{price}</p>
        </div>
    </div>
);

const products2 = [
    {
        image: Product1,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product2,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product3,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product4,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product1,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product2,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product3,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product4,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product1,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product2,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product3,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product4,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product1,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product2,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
    {
        image: Product3,
        title: 'Sourdough',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$3.99',
    },
    {
        image: Product4,
        title: 'Maple Oat Muffin',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        price: '$6.95',
    },
];

export default function Donut() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const products = [
        {
            image: Product1,
            title: 'Sourdough',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            price: '$3.99',
        },
        {
            image: Product2,
            title: 'Maple Oat Muffin',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            price: '$6.95',
        },
        {
            image: Product3,
            title: 'Sourdough',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            price: '$3.99',
        },
        {
            image: Product4,
            title: 'Maple Oat Muffin',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            price: '$6.95',
        },
    ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div
                id="toppage"
                className={`min-h-screen z-20`}
                style={{
                    backgroundImage: `url(${BannerCake})`,
                    boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex items-center w-full lg:w-4/5 mx-auto justify-center flex-col h-screen" data-aos="fade-up">
                    <div className="bg-colortrs w-full h-full mb-14 rounded-tl-RoundedSF2 rounded-br-RoundedSF2 relative">
                        <div className="absolute inset-0 m-3 border-double border-4 border-primary rounded-tl-RoundedSF2 rounded-br-RoundedSF2">
                            <div className="bannertext">
                                <p className="text-center animate-typing text-blue-950 whitespace-nowrap border-r-4 border-r-gray-700 font-['Open_Sans'] justify-center items-center lg:text-6xl text-3xl p-10">
                                    Popular Donut
                                </p>
                            </div>
                            <div className="w-full lg:w-4/5 mx-auto lg:mt-5 mt-0 grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-2">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center items-center" onClick={toggleVisibility}>
                                <a href="#alldonut" className="text-center underline cursor-pointer hover:text-primary text-blue-950 font-['Open_Sans'] text-sm lg:text-lg p-5">
                                    {isVisible ? 'Close' : 'Show'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible && (
                <div id="alldonut" className="h-full w-full items-center justify-center bg-gradient-to-t from-sixth"
                // data-aos="fade-up"
                // data-aos-anchor-placement="top-bottom"
                // data-aos-duration="2000"
                >
                    <div className="h-fit mt-6 mb-8 text-7xl lg:text-8xl text-center m-2 font-semibold text-blue-950">
                        <p>Donut</p>
                    </div>
                    <div className="w-full lg:w-4/5 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products2.map((product2, index) => (
                            <ProductCard2
                                key={index}
                                image={product2.image}
                                title={product2.title}
                                description={product2.description}
                                price={product2.price}
                            />
                        ))}
                    </div>
                </div>
            )}
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-950 focus:outline-none"
            >
                <img src={Arrowup} alt="Scroll to top" className="w-6 h-6" />
            </button>
            <div className="covers bg-sixth h-32 lg:h-5 w-full">
            </div>
            <FooterPage />
        </>
    )
}