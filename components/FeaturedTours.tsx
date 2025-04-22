"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AddToCartModal from "./AddToCartModal";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
    FaCheckCircle,
    FaClock,
    FaMountain,
    FaStar,
    FaHeart,
    FaCartPlus,
    FaRegHeart,
} from "react-icons/fa";

// ✅ Define the Tour type
type Tour = {
    title: string;
    image: string;
    location: string;
    price: number;
    rating: number;
    reviews: number;
    duration: string;
    difficulty: string;
    highlights: string[];
    badge: string;
    isWishlisted: boolean;
};

const tours: Tour[] = [
    {
        title: "Sahara Adventure",
        image: "/destinations/sahara.webp",
        location: "Merzouga, Morocco",
        price: 299,
        rating: 4.9,
        reviews: 128,
        duration: "3 Days",
        difficulty: "Moderate",
        highlights: ["Camel Trek", "Sandboarding", "Sunset View"],
        badge: "Featured",
        isWishlisted: true,
    },
    {
        title: "Hot Air Balloon",
        image: "/destinations/hot-air-baloon-marrakech.webp",
        location: "Marrakech, Morocco",
        price: 270,
        rating: 4.8,
        reviews: 105,
        duration: "Half Day",
        difficulty: "Easy",
        highlights: ["Scenic Roads", "Local Villages", "Mountain Pass"],
        badge: "Top Seller",
        isWishlisted: true,
    },
    {
        title: "Chefchaouen Charm",
        image: "/destinations/chaouen.webp",
        location: "Chefchaouen, Morocco",
        price: 180,
        rating: 5.0,
        reviews: 142,
        duration: "1 Day",
        difficulty: "Difficult",
        highlights: ["Blue Streets", "Local Culture", "Photography Spots"],
        badge: "New",
        isWishlisted: false,
    },
    {
        title: "Atlas Road Trip",
        image: "/destinations/atlas.webp",
        location: "Tizi-n-Tichka, Morocco",
        price: 270,
        rating: 4.8,
        reviews: 105,
        duration: "2 Days",
        difficulty: "Easy",
        highlights: ["Scenic Roads", "Local Villages", "Mountain Pass"],
        badge: "Top Seller",
        isWishlisted: false,
    },
];

export default function FeaturedToursSection() {
    const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

    return (
        <section className="bg-[#f8f9ff] py-20">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">🌟 Featured Tours</h2>
                    <p className="text-gray-500">Hand-picked experiences loved by our travelers</p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: ".custom-featured-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    autoplay={{ delay: 5000 }}
                    loop
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {tours.map((tour, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
                                <div className="relative w-full h-60">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Icons */}
                                    <div className="absolute top-2 left-2 flex gap-2">
                                        <button
                                            aria-label="Wishlist"
                                            className="relative p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition"
                                        >
                                            {tour.isWishlisted ? (
                                                <FaHeart className="text-red-500 text-sm" />
                                            ) : (
                                                <>
                                                    <FaRegHeart className="text-red-500 text-sm" />
                                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow">
                                                        +
                                                    </span>
                                                </>
                                            )}
                                        </button>

                                        <button
                                            aria-label="Add to cart"
                                            className="p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition"
                                            onClick={() => setSelectedTour(tour)}
                                        >
                                            <FaCartPlus className="text-emerald-500 text-sm" />
                                        </button>
                                    </div>

                                    <span className="absolute top-2 right-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-md shadow-sm text-[11px] font-semibold">
                                        {tour.badge}
                                    </span>
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{tour.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{tour.location}</p>
                                    <div className="flex items-center text-sm text-gray-600 mb-3 gap-2">
                                        <FaStar className="text-yellow-400" />
                                        <span>{tour.rating} ({tour.reviews} reviews)</span>
                                    </div>
                                    <ul className="text-sm text-gray-700 space-y-2 mb-4">
                                        {tour.highlights.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FaCheckCircle className="text-gray-300" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-2">
                                            <FaClock className="text-indigo-500" />
                                            {tour.duration}
                                        </span>
                                        <span className={`flex items-center gap-2 font-medium ${getDifficultyColor(tour.difficulty)}`}>
                                            <FaMountain />
                                            {tour.difficulty}
                                        </span>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="text-xl font-bold text-gray-800">${tour.price}</span>
                                        <button className="bg-yellow-500 text-white text-sm px-4 py-2 rounded hover:bg-yellow-600 transition shadow-sm flex items-center gap-2">
                                            <FaCartPlus className="text-xs" />
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <AddToCartModal
                    isOpen={!!selectedTour}
                    tour={selectedTour}
                    onClose={() => setSelectedTour(null)}
                />

                <div className="custom-featured-pagination mt-10 flex justify-center gap-3"></div>
            </div>

            <style jsx global>{`
                .custom-featured-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #e2e2e2;
                    opacity: 1;
                    border-radius: 9999px;
                    transition: background 0.3s ease;
                }
                .custom-featured-pagination .swiper-pagination-bullet-active {
                    background: #fbbf24;
                }
            `}</style>
        </section>
    );
}

function getDifficultyColor(level: string) {
    switch (level.toLowerCase()) {
        case "easy":
            return "text-green-500";
        case "moderate":
            return "text-orange-500";
        case "difficult":
            return "text-red-500";
        default:
            return "text-gray-500";
    }
}
