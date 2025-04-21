"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./UserDropdown.tsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
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

                {/* Profile & Hamburger */}
                <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Profile shown on both desktop and mobile */}
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

            {/* Mobile menu (toggle) */}
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
