import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import { FiHeart, FiTrash2 } from 'react-icons/fi';

function Wishlist() {

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
        // {
        //     id: 6,
        //     title: "Silk Kurta Set",
        //     price: 3299,
        //     image: image2,
        //     colors: ["blue", "green", "yellow"],
        // },
        // {
        //     id: 7,
        //     title: "Designer Blazer",
        //     price: 4999,
        //     badge: "NEW",
        //     badgeColor: "bg-green-500",
        //     image: image3,
        //     colors: ["black", "navy", "charcoal"],
        // },
        // {
        //     id: 8,
        //     title: "Evening Gown",
        //     price: 5999,
        //     oldPrice: 7999,
        //     badge: "-25%",
        //     image: image4,
        //     colors: ["purple", "maroon", "teal"],
        // },
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
    const [selectedVariant, setSelectedVariant] = useState({
        productId: null,
        color: null,
    });

    return (

        <section className=" bg-gray-50 py-10">
            <div className="max-w-[95%] sm:max-w-[90%] xl:max-w-[65%] mx-auto px-2 sm:px-0  ">

                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">My Wishlist</h1>
                    <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">10 items saved</p>
                </div>

                {/* Wishlist Content */}
                {products.length === 0 ? (
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <div className="flex flex-col items-center text-center">
                            <FiHeart size={48} className="text-gray-300 mb-4" />
                            <h2 className="text-lg font-medium text-gray-700">
                                Your wishlist is empty
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Save items you love to see them here.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5"
                    >
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                {/* Image Wrapper */}
                                <div className="relative overflow-hidden">
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
                                        className="w-full h-[280px] sm:h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
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
                                <div className="p-4">

                                    {/* Variant Colors */}
                                    <div className="flex items-center gap-2 mb-2">
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
                )}

            </div>
        </section >
    )
}

export default Wishlist
