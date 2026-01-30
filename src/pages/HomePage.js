import React, { useState, useEffect } from 'react'
import HeroBanner from '../component/HeroBanner'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

  // Calculate cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(7); // lg: 4 cards
      } else if (window.innerWidth >= 640) {
        setCardsToShow(3); // sm: 3 cards
      } else {
        setCardsToShow(2); // mobile: 2 cards
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Calculate visible cards
  const visibleCategories = categories.slice(currentIndex, currentIndex + cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(categories.length - cardsToShow, prev + 1));
  };

  const handleNavigate = (categoryId) => {
    navigate(`/shop-page?category=${categoryId}`);
  };

  return (
    <>

      {/* -*-*-*-*-* Hero Banner -*-*-*-*-* */}
      <HeroBanner />

      {/* -*-*-*-*-* Home Page Content -*-*-*-*-* */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-20 py-20">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">
          Shop by Category
        </h2>

        {/* Category Slider */}
        <section className='bg-[var(--profile-bg)] py-7 md:py-14' >

          {/* Main Container */}
          <div className="main_container flex flex-col justify-between w-full" >

            {/* Title */}
            <div className="flex gap-2 items-center justify-between" >
              {/* Title */}
              {/* <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold  text-[#0A0E17]" >
                Shop by Category
              </h1 > */}
              <div></div>

              {/* Navigation Arrows */}
              {/* <div className="flex items-center gap-2" >
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="rounded-full text-sm border bg-[#FFFFFF] border-[#E5E7EB] p-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors">
                  <FaChevronLeft className="" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= categories.length - cardsToShow}
                  className="rounded-full text-sm border bg-[#FFFFFF] border-[#E5E7EB] p-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors">
                  <FaChevronRight className="" />
                </button>
              </div > */}
            </div >

            {/* image */}
            {/* <div className='overflow-hidden' >
              <div className='mt-6 flex gap-8 '>
                {visibleCategories.map((category) => (

                  <div
                    key={`${category.id}-${category.title}`}
                    className='w-full h-full '>
                    <div className='lg:w-[200px] lg:h-[200px] sm:h-[176px] sm:w-[176px] w-[120px] h-[120px] mx-auto '>
                      <img
                        src={category.image}
                        alt={category.title}
                        className='rounded-full h-full w-full object-cover border border-[#E5E7EB] cursor-pointer hover:border-[#0A0E17] transition-colors' onClick={() => handleNavigate(category.id)} />
                    </div>
                    <p className='text-base md:text-lg text-center text-[#111827] font-bold mt-3 cursor-pointer hover:text-[#0A0E17] transition-colors' onClick={() => handleNavigate(category.id)} >{category.title}</p>
                  </div>
                ))}
              </div>
            </div > */}
  
            <div className="relative w-full">

              {/* LEFT ARROW */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="
                absolute left-0 top-1/2 -translate-y-1/2 z-10
                rounded-full border bg-white border-gray-300
                p-2 md:p-2.5
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:bg-gray-50 transition
              "
              >
                <FaChevronLeft />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={handleNext}
                disabled={currentIndex >= categories.length - cardsToShow}
                className="
                absolute right-0 top-1/2 -translate-y-1/2 z-10
                rounded-full border bg-white border-gray-300
                p-2 md:p-2.5
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:bg-gray-50 transition
              "
              >
                <FaChevronRight />
              </button>

              {/* IMAGES */}
              <div className="overflow-hidden">
                <div className="mt-6 flex gap-4 sm:gap-6 lg:gap-8 px-8">
                  {visibleCategories.map((category) => (
                    <div
                      key={`${category.id}-${category.title}`}
                      className="w-full text-center"
                    >
                      <div className="
                        mx-auto
                        w-[120px] h-[120px]
                        sm:w-[160px] sm:h-[160px]
                        lg:w-[200px] lg:h-[200px]
                      ">
                        <img
                          src={category.image}
                          alt={category.title}
                          onClick={() => handleNavigate(category.id)}
                          className="
                          w-full h-full object-cover rounded-full
                          border border-gray-300
                          cursor-pointer
                          hover:border-black transition
                        "
                        />
                      </div>

                      <p
                        onClick={() => handleNavigate(category.id)}
                        className="
                        mt-3 font-bold text-sm sm:text-base md:text-lg
                        cursor-pointer hover:text-black transition
                      "
                      >
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div >
        </section >

      </section>
    </>
  )
}

export default HomePage
