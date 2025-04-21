"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Flights", "Hotels", "Holidays"] as const;
type Tab = typeof tabs[number];

export default function Hero() {
    const [activeTab, setActiveTab] = useState<Tab>("Holidays");

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-10">
            {/* Background Image */}
            <Image
                src="/hero-desert-image.webp"
                alt="Beach travel background"
                fill
                priority
                className="object-cover z-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left content (text section) */}
                    <div className="text-white space-y-5 pl-6 lg:pl-12">
                        <p className="uppercase tracking-widest text-yellow-400 text-sm">
                            Away from monotonous life
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                            Magical Travel
                        </h1>
                        <p className="text-gray-200 max-w-lg">
                            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $0.17 each.
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded uppercase text-sm">
                            Get Started
                        </button>
                    </div>

                    {/* Right content (form section) */}
                    <div className="w-full">
                        <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-lg border border-white/30 p-6 mx-auto w-full max-w-md">
                            {/* Tab buttons */}
                            <div className="flex mb-6 border-b border-white/30">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className={`flex-1 text-sm font-semibold uppercase tracking-wide py-2 px-1 text-center transition ${activeTab === tab
                                            ? "text-yellow-500 border-b-2 border-yellow-500"
                                            : "text-white/70 hover:text-yellow-500"
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic Form Fields */}
                            <form className="space-y-4">
                                {["From", "To", "Start", "Return", "Adults", "Child"].map((placeholder) => (
                                    <input
                                        key={placeholder}
                                        type={
                                            placeholder === "Start" || placeholder === "Return"
                                                ? "date"
                                                : placeholder === "Adults" || placeholder === "Child"
                                                    ? "number"
                                                    : "text"
                                        }
                                        placeholder={placeholder}
                                        className="w-full border border-white/40 bg-white/60 text-gray-800 placeholder-gray-500 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                ))}

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded text-sm tracking-wide"
                                >
                                    Search {activeTab}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
