"use client";

import Link from "next/link";

const priceData = [
    {
        title: "Budget-Friendly Packages",
        items: [
            { place: "Chefchaouen (2 Days)", price: 120 },
            { place: "Essaouira Day Trip", price: 90 },
            { place: "Ourika Valley (Atlas)", price: 75 },
            { place: "Fes Cultural Tour", price: 140 },
            { place: "Casablanca Highlights", price: 110 },
            { place: "Agadir Beach Relax", price: 130 },
        ],
    },
    {
        title: "Luxury Escapes",
        items: [
            { place: "Sahara Desert Glamping", price: 350 },
            { place: "Private Marrakech Tour", price: 300 },
            { place: "Atlas Mountains + Spa", price: 280 },
            { place: "Rabat Royal Circuit", price: 260 },
            { place: "Tangier VIP Experience", price: 320 },
            { place: "Zagora Desert Deluxe", price: 295 },
        ],
    },
    {
        title: "Adventure & Camping",
        items: [
            { place: "Toubkal Hiking (2N)", price: 220 },
            { place: "Sahara Camel Trek", price: 200 },
            { place: "Dades Gorges Campsite", price: 180 },
            { place: "Ait Ben Haddou Trek", price: 160 },
            { place: "Akchour Falls Hike", price: 150 },
            { place: "Nomad Desert Night", price: 210 },
        ],
    },
];

export default function PriceSection() {
    return (
        <section
            className="py-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("/background/price-bg.png")` }}
        >
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
                        We Provide Affordable Prices
                    </h2>
                    <p className="text-gray-800">
                        Explore Morocco without breaking the bank. Choose from budget tours to luxury getaways designed for every traveler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {priceData.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white/90 backdrop-blur-sm p-6 rounded shadow hover:shadow-lg transition"
                        >
                            <h4 className="text-xl font-semibold text-yellow-600 mb-4">
                                {category.title}
                            </h4>
                            <ul className="divide-y divide-gray-200">
                                {category.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex justify-between items-center py-3 text-gray-700"
                                    >
                                        <span>{item.place}</span>
                                        <Link
                                            href="#"
                                            className="bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded hover:bg-yellow-600 transition"
                                        >
                                            ${item.price}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
