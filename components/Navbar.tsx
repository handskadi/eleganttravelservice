"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaBell } from "react-icons/fa";

import WishlistPanel from "./WishlistPanel";
import CartPanel from "./CartPanel";
import NotificationsPanel from "./NotificationsPanel";
import UserDropdown from "./UserDropdown.tsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b border-white/20 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-black/50" : "bg-white/10"}`}>
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="ETS Logo" width={32} height={32} className="w-8 h-8" />
                    <span className="text-white text-xl font-bold">ElegantTravel</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full space-x-6 shadow-sm flex">
                        {[
                            { label: "Home", href: "#", active: true },
                            { label: "Destinations", href: "#" },
                            { label: "Experiences", href: "#" },
                            { label: "Plan Your Trip", href: "#" },
                            { label: "About", href: "#" },
                        ].map(({ label, href, active }) => (
                            <Link
                                key={label}
                                href={href}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition ${active ? "bg-white text-amber-700 shadow" : "text-white hover:text-amber-300"}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right icons */}
                <div className="flex items-center space-x-4 md:space-x-5">
                    {/* Desktop: Wishlist, Cart, Notification */}
                    <div className="flex items-center gap-4 relative">
                        {/* Wishlist */}
                        <button className="relative text-white hover:text-amber-300 transition" onClick={() => {
                            setWishlistOpen(!wishlistOpen);
                            setCartOpen(false);
                            setNotificationsOpen(false);
                        }}>
                            <FaHeart className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">2</span>
                        </button>

                        {/* Desktop only */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* Cart */}
                            <button className="relative text-white hover:text-amber-300 transition" onClick={() => {
                                setCartOpen(!cartOpen);
                                setWishlistOpen(false);
                                setNotificationsOpen(false);
                            }}>
                                <FaShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">1</span>
                            </button>

                            {/* Notifications */}
                            <button className="relative text-white hover:text-amber-300 transition" onClick={() => {
                                setNotificationsOpen(!notificationsOpen);
                                setWishlistOpen(false);
                                setCartOpen(false);
                            }}>
                                <FaBell className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">3</span>
                            </button>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="relative">
                        <button
                            type="button"
                            className="flex text-sm rounded-full focus:ring-2 focus:ring-white/50"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <Image
                                src="/profile.jpg"
                                alt="User photo"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full"
                            />
                        </button>
                        {dropdownOpen && <UserDropdown open={dropdownOpen} />}
                    </div>

                    {/* Hamburger */}
                    <button
                        type="button"
                        className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-4 space-y-4">
                    {[
                        { label: "Home", href: "#", active: true },
                        { label: "Destinations", href: "#" },
                        { label: "Experiences", href: "#" },
                        { label: "Plan Your Trip", href: "#" },
                        { label: "About", href: "#" },
                    ].map(({ label, href, active }) => (
                        <Link
                            key={label}
                            href={href}
                            className={`block w-full text-left px-3 py-2 rounded-md font-medium ${active ? "bg-amber-500 text-white" : "text-gray-800 hover:bg-amber-100"}`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Mobile icons */}
                    <div className="flex justify-around pt-4 border-t border-gray-200">
                        {/* Wishlist */}
                        <button className="relative text-gray-700 hover:text-amber-600 transition" onClick={() => setWishlistOpen(!wishlistOpen)}>
                            <FaHeart className="w-6 h-6" />
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow">2</span>
                        </button>

                        {/* Cart */}
                        <button className="relative text-gray-700 hover:text-amber-600 transition" onClick={() => setCartOpen(!cartOpen)}>
                            <FaShoppingCart className="w-6 h-6" />
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow">1</span>
                        </button>

                        {/* Notifications */}
                        <button className="relative text-gray-700 hover:text-amber-600 transition" onClick={() => setNotificationsOpen(!notificationsOpen)}>
                            <FaBell className="w-6 h-6" />
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow">3</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Panels */}
            {wishlistOpen && <WishlistPanel />}
            {cartOpen && <CartPanel />}
            {notificationsOpen && <NotificationsPanel />}
        </nav>
    );
}
