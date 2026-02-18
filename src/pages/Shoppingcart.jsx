import React, { useState } from 'react'

import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";

function Shoppingcart() {

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

            <div className="w-full bg-white py-10 sm:py-12">

                <div className="max-w-[65%] mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold text-gray-900">Shopping Cart</h1>
                        <p className="text-gray-500 mt-2 text-base">Review your items and proceed to checkout</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Cart Items */}
                        <div className="flex-1">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 flex items-center gap-4"
                                    >
                                        {/* Image */}
                                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-gray-900 text-base">
                                                {item.name}
                                            </h3>

                                            <p className="text-gray-400 text-sm mt-0.5">
                                                {item.color && `Color: ${item.color}`}
                                                {item.size && ` | Size: ${item.size}`}
                                                {item.material && ` | Material: ${item.material}`}
                                                {item.band && ` | Band: ${item.band}`}
                                            </p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-indigo-600 font-bold text-lg">
                                                    ${item.price.toFixed(2)}
                                                </span>

                                                {item.original && (
                                                    <>
                                                        <span className="text-gray-400 line-through text-sm">
                                                            ${item.original.toFixed(2)}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Qty Controls */}
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                <button
                                                    className="w-10 h-10 flex items-center justify-center text-gray-500"
                                                    onClick={() => updateQty(item.id, -1)}
                                                >
                                                    <FiMinus />
                                                </button>

                                                <span className="w-8 text-center text-sm font-semibold">
                                                    {item.qty}
                                                </span>

                                                <button
                                                    className="w-10 h-10 flex items-center justify-center text-gray-500"
                                                    onClick={() => updateQty(item.id, 1)}
                                                >
                                                    <FiPlus />
                                                </button>
                                            </div>

                                            <button
                                                className="text-red-400 hover:text-red-500 text-lg"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-4">
                                <button className="flex items-center gap-1 text-indigo-600 font-medium hover:underline bg-white rounded-lg border border-gray-100 shadow-sm p-5 w-full">
                                    <IoArrowBackOutline />
                                    Continue Shopping
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

                                {/* Coupon */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Coupon Code</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
                                        />
                                        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100 mb-4" />

                                {/* Line Items */}
                                <div className="space-y-3 text-sm">
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
                                <div className="border-t border-gray-100 my-4" />

                                {/* Total */}
                                <div className="flex justify-between items-center mb-5">
                                    <span className="font-bold text-gray-900 text-base">Total</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-gray-400 text-xs font-medium">USD</span>
                                        <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="checkout-btn w-full bg-indigo-600 text-white rounded-xl py-3.5 font-semibold text-base flex items-center justify-center gap-2">
                                    Proceed to Checkout
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>

                                {/* Trust Badges */}
                                <div className="mt-5 space-y-2.5">
                                    {[
                                        { icon: "🛡️", text: "Secure checkout guaranteed" },
                                        { icon: "🚚", text: "Free shipping on orders over $50" },
                                        { icon: "🔄", text: "30-day return policy" },
                                    ].map((badge) => (
                                        <div key={badge.text} className="flex items-center gap-2 text-gray-500 text-xs">
                                            <span>{badge.icon}</span>
                                            <span>{badge.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shoppingcart
