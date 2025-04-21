"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0b0c2a] text-white px-6 py-16 text-sm">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">ABOUT ETS</h6>
                    <p className="text-gray-400">
                        Elegant Travel Service offers unforgettable journeys across Morocco and beyond.
                        From the dunes of the Sahara to the coasts of Agadir, we craft tailor-made travel
                        experiences for adventurers, romantics, and explorers alike.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">QUICK LINKS</h6>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Destinations</Link></li>
                            <li><Link href="#">Packages</Link></li>
                            <li><Link href="#">Experiences</Link></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><Link href="#">Testimonials</Link></li>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">NEWSLETTER</h6>
                    <p className="text-gray-400 mb-4">
                        Subscribe for curated travel inspiration, exclusive offers, and destination highlights delivered monthly.
                    </p>
                    <form
                        action="https://mohamedkadi.com"
                        method="get"
                        target="_blank"
                        className="flex"
                    >
                        <input
                            type="email"
                            name="EMAIL"
                            required
                            placeholder="Email Address"
                            className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white focus:outline-none"
                        />
                        <button type="submit" className="bg-yellow-500 px-4 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.94 2.94a1.5 1.5 0 012.12 0L10 7.88l4.94-4.94a1.5 1.5 0 012.12 2.12L12.12 10l4.94 4.94a1.5 1.5 0 01-2.12 2.12L10 12.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.12L7.88 10 2.94 5.06a1.5 1.5 0 010-2.12z" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* InstaFeed */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">INSTAFEED</h6>
                    <div className="grid grid-cols-4 gap-2">
                        {[...Array(8)].map((_, i) => (
                            <Image
                                key={i}
                                src={`/imgplaceholder.webp`}
                                alt={`insta ${i}`}
                                width={60}
                                height={60}
                                className="object-cover w-14 h-14"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center text-gray-500">
                    <p className="text-center lg:text-left">
                        © {new Date().getFullYear()} Elegant Travel Service. All rights reserved. Built with
                        <span className="text-yellow-500 mx-1">♥</span>
                        by <Link href="https://mohamedkadi.com" className="text-yellow-500">MKWebs</Link>
                    </p>
                    <div className="flex space-x-4 mt-4 lg:mt-0 text-xl">
                        <Link href="#" className="hover:text-yellow-500 transition"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-yellow-500 transition"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-yellow-500 transition"><FaWhatsapp /></Link>
                        <Link href="#" className="hover:text-yellow-500 transition"><FaEnvelope /></Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
