import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);


  return (
    <>

      {/* TOP AUTO SCROLL ANNOUNCEMENT BAR */}
      <div className="w-full bg-black text-white text-xs sm:text-sm overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">

          {/* First text */}
          <div className="flex items-center gap-8 px-6 py-2">
            ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above ₹999 ✨
          </div>

          {/* First text */}
          <div className="flex items-center gap-8 px-6 py-2">
            ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above ₹999 ✨
          </div>

          {/* First text */}
          <div className="flex items-center gap-8 px-6 py-2">
            ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above ₹999 ✨
          </div>

          {/* First text */}
          <div className="flex items-center gap-8 px-6 py-2">
            ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above ₹999 ✨
          </div>

          {/* First text */}
          <div className="flex items-center gap-8 px-6 py-2">
            ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above ₹999 ✨
          </div>

        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="w-full sticky top-0 z-50 border-b bg-white">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

          {/* LEFT - LOGO + HAMBURGER */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Logo */}
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
              VASTRIIKA
            </h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 ml-8">

              <a href="#" className="hover:text-black">New Arrivals</a>

              {/* 🔽 CATEGORIES DROPDOWN */}
              <div className="relative group">

                <button className="flex items-center gap-1 hover:text-black">
                  Categories
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown box */}
                <div className="absolute left-0 top-full mt-3 w-48 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                  <a
                    href="#"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-t-xl"
                  >
                    Women's Wear
                  </a>

                  <a
                    href="#"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-gray-100"
                  >
                    Men's Wear
                  </a>

                  <a
                    href="#"
                    className="block px-5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-b-xl"
                  >
                    Accessories
                  </a>

                </div>
              </div>

              <a href="#" className="hover:text-black">Sale</a>

            </nav>

          </div>

          {/* CENTER - SEARCH (hidden on very small, visible on md+) */}
          <div className="hidden md:block flex-1 px-10">
            <div className="relative max-w-md mx-auto">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* RIGHT - ICONS */}
          <div className="flex items-center gap-4 sm:gap-6 text-xl text-gray-700">
            {/* Mobile Search Icon */}

            <FiUser className="cursor-pointer hover:text-black" />
            <FiHeart className="cursor-pointer hover:text-black" />

            <div className="relative cursor-pointer">
              <FiShoppingBag className="hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </div>

        {/* 📱 MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-sm font-medium">

            <a href="#" className="block hover:text-black">New Arrivals</a>

            {/* 📱 MOBILE CATEGORIES DROPDOWN */}
            <div>
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="w-full flex items-center justify-between py-2 hover:text-black"
              >
                Categories
                <svg
                  className={`w-4 h-4 transition-transform ${catOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {catOpen && (
                <div className="pl-4 mt-2 space-y-2 ">
                  <a href="#" className="block py-1 hover:text-black">Women's Wear</a>
                  <a href="#" className="block py-1 hover:text-black">Men's Wear</a>
                  <a href="#" className="block py-1 hover:text-black">Accessories</a>
                </div>
              )}
            </div>

            <a href="#" className="block hover:text-black">Sale</a>

            {/* Mobile Search */}
            <div className="pt-3">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

          </div>
        )}

      </div>
    </>
  );
}
