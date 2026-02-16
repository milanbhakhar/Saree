import React, { useState } from 'react';

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import image5 from "../images/i5.png";
import image6 from "../images/i6.png";
import image7 from "../images/i7.png";
import image8 from "../images/i8.png";
import image9 from "../images/i9.png";
import image10 from "../images/i10.avif";
import image11 from "../images/i11.png";
import image12 from "../images/i12.png";
import banner from '../images/5.png';


import { IoIosStar } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';


function CategoryPage() {

    const [priceRange, setPriceRange] = useState([0, 500]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState(['Formal']);
    const [selectedCategories, setSelectedCategories] = useState(['Women']);
    const [expandedSections, setExpandedSections] = useState({
        price: true,
        color: true,
        size: true,
        style: true,
        category: true
    });
    const [viewMode, setViewMode] = useState('grid');

    const colors = [
        { name: 'Black', hex: '#000000' },
        { name: 'Gray', hex: '#6B7280' },
        { name: 'Blue', hex: '#3B82F6' },
        { name: 'Navy', hex: '#1E3A8A' },
        { name: 'Red', hex: '#EF4444' },
        { name: 'Green', hex: '#10B981' },
        { name: 'Yellow', hex: '#FBBF24' },
        { name: 'Purple', hex: '#A855F7' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Orange', hex: '#F97316' },
        { name: 'Teal', hex: '#14B8A6' },
        { name: 'Brown', hex: '#92400E' }
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

    const styles = [
        { name: 'Casual', count: 122 },
        { name: 'Formal', count: 189 },
        { name: 'Streetwear', count: 95 },
        { name: 'Sporty', count: 78 }
    ];

    const categories = [
        { name: 'Men', count: 224 },
        { name: 'Women', count: 312 },
        { name: 'Accessories', count: 186 },
        { name: 'Shoes', count: 168 }
    ];

    const products = [
        {
            id: 1,
            name: 'Classic Tailored Blazer',
            category: "Women's Formal",
            price: 159.99,
            originalPrice: 199.99,
            rating: 4.7,
            reviews: 47,
            image: image1,
            badge: '-30%',
            badgeType: 'sale'
        },
        {
            id: 2,
            name: 'Essential Cotton Tee',
            category: "Women's Casual",
            price: 29.99,
            rating: 5.0,
            reviews: 82,
            image: image2,
            badge: 'New',
            badgeType: 'new'
        },
        {
            id: 3,
            name: 'High-Waist Denim Jeans',
            category: "Women's Casual",
            price: 89.99,
            rating: 4.6,
            reviews: 143,
            image: image3
        },
        {
            id: 4,
            name: 'Floral Summer Dress',
            category: "Women's Casual",
            price: 64.99,
            originalPrice: 89.99,
            rating: 4.8,
            reviews: 94,
            image: image4
        },
        {
            id: 5,
            name: 'Cozy Knit Sweater',
            category: "Women's Casual",
            price: 79.99,
            rating: 4.5,
            reviews: 56,
            image: image5,
            badge: 'Trending',
            badgeType: 'trending'
        },
        {
            id: 6,
            name: 'Classic Trench Coat',
            category: "Women's Formal",
            price: 189.99,
            rating: 4.9,
            reviews: 78,
            image: image6
        },
        {
            id: 7,
            name: 'Minimalist Sneakers',
            category: "Women's Shoes",
            price: 119.99,
            rating: 4.7,
            reviews: 201,
            image: image7
        },
        {
            id: 8,
            name: 'Leather Crossbody Bag',
            category: "Women's Accessories",
            price: 169.99,
            originalPrice: 199.99,
            rating: 4.6,
            reviews: 89,
            image: image8,
            badge: '-15%',
            badgeType: 'sale'
        },
        {
            id: 9,
            name: 'Striped Button-Up Shirt',
            category: "Women's Casual",
            price: 49.99,
            rating: 4.4,
            reviews: 67,
            image: image9
        },
        {
            id: 10,
            name: 'High-Performance Leggings',
            category: "Women's Sporty",
            price: 69.99,
            rating: 5.0,
            reviews: 312,
            image: image10,
            badge: 'Best Seller',
            badgeType: 'best'
        },
        {
            id: 11,
            name: 'Silk Printed Scarf',
            category: "Women's Accessories",
            price: 39.99,
            rating: 4.5,
            reviews: 124,
            image: image11,
            badge: '-20%',
            badgeType: 'sale'
        },
        {
            id: 12,
            name: 'Professional Pencil Skirt',
            category: "Women's Formal",
            price: 59.99,
            originalPrice: 79.99,
            rating: 4.6,
            reviews: 98,
            image: image12
        }
    ];

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleColor = (color) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    const toggleSize = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const toggleStyle = (style) => {
        setSelectedStyles(prev =>
            prev.includes(style)
                ? prev.filter(s => s !== style)
                : [...prev, style]
        );
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearAllFilters = () => {
        setPriceRange([0, 500]);
        setSelectedColors([]);
        setSelectedSizes([]);
        setSelectedStyles([]);
        setSelectedCategories([]);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <IoIosStar
                        key={star}
                        filled={star <= Math.floor(rating) || star - 0.5 <= rating}
                        className={`w-3.5 h-3.5 ${star <= Math.floor(rating)
                            ? 'text-yellow-400'
                            : star - 0.5 <= rating
                                ? 'text-yellow-400'
                                : 'text-gray-200'
                            }`}
                    />
                ))}
            </div>
        );
    };

    const getBadgeStyles = (type) => {
        switch (type) {
            case 'sale':
                return 'bg-red-500 text-white';
            case 'new':
                return 'bg-green-500 text-white';
            case 'trending':
                return 'bg-blue-500 text-white';
            case 'best':
                return 'bg-purple-600 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            {/* <div className="bg-white border-b">
                <div className="max-w-[1400px] mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="hover:text-gray-900 cursor-pointer">Home</span>
                        <HiOutlineChevronRight className="w-4 h-4" />
                        <span className="hover:text-gray-900 cursor-pointer">Shop</span>
                        <HiOutlineChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Women's Fashion</span>
                    </div>
                </div>
            </div> */}

            {/* Breadcrumb Section */}
            {/* <div className="bg-white border-b">
                <div className="max-w-[1400px] mx-auto px-4 py-8 text-center">

                    <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
                        <span className="hover:text-black cursor-pointer transition">
                            Home
                        </span>

                        <HiOutlineChevronRight className="w-4 h-4" />

                        <span className="hover:text-black cursor-pointer transition">
                            Shop
                        </span>

                        <HiOutlineChevronRight className="w-4 h-4" />

                        <span className="text-black font-medium">
                            Women's Fashion
                        </span>
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900">
                        Women's Fashion
                    </h2>

                </div>
            </div> */}

            {/* Hero Banner */}
            <section className="relative w-full px-4 lg:px-8 mx-auto h-[21vh] mx:h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">

                {/* Background Image */}
                <img
                    src={banner}
                    alt="Women's Fashion"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </section>

            {/* main section */}
            <div className="w-full bg-white py-10 sm:py-12">
                <div className="px-4 sm:px-8 lg:px-20 mx-auto">
                    <div className="flex flex-col sm:flex-row gap-8">

                        {/* Filters Sidebar */}
                        <aside className="sm:w-60 lg:w-64 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-semibold">Filters</h2>
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection('price')}
                                        className="flex items-center justify-between w-full mb-4"
                                    >
                                        <h3 className="font-medium">Price Range</h3>
                                        {expandedSections.price ? (
                                            <IoChevronUpOutline className="w-4 h-4" />
                                        ) : (
                                            <IoChevronDownOutline className="w-4 h-4" />
                                        )}
                                    </button>
                                    {expandedSections.price && (
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div>
                                                    <label className="text-xs text-gray-500 mb-1 block">Min</label>
                                                    <input
                                                        type="number"
                                                        value={priceRange[0]}
                                                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-gray-500 mb-1 block">Max</label>
                                                    <input
                                                        type="number"
                                                        value={priceRange[1]}
                                                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="500"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                                className="w-full accent-blue-600"
                                            />
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>${priceRange[0]}</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Color */}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection('color')}
                                        className="flex items-center justify-between w-full mb-4"
                                    >
                                        <h3 className="font-medium">Color</h3>
                                        {expandedSections.color ? (
                                            <IoChevronUpOutline className="w-4 h-4" />
                                        ) : (
                                            <IoChevronDownOutline className="w-4 h-4" />
                                        )}
                                    </button>
                                    {expandedSections.color && (
                                        <div className="grid grid-cols-6 gap-2">
                                            {colors.map((color) => (
                                                <button
                                                    key={color.name}
                                                    onClick={() => toggleColor(color.name)}
                                                    className={`w-8 h-8 rounded-full border-2 ${selectedColors.includes(color.name)
                                                        ? 'border-blue-600 ring-2 ring-blue-200'
                                                        : 'border-gray-300'
                                                        }`}
                                                    style={{ backgroundColor: color.hex }}
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Size */}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection('size')}
                                        className="flex items-center justify-between w-full mb-4"
                                    >
                                        <h3 className="font-medium">Size</h3>
                                        {expandedSections.size ? (
                                            <IoChevronUpOutline className="w-4 h-4" />
                                        ) : (
                                            <IoChevronDownOutline className="w-4 h-4" />
                                        )}
                                    </button>
                                    {expandedSections.size && (
                                        <div className="grid grid-cols-4 gap-2">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => toggleSize(size)}
                                                    className={`py-2 px-3 text-sm font-medium rounded border ${selectedSizes.includes(size)
                                                        ? 'bg-gray-900 text-white border-gray-900'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Style */}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection('style')}
                                        className="flex items-center justify-between w-full mb-4"
                                    >
                                        <h3 className="font-medium">Style</h3>
                                        {expandedSections.style ? (
                                            <IoChevronUpOutline className="w-4 h-4" />
                                        ) : (
                                            <IoChevronDownOutline className="w-4 h-4" />
                                        )}
                                    </button>
                                    {expandedSections.style && (
                                        <div className="space-y-2">
                                            {styles.map((style) => (
                                                <label key={style.name} className="flex items-center justify-between cursor-pointer">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedStyles.includes(style.name)}
                                                            onChange={() => toggleStyle(style.name)}
                                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">{style.name}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">({style.count})</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Category */}
                                <div className="mb-6">
                                    <button
                                        onClick={() => toggleSection('category')}
                                        className="flex items-center justify-between w-full mb-4"
                                    >
                                        <h3 className="font-medium">Category</h3>
                                        {expandedSections.category ? (
                                            <IoChevronUpOutline className="w-4 h-4" />
                                        ) : (
                                            <IoChevronDownOutline className="w-4 h-4" />
                                        )}
                                    </button>
                                    {expandedSections.category && (
                                        <div className="space-y-2">
                                            {categories.map((category) => (
                                                <label key={category.name} className="flex items-center justify-between cursor-pointer">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedCategories.includes(category.name)}
                                                            onChange={() => toggleCategory(category.name)}
                                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">({category.count})</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Apply Filters Button */}
                                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                    Apply Filters
                                </button>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <main className="flex-1">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold mb-1">Women's Collection</h1>
                                    <p className="text-sm text-gray-500">Showing 1-24 of 232 products</p>
                                </div>
                                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>New Arrivals</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Best Rated</option>
                                    </select>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded ${viewMode === 'grid'
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-white text-gray-700 border border-gray-300'
                                                }`}
                                        >
                                            <RiLayoutGridFill className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded ${viewMode === 'list'
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-white text-gray-700 border border-gray-300'
                                                }`}
                                        >
                                            <VscThreeBars className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        onClick={() => navigate(`/details-page/${product.id}`)}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden bg-gray-100 aspect-[4/5]">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {product.badge && (
                                                <span
                                                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyles(
                                                        product.badgeType
                                                    )}`}
                                                >
                                                    {product.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                                            <div className="flex items-center gap-2 mb-3">
                                                {renderStars(product.rating)}
                                                <span className="text-xs text-gray-500">
                                                    ({product.reviews})
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-gray-900">
                                                    ${product.price}
                                                </span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        ${product.originalPrice}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-12 flex justify-center">
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                                        Previous
                                    </button>
                                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
                                        1
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                                        2
                                    </button>
                                    <span className="px-2">...</span>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                                        10
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage