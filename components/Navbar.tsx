"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./UserDropdown.tsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll and toggle background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 border-b border-white/20 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-black/50" : "bg-white/10"
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="ETS Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="text-white text-xl font-bold">ElegantTravel</span>
                </Link>

                {/* Desktop nav links */}
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
                                className={`px-3 py-1 rounded-full text-sm font-medium transition ${active
                                    ? "bg-white text-amber-700 shadow"
                                    : "text-white hover:text-amber-300"
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Profile & Icons */}
                <div className="flex items-center space-x-4 md:space-x-5">
                    {/* Icons with Badges */}
                    <div className="flex items-center gap-4 relative">
                        {/* Wishlist Icon */}
                        <button className="relative text-white hover:text-amber-300 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                                        6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 
                                        5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 
                                        6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">
                                2
                            </span>
                        </button>

                        {/* Cart Icon */}
                        <button className="relative text-white hover:text-amber-300 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 
                                        22s2-.9 2-2-.9-2-2-2zm10 
                                        0c-1.1 0-1.99.9-1.99 2S15.9 22 17 
                                        22s2-.9 2-2-.9-2-2-2zM7.16 
                                        14h9.93c.75 0 1.41-.41 
                                        1.75-1.03l3.58-6.49a1 
                                        1 0 00-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                        7.59-1.35 2.44c-.16.28-.25.61-.25.97 
                                        0 1.1.9 2 2 2h12v-2H7.42c-.14 
                                        0-.25-.11-.25-.25l.03-.12L7.16 14z"/>
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">
                                1
                            </span>
                        </button>

                        {/* Notification Icon */}
                        <button className="relative text-white hover:text-amber-300 transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 
                                    2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 
                                    1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 
                                    11v5l-1.29 1.29a1 1 0 00.7 1.71h14.18a1 1 0 
                                    00.7-1.71L18 16z"/>
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow">
                                3
                            </span>
                        </button>
                    </div>

                    {/* Profile Dropdown */}
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

                    {/* Hamburger (mobile only) */}
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

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-4 space-y-2">
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
                            className={`block w-full text-left px-3 py-2 rounded-md font-medium ${active
                                ? "bg-amber-500 text-white"
                                : "text-gray-800 hover:bg-amber-100"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
