import React, { useState } from 'react';

import image1 from "../images/i5.png";
import image2 from "../images/i6.png";
import image3 from "../images/i7.png";
import image4 from "../images/i11.png";
import { IoIosStar } from 'react-icons/io';
import { IoMdCheckmark } from "react-icons/io";
import { LuTruck } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function DetailsPage() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('Beige');
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState({
        productId: null,
        color: null,
    });

    const productImages = [
        image1,
        image2,
        image3,
        image4
    ];

    const colors = [
        { name: 'Beige', hex: '#D4A574' },
        { name: 'Navy', hex: '#1E3A5F' },
        { name: 'Black', hex: '#000000' },
        { name: 'Gray', hex: '#9CA3AF' }
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const completeTheLook = [
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
        }
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

    const reviews = [
        {
            id: 1,
            author: 'Sarah Johnson',
            rating: 5,
            date: '2 days ago',
            verified: true,
            text: 'This is an exceptional trench coat! The quality is outstanding and it fits perfectly. The material feels luxurious and the stitching is impeccable. Highly recommend for anyone looking for a classic piece.'
        },
        {
            id: 2,
            author: 'Michael Chen',
            rating: 4,
            date: '1 week ago',
            verified: true,
            text: 'Great coat overall. Very well made. Only minor issue is that it runs slightly large, so size down if you want a more fitted look. The color is exactly as pictured.'
        },
        {
            id: 3,
            author: 'Emma Williams',
            rating: 5,
            date: '2 weeks ago',
            verified: true,
            text: 'This coat exceeded my expectations! The attention to detail is impressive, and it looks even better in person. I\'ve received so many compliments. Highly recommend for anyone looking to elevate their style.'
        }
    ];

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <IoIosStar
                        key={star}
                        filled={star <= rating}
                        className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="px-4 sm:px-8 lg:px-10 xl:px-20 mx-auto py-10 sm:py-12">

                <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
                    {/* Left Side - Image Gallery */}
                    <div className="flex flex-col-reverse sm:flex-row gap-4">
                        {/* Thumbnail Column */}
                        <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === idx
                                        ? 'border-gray-900 ring-2 ring-gray-300'
                                        : 'border-gray-200 hover:border-gray-400'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Product ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
                            <img
                                src={productImages[selectedImage]}
                                alt="Classic Trench Coat"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">
                            Classic Trench Coat
                        </h1>

                        {/* Price and Badge */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl font-bold text-gray-900">$139.00</span>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                -25%
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            {renderStars(4.5)}
                            <span className="text-sm text-gray-600">4.5/5</span>
                            <span className="text-sm text-gray-400">•</span>
                            <span className="text-sm text-gray-600">235 reviews</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Timeless elegance meets modern sophistication in this classic trench coat. Crafted from premium materials with impeccable attention to detail, this versatile piece elevates any outfit.
                        </p>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-900">Select Color</span>
                                <span className="text-sm text-gray-500">{selectedColor}</span>
                            </div>
                            <div className="flex gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor === color.name
                                            ? 'border-gray-900 ring-2 ring-gray-300'
                                            : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-900">Select Size</span>
                                <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                                    Size Guide
                                </button>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 px-4 text-sm font-medium rounded-lg border transition-all ${selectedSize === size
                                            ? 'bg-gray-900 text-white border-gray-900'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-6">
                            <span className="text-sm font-medium text-gray-900 block mb-3">Quantity</span>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <FiMinus className="w-4 h-4" />
                                    </button>
                                    <span className="px-6 py-3 font-medium border-x border-gray-300">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <FiPlus className="w-4 h-4" />
                                    </button>
                                </div>
                                <span className="text-sm text-red-600">Only 12 items left!</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            <button className="bg-white border-2 border-gray-900 text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                Add to Cart
                            </button>
                            <button className="bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Buy Now
                            </button>
                        </div>

                        {/* Wishlist */}
                        <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-6">
                            <FaRegHeart className="w-5 h-5" />
                            <span className="font-medium">Add to Wishlist</span>
                        </button>

                        {/* Features */}
                        <div className="space-y-3 border-t border-gray-200 pt-6">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <LuTruck className="w-5 h-5 text-gray-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Free Delivery</p>
                                    <p className="text-gray-500">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <LuRefreshCcw className="w-5 h-5 text-gray-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">30-Day Return Policy</p>
                                    <p className="text-gray-500">Easy returns within 30 days</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <HiOutlineShieldCheck className="w-5 h-5 text-gray-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Secure Payment</p>
                                    <p className="text-gray-500">Your payment is safe with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <div className="bg-white rounded-2xl p-5 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Elevate your wardrobe with our Classic Trench Coat, a timeless piece that combines sophistication with practicality. Meticulously crafted from premium materials, this coat features impeccable tailoring that flatters every silhouette. The double-breasted design and belted waist create a polished, elegant look perfect for any occasion.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Key Features:</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                                <IoMdCheckmark className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Premium double-faced wool blend</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <IoMdCheckmark className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Classic double-breasted design with belt detail</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <IoMdCheckmark className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Fully lined for comfort and warmth</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <IoMdCheckmark className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>Available in multiple classic colors</span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Material & Care:</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span>• Dry clean only</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>• Do not bleach</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>• Iron on low temperature if needed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Complete the Look */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Complete the Look
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {completeTheLook.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/details-page/${item.id}`)}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                            >
                                {/* Image Wrapper */}
                                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                                    {/* Badge */}
                                    {item.badge && (
                                        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full z-10">
                                            {item.badge}
                                        </span>
                                    )}

                                    {/* Wishlist */}
                                    <span
                                        onClick={(e) => e.stopPropagation()}
                                        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100 transition">
                                        <FiHeart size={16} />
                                    </span>

                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                                    />

                                    {/* Add to Cart Overlay */}
                                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition">
                                        <button className="w-full py-3 text-white text-base font-semibold bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-black/30">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">

                                    {/* Colors */}
                                    {item.colors && (
                                        <div className="flex gap-2 mb-2">
                                            {item.colors.map((color) => (
                                                <span
                                                    key={color}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedVariant({
                                                            productId: item.id,
                                                            color: color,
                                                        });
                                                    }}
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
                                    )}

                                    <h3 className="text-sm sm:text-lg font-medium mb-1">
                                        {item.title}
                                    </h3>

                                    {/* Price */}
                                    <div className="flex items-center gap-2">
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

                {/* Customer Reviews */}
                <div className="bg-white rounded-2xl p-5 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Customer Reviews
                            </h2>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                {renderStars(4.5)}

                                <span className="text-base sm:text-lg font-semibold text-gray-900">
                                    4.5 out of 5
                                </span>

                                <span className="text-sm sm:text-base text-gray-500">
                                    Based on 235 reviews
                                </span>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="w-auto sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                            Write a Review
                        </button>
                    </div>

                    <div className="space-y-6">
                        {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
                            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">{review.author}</h4>
                                            {review.verified && (
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                                                    <IoMdCheckmark className="w-3 h-3" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                        {renderStars(review.rating)}
                                    </div>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{review.text}</p>
                            </div>
                        ))}
                    </div>

                    {reviews.length > 3 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAllReviews(!showAllReviews)}
                                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                {showAllReviews ? 'Show Less Reviews' : 'Load More Reviews'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailsPage
