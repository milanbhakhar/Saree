import { useState, useEffect } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiChevronDown, FiChevronRight, } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!searchOpen) return;

    const handleScroll = () => {
      setSearchOpen(false); // closes mobile search panel
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchOpen]);

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile search on ESC
  useEffect(() => {
    if (!searchOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setSearchOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-black text-white text-xs sm:text-sm overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-6 py-2">
              ✨ FESTIVE SALE: Up to 70% OFF | Free Shipping on Orders Above
              ₹999 ✨
            </div>
          ))}
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="w-full sticky top-0 z-50 border-b bg-white">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* LEFT - HAMBURGER + LOGO */}
          <div className="flex items-center gap-4">
            {/* Hamburger — visible below md */}
            <button
              className="lg:hidden text-2xl text-gray-700 hover:text-black transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-base mb:text-xl sm:text-2xl font-bold tracking-wide"
            >
              E-COMMERCE
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700 ml-8">
              <Link to="/shop-page" className="hover:text-black">
                New Arrivals
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-black">
                  Categories
                  <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-3 w-48 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

              <a href="#" className="hover:text-black">
                Sale
              </a>
            </nav>
          </div>

          {/* CENTER - SEARCH (desktop) */}
          {/* <div className="hidden lg:block flex-1 px-10">
            <div className="relative max-w-md mx-auto">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div> */}
          <SearchBar />

          {/* RIGHT - ICONS */}
          <div className="flex items-center gap-4 sm:gap-6 text-xl text-gray-700">
            {/* Mobile search icon (below lg) */}
            <button
              type="button"
              className="lg:hidden cursor-pointer hover:text-black transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => {
                setSearchOpen((v) => {
                  const next = !v;
                  if (next) setMenuOpen(false);
                  return next;
                });
              }}
            >
              <FiSearch />
            </button>
            <FiUser className="cursor-pointer hover:text-black" />

            <div
              onClick={() => navigate("/wishlist")}
              className="relative cursor-pointer"
            >
              <FiHeart className="hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            <div
              onClick={() => navigate("/shop-cart")}
              className="relative cursor-pointer"
            >
              <FiShoppingBag className="hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </div>

        {/* Mobile search panel (same SearchBar component/design) */}
        {searchOpen && (
          <>
            {/* Overlay */}
            <div
              className="lg:hidden fixed inset-0 z-[55] bg-black/30"
              onClick={() => setSearchOpen(false)}
            />

            {/* Search container */}
            <div className="lg:hidden fixed left-0 right-0 top-0 z-[56] bg-white border-b">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3">
                <SearchBar
                  wrapperClassName="block w-full relative"
                  containerClassName="relative w-full"
                  placeholder="Search products..."
                  showClose
                  onClose={() => setSearchOpen(false)}
                  autoFocus
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* ===================== OFFCANVAS ===================== */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Offcanvas Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <Link
            to="/"
            className="text-lg font-bold tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            E-COMMERCE
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-600 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-0 text-sm font-medium text-gray-700">
          <Link
            to="/shop-page"
            className="flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            New Arrivals
          </Link>

          {/* Categories Accordion */}
          <div>
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
            >
              <span>Categories</span>
              <FiChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${catOpen ? "rotate-90" : ""}`}
              />
            </button>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${catOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 mt-1 space-y-1">
                {["Women's Wear", "Men's Wear", "Accessories"].map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Sale
          </a>
        </nav>
      </div>
    </>
  );
}
