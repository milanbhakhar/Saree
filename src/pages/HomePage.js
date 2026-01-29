import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Slider from 'react-slick';

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";

function HomePage() {

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
      id: 1,
      title: "Suits",
      subtitle: "Sophisticated & Elegant",
      image: image4
    },
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
      id: 1,
      title: "Suits",
      subtitle: "Sophisticated & Elegant",
      image: image4
    }
  ];

  return (
    <>
      {/* Home Page Content */}
      <HeroBanner />

      {/* Home Page Content */}
      <section className="w-full bg-gray-100 px-4 sm:px-8 lg:px-16 py-14">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">
          Shop by Category
        </h2>

        {/* Slider */}
        <Slider
          dots={false}
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          responsive={[
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
        >
          {categories.map((item) => (
            <div key={item.id} className="px-3">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] sm:h-[320px] lg:h-[380px] w-full object-cover 
                     transform transition-transform duration-500 
                     group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl sm:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="opacity-90 mt-1">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </section>
    </>
  )
}

export default HomePage
