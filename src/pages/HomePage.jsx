import React, { useState, useEffect, useRef } from 'react'

import HeroBanner from '../component/HeroBanner'
import ShopByCategoryPage from '../component/ShopByCategoryPage'
import TrendingNow from '../component/TrendingPage'
import ReelsShopLook from '../component/ReelsShopLook'
import BestSellerPage from '../component/BestSellerPage'
import FollowUsPage from '../component/FollowUsPage'



function HomePage() {

  return (
    <>

      {/* -*-*-*-*-* 1. Hero Banner -*-*-*-*-* */}
      <HeroBanner />

      {/* -*-*-*-*-* 2. Shop by Category -*-*-*-*-* */}
      <ShopByCategoryPage />

      {/* -*-*-*-*-* 3. Trending Now -*-*-*-*-* */}
      <TrendingNow />

      {/* 4. Shop the Look Reels */}
      <ReelsShopLook />

      {/* 5. Flash Sale */}
      <div className="w-full flex justify-center px-4 sm:px-8 lg:px-20 mx-auto py-10 sm:py-12">
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

      {/* -*-*-*-*-* 6. Best Sellers -*-*-*-*-* */}
      <BestSellerPage />

      {/* -*-*-*-*-* 7. Follow Us -*-*-*-*-* */}
      <FollowUsPage />

    </>
  )
}

export default HomePage
