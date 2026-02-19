import React, { useState } from 'react'

import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from 'react-icons/fa';


import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import { useNavigate } from 'react-router-dom';

function Shoppingcart() {

    const navigate = useNavigate();

    const initialItems = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            color: "Black",
            size: "Standard",
            price: 149.99,
            original: 199.99,
            discount: 25,
            qty: 1,
            image: image1,
        },
        {
            id: 2,
            name: "Leather Backpack",
            color: "Brown",
            material: "Genuine Leather",
            price: 89.99,
            original: null,
            discount: null,
            qty: 2,
            image: image2,
        },
        {
            id: 3,
            name: "Smart Fitness Watch",
            color: "Silver",
            band: "Sport",
            price: 199.99,
            original: 249.99,
            discount: 20,
            qty: 1,
            image: image3,
        },
        {
            id: 4,
            name: "Premium Wireless Headphones",
            color: "Black",
            size: "Standard",
            price: 149.99,
            original: 199.99,
            discount: 25,
            qty: 1,
            image: image4,
        },
    ];

    const [items, setItems] = useState(initialItems);
    const [coupon, setCoupon] = useState("");

    const updateQty = (id, delta) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
            )
        );
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = items.reduce((sum, item) => {
        if (item.original) return sum + (item.original - item.price) * item.qty;
        return sum;
    }, 0);
    const shipping = 15.0;
    const taxRate = 0.08;
    const tax = (subtotal - discount) * taxRate;
    const total = subtotal - discount + shipping + tax;

    return (
        <>

            <div className="w-full bg-white py-6 sm:py-10 md:py-12">

                <div className="max-w-[95%] sm:max-w-[90%] xl:max-w-[65%] mx-auto px-2 sm:px-0">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Shopping Cart</h1>
                        <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">Review your items and proceed to checkout</p>
                    </div>

                    {items.length === 0 ? (
                        /* ================= EMPTY CART ================= */
                        <div className="min-h-[60vh] flex items-center justify-center">
                            <div className="flex flex-col items-center text-center max-w-md">
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <FaShoppingCart className="text-2xl text-gray-400" />
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900">
                                    Your cart is empty
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Looks like you haven’t added anything yet.
                                </p>

                                <button className="mt-3 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>

                    ) : (

                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                            {/* Cart Items */}
                            <div className="flex-1 min-w-0">
                                <div className="space-y-3 sm:space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 sm:p-5 flex items-start sm:items-center gap-3 sm:gap-4"
                                        >
                                            {/* Image */}
                                            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                                    {item.name}
                                                </h3>

                                                <p className="text-gray-400 text-xs sm:text-sm mt-0.5 truncate">
                                                    {item.color && `Color: ${item.color}`}
                                                    {item.size && ` | Size: ${item.size}`}
                                                    {item.material && ` | Material: ${item.material}`}
                                                    {item.band && ` | Band: ${item.band}`}
                                                </p>

                                                <div className="flex items-center gap-2 mt-1 sm:mt-2">
                                                    <span className="text-indigo-600 font-bold text-base sm:text-lg">
                                                        ${item.price.toFixed(2)}
                                                    </span>

                                                    {item.original && (
                                                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                                                            ${item.original.toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Qty Controls */}
                                            <div className="flex flex-col xs:flex-row items-end xs:items-center gap-2 sm:gap-3 flex-shrink-0">
                                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                    <button
                                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500"
                                                        onClick={() => updateQty(item.id, -1)}
                                                    >
                                                        <FiMinus />
                                                    </button>

                                                    <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-semibold">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500"
                                                        onClick={() => updateQty(item.id, 1)}
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>

                                                <button
                                                    className="text-red-400 hover:text-red-500 text-base sm:text-lg"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <FaRegTrashCan />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Continue Shopping */}
                                <div className="mt-3 sm:mt-4">
                                    <button 
                                     onClick={() => navigate('/')}
                                    className="flex items-center gap-1 text-indigo-600 font-medium hover:underline bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5 w-full text-sm sm:text-base">
                                        <IoArrowBackOutline />
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="w-full lg:w-96 flex-shrink-0">
                                <div className="rounded-lg border border-gray-100 shadow-sm p-4 sm:p-6">
                                    <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Order Summary</h2>

                                    {/* Coupon */}
                                    <div className="mb-4 sm:mb-5">
                                        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-1.5">Coupon Code</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Enter code"
                                                value={coupon}
                                                onChange={(e) => setCoupon(e.target.value)}
                                                className="flex-1 min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-sm sm:text-base outline-none"
                                            />
                                            <button className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold whitespace-nowrap">
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 mb-3 sm:mb-4" />

                                    {/* Line Items */}
                                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Discount</span>
                                            <span className="font-semibold text-green-500">-${discount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping</span>
                                            <span className="font-medium text-gray-800">${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Tax (8%)</span>
                                            <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 my-3 sm:my-4" />

                                    {/* Total */}
                                    <div className="flex justify-between items-center mb-4 sm:mb-5">
                                        <span className="font-bold text-gray-900 text-base sm:text-lg">Total</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-gray-400 text-sm font-medium">USD</span>
                                            <span className="text-lg sm:text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <button
                                        onClick={() => navigate('/check-out')}
                                        className="checkout-btn w-full bg-blue-600 text-white rounded-xl py-3 sm:py-3.5 font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                                        Proceed to Checkout
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>

                                    {/* Trust Badges */}
                                    <div className="mt-4 sm:mt-5">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 text-gray-500 text-sm">

                                            <div className="flex items-center gap-2">
                                                <RiSecurePaymentLine className="text-lg" />
                                                <span>Secure checkout guaranteed</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <MdOutlineLocalShipping className="text-lg" />
                                                <span>Free shipping on orders over $50</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <LuRefreshCcw className="text-lg" />
                                                <span>30-day return policy</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>

        </>
    )
}

export default Shoppingcart
