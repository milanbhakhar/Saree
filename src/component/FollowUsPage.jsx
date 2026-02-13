import React from 'react';

import image1 from "../images/i1.png";
import image2 from "../images/i2.png";
import image3 from "../images/i3.png";
import image4 from "../images/i4.png";

import { FaInstagram } from "react-icons/fa";

const FollowUsPage = () => {

  const images = [image1, image2, image3, image4, image1, image2, image3, image4];
  return (
    <section className="w-full min-h-screen bg-gray-50 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-2">
            Follow Us{' '}
            <span className="font-serif italic">@luxefashion</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Get inspired by our community
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={src}
                alt={`Fashion inspiration ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Instagram Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUsPage;