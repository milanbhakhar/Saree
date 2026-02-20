import { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

// ── Sample product data (replace with your real data / API call) ──
const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Floral Printed Kurti",
        category: "Women's Wear",
        price: "₹599",
        image:
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=80&q=70",
    },
    {
        id: 2,
        name: "Men's Slim Fit Chinos",
        category: "Men's Wear",
        price: "₹899",
        image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=80&q=70",
    },
    {
        id: 3,
        name: "Embroidered Dupatta",
        category: "Accessories",
        price: "₹349",
        image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=80&q=70",
    },
    {
        id: 4,
        name: "Cotton Anarkali Dress",
        category: "Women's Wear",
        price: "₹1,199",
        image:
            "https://images.unsplash.com/photo-1594938298603-c8148c4f8993?w=80&q=70",
    },
    {
        id: 5,
        name: "Men's Linen Shirt",
        category: "Men's Wear",
        price: "₹749",
        image:
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=80&q=70",
    },
    {
        id: 6,
        name: "Oxidised Silver Earrings",
        category: "Accessories",
        price: "₹249",
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&q=70",
    },
    {
        id: 7,
        name: "Bandhani Saree",
        category: "Women's Wear",
        price: "₹2,499",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&q=70",
    },
    {
        id: 8,
        name: "Men's Jogger Pants",
        category: "Men's Wear",
        price: "₹649",
        image:
            "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=80&q=70",
    },
];

export default function SearchBar({
    wrapperClassName = "hidden lg:block flex-1 px-10 relative",
    containerClassName = "relative max-w-md mx-auto",
    autoFocus = false,
    showClose = false,
    onClose,
    placeholder = "Search for products...",
} = {}) {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [results, setResults] = useState([]);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleScroll = () => {
            setOpen(false);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]);

    // Filter products on query change
    useEffect(() => {
        if (query.trim() === "") {
            setResults(ALL_PRODUCTS);
        } else {
            const q = query.toLowerCase();
            setResults(
                ALL_PRODUCTS.filter(
                    (p) =>
                        p.name.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q),
                ),
            );
        }
    }, [query]);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!autoFocus) return;
        const t = setTimeout(() => inputRef.current?.focus(), 0);
        return () => clearTimeout(t);
    }, [autoFocus]);

    function handleClose() {
        setOpen(false);
        setQuery("");
        onClose?.();
    }

    return (
        <div ref={wrapperRef} className={wrapperClassName}>
            <div className={containerClassName}>
                {/* Input */}
                <div className={showClose ? "flex items-center gap-3" : "block"}>
                    <div className="relative flex-1">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            placeholder={placeholder}
                            className={`w-full border py-2 pl-10 pr-4 text-sm focus:outline-none ${showClose && open ? "rounded-t-lg rounded-b-none" : "rounded-lg"
                                }`}
                            onFocus={() => setOpen(true)}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setOpen(true);
                            }}
                        />
                        {/* ── DROPDOWN ── (anchored to input width, not the close button) */}
                        {open && (
                            <div
                                className={`absolute left-0 right-0 ${showClose ? "top-full" : "top-[calc(100%+8px)]"
                                    } bg-white border shadow-xl z-[200] overflow-hidden ${showClose ? "rounded-b-xl rounded-t-none" : "rounded-xl"
                                    }`}
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-b bg-gray-50">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                        {query ? `Results for "${query}"` : "All Products"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {results.length} found
                                    </span>
                                </div>

                                {/* Product list */}
                                <ul className="max-h-72 overflow-y-auto divide-y scrollbar-thin divide-gray-50">
                                    {results.length > 0 ? (
                                        results.map((product) => (
                                            <li key={product.id}>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                                                    onClick={() => {
                                                        setOpen(false);
                                                        setQuery("");
                                                    }}
                                                >
                                                    {/* Product image */}
                                                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border bg-gray-100">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                                        />
                                                    </div>

                                                    {/* Product info */}
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-800 truncate group-hover:text-black">
                                                            {product.name}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            {product.category}
                                                        </p>
                                                    </div>

                                                    {/* Price */}
                                                    <span className="text-sm font-semibold text-gray-800 flex-shrink-0">
                                                        {product.price}
                                                    </span>
                                                </a>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-6 text-center text-sm text-gray-400">
                                            No products found for{" "}
                                            <span className="font-medium text-gray-600">
                                                "{query}"
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {showClose && (
                        <button
                            type="button"
                            className="text-2xl text-gray-700 hover:text-black transition-colors"
                            aria-label="Close search"
                            onClick={handleClose}
                        >
                            <FiX />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
