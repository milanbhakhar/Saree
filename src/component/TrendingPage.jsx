import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import { FiHeart } from 'react-icons/fi';

function TrendingPage() {

    const products = [
        {
            id: 1,
            title: "Floral Midi Dress",
            price: 2499,
            oldPrice: 3599,
            badge: "-30%",
            image: image1,
            colors: ["red", "black", "gray"],
        },
        {
            id: 2,
            title: "Silk Kurta Set",
            price: 3299,
            image: image2,
            colors: ["blue", "green", "yellow"],
        },
        {
            id: 3,
            title: "Designer Blazer",
            price: 4999,
            badge: "NEW",
            badgeColor: "bg-green-500",
            image: image3,
            colors: ["black", "navy", "charcoal"],
        },
        {
            id: 4,
            title: "Evening Gown",
            price: 5999,
            oldPrice: 7999,
            badge: "-25%",
            image: image4,
            colors: ["purple", "maroon", "teal"],
        },
        {
            id: 5,
            title: "Floral Midi Dress",
            price: 2499,
            oldPrice: 3599,
            badge: "-30%",
            image: image1,
            colors: ["red", "black", "gray"],
        },
        {
            id: 6,
            title: "Silk Kurta Set",
            price: 3299,
            image: image2,
            colors: ["blue", "green", "yellow"],
        },
        {
            id: 7,
            title: "Designer Blazer",
            price: 4999,
            badge: "NEW",
            badgeColor: "bg-green-500",
            image: image3,
            colors: ["black", "navy", "charcoal"],
        },
        {
            id: 8,
            title: "Evening Gown",
            price: 5999,
            oldPrice: 7999,
            badge: "-25%",
            image: image4,
            colors: ["purple", "maroon", "teal"],
        },
    ];

    const colorMap = {
        red: "bg-red-500",
        black: "bg-black",
        gray: "bg-gray-400",
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-400",
        navy: "bg-slate-800",
        charcoal: "bg-neutral-700",
        purple: "bg-purple-500",
        maroon: "bg-rose-800",
        teal: "bg-teal-500",
    };

    // Product scroll functionality
    const productScrollRef = useRef(null);
    const [selectedVariant, setSelectedVariant] = useState({
        productId: null,
        color: null,
    });

    const scrollProducts = (direction) => {
        if (!productScrollRef.current) return;
        const container = productScrollRef.current;
        const firstCard = container.querySelector('.product-card');

        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const scrollAmount = cardWidth + gap;

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };


    return (

        <section className="w-full bg-white py-10 sm:py-12">
            <div className="px-4 sm:px-8 lg:px-20 mx-auto">

                {/* Title */}
                <div className="flex gap-2 items-center justify-between mb-6">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-semibold text-[#0A0E17]">
                        Trending Now
                    </h1>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2 ml-auto">
                        <button
                            onClick={() => scrollProducts("left")}
                            className="rounded-full text-sm border border-[#E5E7EB] p-2.5 hover:bg-gray-50 transition cursor-pointer"
                        >
                            <FaChevronLeft className="" />
                        </button>
                        <button
                            onClick={() => scrollProducts("right")}
                            className="rounded-full text-sm border border-[#E5E7EB] p-2.5 hover:bg-gray-50 transition cursor-pointer"
                        >
                            <FaChevronRight className="" />
                        </button>
                    </div>
                </div>

                {/* Cards - Horizontal Scrollable */}
                <div
                    ref={productScrollRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="product-card group flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]"
                        >
                            {/* Image Wrapper */}
                            <div className="relative rounded-xl overflow-hidden">
                                {item.badge && (
                                    <span
                                        className={`absolute top-3 left-3 px-3 py-1 text-xs text-white rounded-full z-10 ${item.badgeColor || "bg-red-500"
                                            }`}
                                    >
                                        {item.badge}
                                    </span>
                                )}

                                <span
                                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
                                >
                                    <FiHeart size={16} />
                                </span>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 flex items-end bg-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    {/* Full Width Button */}
                                    <button
                                        className="w-full py-3 text-white text-sm font-semibold bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-black/30"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="mt-3 px-1">

                                {/* Variant Colors */}
                                <div className="flex items-center gap-2 mt-2">
                                    {item.colors.map((color) => (
                                        <span
                                            key={color}
                                            onClick={() =>
                                                setSelectedVariant({
                                                    productId: item.id,
                                                    color: color,
                                                })
                                            }
                                            className={`w-5 h-5 rounded-full cursor-pointer
                                                                border border-gray-300
                                                                ${colorMap[color]}
                                                                ${selectedVariant.productId === item.id &&
                                                    selectedVariant.color === color
                                                    ? "ring-2 ring-black ring-offset-1 ring-offset-white"
                                                    : ""
                                                }
                                                    `}
                                        />
                                    ))}
                                </div>

                                <h3 className="text-sm sm:text-base font-medium">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-semibold text-sm sm:text-base">
                                        ₹{item.price.toLocaleString()}
                                    </span>

                                    {item.oldPrice && (
                                        <span className="text-xs sm:text-sm text-gray-400 line-through">
                                            ₹{item.oldPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingPage