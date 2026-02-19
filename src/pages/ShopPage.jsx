import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

import { IoIosStar } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

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
import image13 from "../images/i1.png";
import image14 from "../images/i2.png";
import image15 from "../images/i3.png";
import image16 from "../images/i4.png";
import image17 from "../images/i5.png";
import image18 from "../images/i6.png";
import image19 from "../images/i7.png";
import image20 from "../images/i8.png";
import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';


const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedProductColors, setSelectedProductColors] = useState({});
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
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observerTarget = useRef(null);

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

  const products = useMemo(() => [
    {
      id: 1,
      name: 'Classic Tailored Blazer',
      category: "Women's Formal",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 47,
      image: image1,
      colors: ["red", "black", "gray"],
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
      colors: ["blue", "green", "yellow"],
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
      image: image3,
      colors: ["black", "navy", "charcoal"],
    },
    {
      id: 4,
      name: 'Floral Summer Dress',
      category: "Women's Casual",
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 94,
      image: image4,
      colors: ["purple", "maroon", "teal"],
    },
    {
      id: 5,
      name: 'Cozy Knit Sweater',
      category: "Women's Casual",
      price: 79.99,
      rating: 4.5,
      reviews: 56,
      image: image5,
      colors: ["white", "beige", "brown"],
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
      image: image6,
      colors: ["camel", "black", "navy"],
    },
    {
      id: 7,
      name: 'Minimalist Sneakers',
      category: "Women's Shoes",
      price: 119.99,
      rating: 4.7,
      reviews: 201,
      image: image7,
      colors: ["white", "black", "gray"],
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
      colors: ["black", "brown", "tan"],
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
      image: image9,
      colors: ["blue", "white", "gray"],
    },
    {
      id: 10,
      name: 'High-Performance Leggings',
      category: "Women's Sporty",
      price: 69.99,
      rating: 5.0,
      reviews: 312,
      image: image10,
      colors: ["black", "navy", "charcoal"],
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
      colors: ["black", "white", "gray"],
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
      image: image12,
      colors: ["black", "navy", "charcoal"],
    },
    {
      id: 13,
      name: 'Elegant Silk Blouse',
      category: "Women's Formal",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.5,
      reviews: 76,
      image: image13,
      colors: ["white", "cream", "beige"],
    },
    {
      id: 14,
      name: 'Classic Office Blazer',
      category: "Women's Formal",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 134,
      image: image14,
      colors: ["black", "navy", "gray"],
    },
    {
      id: 15,
      name: 'Tailored Straight-Leg Trousers',
      category: "Women's Formal",
      price: 64.99,
      originalPrice: 84.99,
      rating: 4.4,
      reviews: 88,
      image: image15,
      colors: ["black", "navy", "charcoal"],
    },
    {
      id: 16,
      name: 'Chic Midi Wrap Dress',
      category: "Women's Formal",
      price: 74.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 112,
      image: image16,
      colors: ["red", "blue", "green"],
    },
    {
      id: 17,
      name: 'Premium Cotton Shirt',
      category: "Women's Formal",
      price: 39.99,
      originalPrice: 54.99,
      rating: 4.3,
      reviews: 67,
      image: image17,
      colors: ["white", "blue", "gray"],
    },
    {
      id: 18,
      name: 'High-Waist Pleated Skirt',
      category: "Women's Formal",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 91,
      image: image18,
      colors: ["black", "navy", "charcoal"],
    },
    {
      id: 19,
      name: 'Structured Handbag',
      category: "Women's Accessories",
      price: 69.99,
      originalPrice: 94.99,
      rating: 4.7,
      reviews: 143,
      image: image19,
      colors: ["black", "brown", "tan"],
    },
    {
      id: 20,
      name: 'Pointed Toe Heels',
      category: "Women's Footwear",
      price: 79.99,
      originalPrice: 109.99,
      rating: 4.6,
      reviews: 120,
      image: image20,
      colors: ["black", "red", "nude"],
    }

  ], []);

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

  // Get products for a specific page
  const getProductsForPage = useCallback((pageNum, pageSize = 12) => {
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products.slice(startIndex, endIndex);
  }, [products]);

  useEffect(() => {
    setPage(1);
    setIsLoading(false);

    // Load only first 12 products
    const initialProducts = products.slice(0, 12);
    setDisplayedProducts(initialProducts);

    setHasMore(products.length > 12);
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            const nextPage = page + 1;
            const newProducts = getProductsForPage(nextPage, 12);

            if (newProducts.length > 0) {
              setDisplayedProducts(prev => {
                const updated = [...prev, ...newProducts];
                const allLoaded = updated.length >= products.length;
                setHasMore(!allLoaded);
                return updated;
              });
              setPage(nextPage);
            } else {
              setHasMore(false);
            }
            setIsLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, page, getProductsForPage, products.length]);

  return (
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
              <div className="flex items-center mt-4 sm:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>New Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Rated</option>
                </select>
                {/* <div className="flex gap-2">
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
                </div> */}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/details-page/${product.id}`)}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition">
                      <button className="w-full py-3 text-white text-base font-semibold bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-black/30">
                        Add to Cart
                      </button>
                    </div>
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyles(
                          product.badgeType
                        )}`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <span
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
                    >
                      <FiHeart size={16} />
                    </span>
                  </div>
                  <div className="p-4">
                    {/* Variant Colors */}
                    <div className="flex items-center gap-2 mb-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProductColors((prev) => {
                              const currentColor = prev[product.id];

                              // If clicking the same color again, clear all selections
                              if (currentColor === color) {
                                return {};
                              }

                              // Always keep only one active product/color selection
                              return {
                                [product.id]: color,
                              };
                            });
                          }}
                          className={`w-5 h-5 rounded-full cursor-pointer border border-gray-300 ${colorMap[color] || 'bg-gray-300'}
                          ${selectedProductColors[product.id] === color ? "ring-2 ring-black ring-offset-1 ring-offset-white" : ""}`}
                        />
                      ))}
                    </div>
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

            {/* Infinite Scroll Observer & Loading */}
            <div ref={observerTarget} className="h-10 flex justify-center items-center mt-8">
              {isLoading && (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600">Loading more products...</span>
                </div>
              )}
              {!hasMore && displayedProducts.length > 0 && (
                <p className="text-gray-600">No more products to load</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;