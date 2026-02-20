import React, { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import { useNavigate } from 'react-router-dom';
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { IoArrowBackOutline, IoArrowForwardOutline, IoCheckmarkOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";



export default function CheckoutPage() {
    const steps = ["Address", "Shipping", "Payment", "Confirmation"];
    const [step, setStep] = useState(1);

    // Step renderer
    const renderStep = () => {
        switch (step) {
            case 1:
                return <AddressStep onNext={() => setStep(2)} />;
            case 2:
                return (
                    <ShippingStep
                        onNext={() => setStep(3)}
                        onBack={() => setStep(1)}
                    />
                );
            case 3:
                return (
                    <PaymentStep
                        onNext={() => setStep(4)}
                        onBack={() => setStep(2)}
                    />
                );
            case 4:
                return <ConfirmationStep />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full bg-white pt-1">
            {/* Stepper */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between relative">
                        {steps.map((label, index) => {
                            const num = index + 1;
                            const active = num === step;
                            const done = num < step;

                            return (
                                <div
                                    key={label}
                                    onClick={() => num <= step && setStep(num)} // prevent skipping
                                    className="flex-1 flex flex-col items-center relative cursor-pointer"
                                >
                                    {/* line */}
                                    {index !== steps.length - 1 && (
                                        <div
                                            className={`absolute top-4 left-1/2 w-full h-[2px]
                                        ${done ? "bg-green-500" : "bg-gray-200"}`}
                                        />
                                    )}

                                    {/* circle */}
                                    <div
                                        className={`z-10 w-9 h-9 flex items-center justify-center rounded-full font-semibold text-sm
                                            ${done
                                                ? "bg-green-500 text-white"
                                                : active
                                                    ? "bg-gray-800 text-white"
                                                    : "bg-gray-200 text-gray-500"
                                            }`}
                                    >
                                        {done ? "✓" : num}
                                    </div>

                                    {/* label */}
                                    <p
                                        className={`mt-2 text-sm md:text-base font-medium text-center
                                            ${active
                                                ? "text-gray-800 font-bold"
                                                : done
                                                    ? "text-green-600"
                                                    : "text-gray-500"
                                            }`}
                                    >
                                        {label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Step Content */}
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* LEFT: FORM */}
                        <div className="lg:col-span-8">
                            {renderStep()}
                        </div>

                        {/* RIGHT: GRAY AREA / ORDER SUMMARY */}
                        <div className="lg:col-span-4">
                            <div className="h-full bg-gray-100 rounded-xl">
                                <OrderSummary />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

function OrderSummary() {

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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
            <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Order Summary</h2>

            <div className="space-y-4 mb-5">
                {initialItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover border border-slate-100"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-700 truncate">{item.name}</p>
                            <p className="text-xs text-slate-400">Qty: {item.qty}</p>
                        </div>
                        <span className="text-sm font-bold text-slate-800">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3 sm:my-4" />

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
            <div className="border-t border-gray-200 my-3 sm:my-4" />

            {/* Total */}
            <div className="flex justify-between items-center mb-4 sm:mb-5">
                <span className="font-bold text-gray-900 text-base sm:text-lg">Total</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-sm font-medium">USD</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Trust Badges */}
            {/* <div className="mt-4 sm:mt-5">
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
            </div> */}

            {/* Trust Badges */}
            <div className="mt-4 sm:mt-5 space-y-3">
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-violet-50 border border-violet-100">
                    <span className="text-violet-600">
                        <RiSecurePaymentLine className="w-6 h-6" />
                    </span>
                    <div>
                        <p className="text-xs font-bold text-violet-700">Secure Checkout</p>
                        <p className="text-xs text-violet-500">SSL encrypted payment processing</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                    <span className="text-emerald-600">
                        <MdOutlineLocalShipping className="w-6 h-6" />
                    </span>
                    <div>
                        <p className="text-xs font-bold text-emerald-700">Fast Shipping</p>
                        <p className="text-xs text-emerald-500">Free returns within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Address Stepper
function AddressStep({ onNext }) {

    const [form, setForm] = React.useState({
        fullName: "",
        street: "",
        city: "",
        state: "",
        postcode: "",
        country: "United States",
        phone: "",
        saveAddress: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <>
            <div className="w-full bg-gray-100">
                {/* Card */}
                <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                            Shipping Address
                        </h2>

                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <FaLocationDot className="text-[#4f46e5]" />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        <Field
                            label="Full Name *"
                            name="fullName"
                            placeholder="Full Name"
                            value={form.fullName}
                            onChange={handleChange}
                        />

                        <Field
                            label="Street Address *"
                            name="street"
                            placeholder="Street Address"
                            value={form.street}
                            onChange={handleChange}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                                label="City *"
                                name="city"
                                placeholder="City"
                                value={form.city}
                                onChange={handleChange}
                            />
                            <Field
                                label="State *"
                                name="state"
                                placeholder="State"
                                value={form.state}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                                label="Postcode *"
                                name="postcode"
                                placeholder="Postcode"
                                value={form.postcode}
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Country *"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                options={["United States", "India", "Canada"]}
                            />
                        </div>

                        <Field
                            label="Phone Number *"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                        />

                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="saveAddress"
                                checked={form.saveAddress}
                                onChange={handleChange}
                            />
                            Save this address for future orders
                        </label>

                        <button
                            onClick={() => onNext(form)}
                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                        >
                            <span>Continue to Shipping</span>
                            <IoArrowForwardOutline className="text-lg relative top-[1px]" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// Shipping Stepper
function ShippingStep({ onNext, onBack }) {

    const [selected, setSelected] = useState("standard");

    const options = [
        {
            id: "standard",
            title: "Standard Shipping",
            desc: "5-7 business days",
            price: "$5.99",
        },
        {
            id: "express",
            title: "Express Shipping",
            desc: "2-3 business days",
            price: "$14.99",
        },
        {
            id: "overnight",
            title: "Overnight Delivery",
            desc: "Next business day",
            price: "$24.99",
        },
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">
                    Shipping Method
                </h2>

                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaShippingFast />
                </div>
            </div>

            {/* Shipping Options */}
            <div className="space-y-4">
                {options.map((option) => {
                    const isActive = selected === option.id;

                    return (
                        <label
                            key={option.id}
                            className={`flex items-center justify-between gap-4 rounded-xl border p-4 sm:p-5 cursor-pointer transition
                                ${isActive
                                    ? "border-indigo-500 bg-indigo-50"
                                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                }`}
                        >

                            <div className="flex items-start gap-4">
                                {/* Radio */}
                                <div
                                    className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center
                                        ${isActive
                                            ? "border-indigo-500"
                                            : "border-gray-400"
                                        }`}
                                >
                                    {isActive && (
                                        <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                                    )}
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {option.title}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {option.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <p className="font-semibold text-gray-900">
                                {option.price}
                            </p>

                            <input
                                type="radio"
                                className="hidden"
                                checked={isActive}
                                onChange={() => setSelected(option.id)}
                            />
                        </label>
                    );
                })}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                    onClick={onBack}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                    <IoArrowBackOutline className="text-lg relative top-[1px]" />
                    Back
                </button>

                <button
                    onClick={onNext}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                    Continue to Payment
                    <IoArrowForwardOutline className="text-lg relative top-[1px]" />
                </button>
            </div>
        </div>
    );
}

// Payment Stepper
function PaymentStep({ onNext, onBack }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>

            <div className="flex gap-4 mt-6">
                <button onClick={onBack} className="px-6 py-2 border rounded">
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-2 bg-black text-white rounded"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}

// Confirmation Stepper
function ConfirmationStep() {

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

    const shippingCost = 5.99;
    const taxRate = 0.08;

    const subtotal = initialItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">

            {/* Success Icon */}
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <IoCheckmarkOutline className="text-green-600 text-3xl sm:text-4xl" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    Order Confirmed!
                </h2>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Thank you for your purchase. Your order has been successfully placed.
                </p>
            </div>

            {/* Order Info */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mt-8 text-sm sm:text-base">
                <div className="flex justify-between mb-3">
                    <span className="text-gray-500">Order Number</span>
                    <span className="font-medium text-gray-900">
                        #ORD-2024-1847
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Order Date</span>
                    <span className="font-medium text-gray-900">
                        January 20, 2024
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6" />

            {/* Order Summary */}
            <h3 className="text-lg font-semibold mb-6">
                Order Summary
            </h3>

            <div className="space-y-5">
                {initialItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-3 sx:flex-row sx:items-center sx:justify-between"
                    >
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-3 sx:gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border overflow-hidden flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="font-medium text-gray-900 text-sm sx:text-base leading-snug line-clamp-2">
                                    {item.name}
                                </p>
                                <p className="text-xs sx:text-sm text-gray-500">
                                    Quantity: {item.qty}
                                </p>
                            </div>
                        </div>

                        {/* Right: Price */}
                        <p className="font-medium text-gray-900 text-sm sx:text-base sx:ml-4">
                            ${(item.price * item.qty).toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pricing */}
            <div className="border-t border-gray-200 mt-6 pt-4 text-sm sm:text-base space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>Shipping (Standard)</span>
                    <span>${shippingCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8" />

                <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total</span>
                    <span className="text-indigo-600">
                        ${total.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="w-full px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
                    View Order Details
                </button>

                <button className="w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

/* ---------- Reusable Fields ---------- */

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                   focus:outline-none focus:ring-2 focus:ring-black/60"
            />
        </div>
    );
}

function SelectField({ label, name, value, onChange, options }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white
                   focus:outline-none focus:ring-2 focus:ring-black/60"
            >
                <option value="" disabled>
                    Select country
                </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
