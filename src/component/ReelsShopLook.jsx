import React, { useEffect, useRef, useState } from 'react'
import reels1 from '../Video/reels.mp4'
import reels2 from '../Video/reels.mp4'
import reels3 from '../Video/reels.mp4'
import reels4 from '../Video/reels.mp4'

function ReelsShopLook() {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const animationRef = useRef(null);
    const isPausedRef = useRef(false);

    const looks = [
        {
            id: 1,
            head: "Suits",
            title: "Summer Vibes Collection",
            video: reels1,
        },
        {
            id: 2,
            head: "Sarees",
            title: "Festive Ethnic Wear",
            video: reels2,
        },
        {
            id: 3,
            head: "Streetwear",
            title: "Streetwear Essentials",
            video: reels3,
        },
        {
            id: 4,
            head: "Workwear",
            title: "Office Chic",
            video: reels4,
        },
        {
            id: 5,
            head: "Accessories",
            title: "Summer Vibes Collection",
            video: reels1,
        },
        {
            id: 6,
            head: "Footwear",
            title: "Festive Ethnic Wear",
            video: reels2,
        },
    ];

    // Duplicate the array for infinite scroll
    const duplicatedLooks = [...looks, ...looks];

    // Smooth auto-scroll with requestAnimationFrame
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const autoScroll = () => {
            if (!isPausedRef.current && !isDragging && scrollContainer) {
                scrollContainer.scrollLeft += 1; // Adjust speed here (higher = faster)

                // Get the width of original content (half of total since we duplicated)
                const scrollWidth = scrollContainer.scrollWidth / 2;

                // Reset to start when we've scrolled through the first set
                if (scrollContainer.scrollLeft >= scrollWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }

            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        const handleMouseEnter = () => {
            isPausedRef.current = true;
        };

        const handleMouseLeave = () => {
            isPausedRef.current = false;
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging]);

    // Drag to scroll functionality
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';

            // Check and reset position if needed after drag
            const scrollWidth = scrollRef.current.scrollWidth / 2;
            if (scrollRef.current.scrollLeft >= scrollWidth) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - scrollWidth;
            } else if (scrollRef.current.scrollLeft < 0) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + scrollWidth;
            }
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        // Check and reset position if needed after touch
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth / 2;
            if (scrollRef.current.scrollLeft >= scrollWidth) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - scrollWidth;
            } else if (scrollRef.current.scrollLeft < 0) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + scrollWidth;
            }
        }
    };

    return (
        <>
            <section className="bg-gray-100 py-10 sm:py-12 mx-auto overflow-hidden">
                <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">
                    Shop the Look
                </h2>

                <div className="relative perspective-1000">
                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-4 cursor-grab select-none"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollBehavior: 'auto' // Changed from scroll-smooth
                        }}
                    >
                        {duplicatedLooks.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="flex-shrink-0 transition-all duration-500 ease-out hover:scale-105"
                                style={{
                                    width: 'clamp(280px, 25vw, 350px)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <div className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-white h-full">
                                    {/* MEDIA CONTAINER (VIDEO) */}
                                    <div className="w-full aspect-[3/4] overflow-hidden relative">
                                        <video
                                            src={item.video}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            draggable="false"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Title overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-sm sm:text-lg font-medium text-gray-800">{item.head}</p>
                                        <h3 className="text-white text-base font-medium">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Optional: Scroll indicators */}
                    {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" /> */}
                </div>
            </section>
        </>
    )
}

export default ReelsShopLook
