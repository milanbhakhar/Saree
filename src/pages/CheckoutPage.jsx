import React, { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";


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
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$169.97</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.99</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$14.16</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-lg text-indigo-600">
                    <span>Total</span>
                    <span>$190.12</span>
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
                            placeholder="Jane Smith"
                            value={form.fullName}
                            onChange={handleChange}
                        />

                        <Field
                            label="Street Address *"
                            name="street"
                            placeholder="1226 University Dr"
                            value={form.street}
                            onChange={handleChange}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                                label="City *"
                                name="city"
                                placeholder="Menlo Park"
                                value={form.city}
                                onChange={handleChange}
                            />
                            <Field
                                label="State *"
                                name="state"
                                placeholder="California"
                                value={form.state}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                                label="Postcode *"
                                name="postcode"
                                placeholder="94025"
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
                            placeholder="+1 628 267 9041"
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
                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg"
                        >
                            Continue to Shipping →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// Shipping Stepper
function ShippingStep({ onNext, onBack }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Shipping</h2>

            <div className="flex gap-4 mt-6">
                <button onClick={onBack} className="px-6 py-2 border rounded">
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-2 bg-black text-white rounded"
                >
                    Continue to Payment
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
    return (
        <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">
                Order Confirmed 🎉
            </h2>
            <p>Your order has been placed successfully.</p>
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