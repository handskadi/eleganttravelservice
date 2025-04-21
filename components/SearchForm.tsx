"use client";

import { useState } from "react";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaUserFriends,
    FaPlaneDeparture,
    FaPlaneArrival,
    FaHotel,
} from "react-icons/fa";

const tabs = ["Holidays", "Hotels", "Flights"] as const;
type Tab = typeof tabs[number];

export default function SearchForm() {
    const [activeTab, setActiveTab] = useState<Tab>("Holidays");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const renderFields = () => {
        switch (activeTab) {
            case "Holidays":
                return (
                    <>
                        <InputField icon={<FaMapMarkerAlt />} placeholder="Destination (e.g. Marrakech)" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Start Date" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Return Date" />
                        <CounterInput label="Adults" value={adults} onChange={(val) => setAdults(Math.max(1, val))} />
                        <CounterInput label="Children" value={children} onChange={(val) => setChildren(Math.max(0, val))} />
                        <InputField icon={<FaUserFriends />} placeholder="Travel Type (e.g. Adventure, Romantic)" />
                    </>
                );

            case "Hotels":
                return (
                    <>
                        <InputField icon={<FaHotel />} placeholder="City or Region" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Check-in" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Check-out" />
                        <CounterInput label="Adults" value={adults} onChange={(val) => setAdults(Math.max(1, val))} />
                        <CounterInput label="Children" value={children} onChange={(val) => setChildren(Math.max(0, val))} />
                        <InputField icon={<FaUserFriends />} placeholder="Room Type (e.g. Deluxe, Suite)" />
                    </>
                );

            case "Flights":
                return (
                    <>
                        <InputField icon={<FaPlaneDeparture />} placeholder="From (City / Airport)" />
                        <InputField icon={<FaPlaneArrival />} placeholder="To (City / Airport)" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Departure Date" />
                        <InputField icon={<FaCalendarAlt />} type="date" placeholder="Return Date" />
                        <CounterInput label="Adults" value={adults} onChange={(val) => setAdults(Math.max(1, val))} />
                        <CounterInput label="Children" value={children} onChange={(val) => setChildren(Math.max(0, val))} />
                    </>
                );
        }
    };

    return (
        <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-lg border border-white/30 p-6 w-full max-w-md mx-auto">
            {/* Tab Buttons */}
            <div className="flex mb-6 border-b border-white/30">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`flex-1 text-sm font-semibold uppercase tracking-wide py-2 text-center transition ${activeTab === tab
                            ? "text-yellow-500 border-b-2 border-yellow-500"
                            : "text-white/70 hover:text-yellow-500"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <form className="space-y-4">
                {renderFields()}

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded text-sm tracking-wide"
                >
                    Search {activeTab}
                </button>
            </form>
        </div>
    );
}

// Icon Input Field
function InputField({
    icon,
    placeholder,
    type = "text",
}: {
    icon: React.ReactNode;
    placeholder: string;
    type?: string;
}) {
    return (
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 text-sm text-gray-800 bg-white/60 border border-white/40 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
        </div>
    );
}

// Counter with + / –
function CounterInput({
    label,
    value,
    onChange,
}: {
    label: string;
    value: number;
    onChange: (val: number) => void;
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-white mb-1">{label}</label>
            <div className="flex items-center justify-between bg-white/60 border border-white/40 rounded px-3">
                <button
                    type="button"
                    onClick={() => onChange(value - 1)}
                    className="text-xl font-bold px-3 py-1 text-gray-700 hover:text-yellow-600"
                >
                    –
                </button>
                <span className="text-sm text-gray-800">{value}</span>
                <button
                    type="button"
                    onClick={() => onChange(value + 1)}
                    className="text-xl font-bold px-3 py-1 text-gray-700 hover:text-yellow-600"
                >
                    +
                </button>
            </div>
        </div>
    );
}
