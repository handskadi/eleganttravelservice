"use client";

import Image from "next/image";
import Link from "next/link";

const destinations = [
    {
        title: "Sahara Adventure",
        location: "Merzouga, Morocco",
        price: 180,
        image: "/destinations/sahara.webp",
    },
    {
        title: "Blue Streets",
        location: "Chefchaouen, Morocco",
        price: 140,
        image: "/destinations/chefchaouen.webp",
    },
    {
        title: "Atlas Mountains",
        location: "Imlil, Morocco",
        price: 220,
        image: "/destinations/atlas.webp",
    },
];

export default function PopularDestinationsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
                    <p className="text-gray-500">
                        Discover Morocco’s top travel experiences—from desert safaris and blue towns to scenic mountain escapes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, idx) => (
                        <div key={idx} className="relative rounded overflow-hidden shadow group">
                            <div className="relative w-full h-72">
                                <Image
                                    src={dest.image}
                                    alt={dest.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.6)] transition" />
                            </div>
                            <div className="absolute top-4 right-4">
                                <Link
                                    href="#"
                                    className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded shadow hover:bg-yellow-600 transition"
                                >
                                    ${dest.price}
                                </Link>
                            </div>
                            <div className="bg-white p-5 relative z-10">
                                <h4 className="text-lg font-semibold text-gray-800 mb-1">{dest.title}</h4>
                                <p className="text-gray-500 text-sm">{dest.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
