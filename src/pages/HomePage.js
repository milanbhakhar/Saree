import React, { useState, useEffect, useRef } from 'react'
import HeroBanner from '../component/HeroBanner'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReelsShopLook from '../component/ReelsShopLook'

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";

function HomePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  const categories = [
    {
      id: 1,
      title: "Suits",
      subtitle: "Sophisticated & Elegant",
      image: image1
    },
    {
      id: 2,
      title: "Sarees",
      subtitle: "Traditional Elegance",
      image: image2
    },
    {
      id: 3,
      title: "Dresses",
      subtitle: "Modern & Chic",
      image: image3
    },
    {
      id: 4,
      title: "Suits",
      subtitle: "Sophisticated & Elegant",
      image: image4
    },
    {
      id: 5,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image5
    },
    {
      id: 6,
      title: "Dresses",
      subtitle: "Traditional Elegance",
      image: image6
    },
    {
      id: 7,
      title: "Suits",
      subtitle: "Modern & Chic",
      image: image7
    },
    {
      id: 8,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image8
    },
    {
      id: 9,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image9
    },
    {
      id: 10,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image10
    },
    {
      id: 11,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image11
    },
    {
      id: 12,
      title: "Sarees",
      subtitle: "Sophisticated & Elegant",
      image: image12
    }
  ];

  const products = [
    {
      id: 1,
      title: "Floral Midi Dress",
      price: 2499,
      oldPrice: 3599,
      badge: "-30%",
      image: image1,
    },
    {
      id: 2,
      title: "Silk Kurta Set",
      price: 3299,
      image: image2,
    },
    {
      id: 3,
      title: "Designer Blazer",
      price: 4999,
      badge: "NEW",
      badgeColor: "bg-green-500",
      image: image3,
    },
    {
      id: 4,
      title: "Evening Gown",
      price: 5999,
      oldPrice: 7999,
      badge: "-25%",
      image: image4,
    },
    {
      id: 5,
      title: "Floral Midi Dress",
      price: 2499,
      oldPrice: 3599,
      badge: "-30%",
      image: image1,
    },
    {
      id: 6,
      title: "Silk Kurta Set",
      price: 3299,
      image: image2,
    },
    {
      id: 7,
      title: "Designer Blazer",
      price: 4999,
      badge: "NEW",
      badgeColor: "bg-green-500",
      image: image3,
    },
    {
      id: 8,
      title: "Evening Gown",
      price: 5999,
      oldPrice: 7999,
      badge: "-25%",
      image: image4,
    },
  ];

  // Calculate cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setCardsToShow(7);
      } else if (width >= 870) {
        setCardsToShow(4);
      } else if (width >= 768) {
        setCardsToShow(3);
      } else if (width >= 576) {
        setCardsToShow(3);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow(); // initial load
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Horizontal Scroll Logic
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Drag to Scroll
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel Scroll (Horizontal)
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleNavigate = (categoryId) => {
    navigate(`/shop-page?category=${categoryId}`);
  };

  // Product scroll functionality
  const productScrollRef = useRef(null);

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
    <>

      {/* -*-*-*-*-* Hero Banner -*-*-*-*-* */}
      <HeroBanner />

      {/* -*-*-*-*-* Home Page Content -*-*-*-*-* */}

      {/* -*-*-*-*-* Shop by Category -*-*-*-*-* */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-20 py-10 sm:py-16">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">
          Shop by Category
        </h2>

        {/* Category Slider */}
        <section className='bg-[var(--profile-bg)] py-4 sm:py-8' >

          {/* Main Container */}
          <div className=" flex flex-col justify-between w-full" >

            <div className="relative w-full px-4 lg:px-5 xl:px-10 2xl:px-14">
              {/* LEFT ARROW */}
              <button
                onClick={handlePrev}
                className="
                absolute top-1/2 -translate-y-1/2 z-20
                left-0
                xl:-left-6 2xl:-left-0
                rounded-full border bg-white border-gray-300
                p-2 md:p-2.5
                shadow-sm
                hover:bg-gray-50 transition cursor-pointer
              "
              >
                <FaChevronLeft />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={handleNext}
                className="
                absolute top-1/2 -translate-y-1/2 z-20
                right-0
                xl:-right-6 2xl:-right-0
                rounded-full border bg-white border-gray-300
                p-2 md:p-2.5
                shadow-sm
                hover:bg-gray-50 transition cursor-pointer
              "
              >
                <FaChevronRight />
              </button>

              {/* IMAGES SCROLL CONTAINER */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                style={{ scrollBehavior: isDown ? 'auto' : 'smooth' }} // Disable smooth scroll while dragging
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onWheel={handleWheel}
              >
                <div className="mt-6 flex gap-4 sm:gap-6 lg:gap-8 px-8 w-max">
                  {categories.map((category) => (
                    <div
                      key={`${category.id}-${category.title}`}
                      className="text-center select-none"
                    >
                      <div className="
                        mx-auto w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px]">
                        <img
                          src={category.image}
                          alt={category.title}
                          onDragStart={(e) => e.preventDefault()} // Prevent native drag
                          // onClick={(e) => {
                          //   // prevent click if we were dragging
                          //   if (isDown) e.preventDefault();
                          //   else handleNavigate(category.id);
                          // }}
                          className="w-full h-full object-cover rounded-full border border-gray-300 cursor-pointer"
                        />
                      </div>

                      <p
                        onClick={() => handleNavigate(category.id)}
                        className="mt-3 font-bold text-sm sm:text-base md:text-lg cursor-pointer hover:text-black transition"
                      >
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>

      {/* -*-*-*-*-* Trending Now -*-*-*-*-* */}
      <section className="w-full bg-white py-12">
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
                className="product-card flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]"
              >
                <div className="relative rounded-xl overflow-hidden">
                  {item.badge && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-xs text-white rounded-full z-10 ${item.badgeColor || "bg-red-500"
                        }`}
                    >
                      {item.badge}
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="mt-3">
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

      {/* Shop the Look Reels */}
      <ReelsShopLook />

      {/* Flash Sale */}
      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-20 mx-auto py-12">
        {/* Shareable Container */}
        <div
          className="relative w-full py-20 px-4 sm:px-8 lg:px-20 rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center text-center text-white"
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/15 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-white/15 rounded-full" />

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-8">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
              Flash Sale – Limited Time Only!
            </h1>

            <p className="text-base md:text-lg mb-4">
              Use code{" "}
              <span className="inline-block px-1 py-1 text-black font-bold">
                FLASH70
              </span>{" "}
              for 70% OFF
            </p>

            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default HomePage
