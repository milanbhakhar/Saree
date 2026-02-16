import React, { useState, useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

function ShopByCategoryPage() {

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

    // const handleNavigate = (categoryId) => {
    //     navigate(`/shop-page?category=${categoryId}`);
    // };
    const handleNavigate = (categoryId) => {
        navigate(`/category-page`);
    };

    return (
        <>
            <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-20 py-10 sm:py-12">
                {/* Heading */}
                <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">
                    Shop by Category
                </h2>

                {/* Category Slider */}
                <section className='bg-[var(--profile-bg)] ' >

                    {/* Main Container */}
                    <div className=" flex flex-col justify-between w-full" >

                        {/*  */}
                        <div className="relative w-full px-4 lg:px-5 xl:px-10 2xl:px-14">
                            {/* LEFT ARROW */}
                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 -translate-y-1/2 z-20 left-0 xl:-left-6 2xl:-left-0 rounded-full border bg-white border-gray-300 p-2 md:p-2.5 shadow-sm hover:bg-gray-50 transition cursor-pointer">
                                <FaChevronLeft />
                            </button>

                            {/* RIGHT ARROW */}
                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 -translate-y-1/2 z-20 right-0 xl:-right-6 2xl:-right-0 rounded-full border bg-white border-gray-300 p-2 md:p-2.5 shadow-sm hover:bg-gray-50 transition cursor-pointer">
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
                                            <div className="mx-auto w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px]">
                                                <img
                                                    src={category.image}
                                                    alt={category.title}
                                                    onDragStart={(e) => e.preventDefault()} // Prevent native drag
                                                    onClick={(e) => {
                                                        // prevent click if we were dragging
                                                        if (isDown) e.preventDefault();
                                                        else handleNavigate(category.id);
                                                    }}
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
        </>
    )
}

export default ShopByCategoryPage