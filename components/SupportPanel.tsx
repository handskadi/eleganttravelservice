"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaRegComments } from "react-icons/fa";

export default function SupportPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const hasScrolled = useRef(false);

    useEffect(() => {
        function handleScrollOnce() {
            if (hasScrolled.current) return;
            hasScrolled.current = true;

            setTimeout(() => {
                setShowBadge(true);
                audioRef.current?.play().catch(() => { });
            }, 300); // small delay after scroll
        }

        window.addEventListener("scroll", handleScrollOnce);

        return () => {
            window.removeEventListener("scroll", handleScrollOnce);
        };
    }, []);

    return (
        <>
            {/* Chat notification sound */}
            <audio ref={audioRef} src="/sounds/chat.mp3" preload="auto" />

            {/* Floating chat button */}
            <div
                className="fixed bottom-6 right-6 z-50 bg-[#6b4eff] w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#5a40e0] transition duration-300"
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowBadge(false);
                }}
            >
                <FaRegComments className="text-white w-6 h-6" />
                {showBadge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                        +1
                    </span>
                )}
            </div>

            {/* Support panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 bg-white shadow-2xl rounded-lg overflow-hidden z-40 animate-slide-up">
                    <div className="bg-[#6b4eff] p-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">Hi there 👋</h3>
                        <p className="text-sm text-indigo-100">
                            We're here to help plan your next unforgettable journey.
                        </p>
                    </div>

                    <div className="bg-white px-6 py-5 space-y-6">
                        {/* Start a conversation */}
                        <div className="space-y-3">
                            <h4 className="font-semibold">Start a conversation</h4>
                            <div className="flex gap-3">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <Image
                                            key={i}
                                            width={40}
                                            height={40}
                                            alt="support"
                                            src="/profile.jpg"
                                            className="rounded-full border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="text-gray-500">Average reply time</p>
                                    <p className="flex items-center font-medium text-[#6b4eff] gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                                        </svg>
                                        A few minutes
                                    </p>
                                </div>
                            </div>
                            <button className="bg-[#6b4eff] hover:bg-[#5a40e0] text-white w-full rounded-full py-2 flex items-center justify-center gap-2 transition">
                                <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                Send us a message
                            </button>
                        </div>

                        {/* Search field */}
                        <div>
                            <h4 className="font-semibold mb-2 text-sm">Find your answer</h4>
                            <div className="flex rounded overflow-hidden shadow">
                                <input
                                    type="text"
                                    placeholder="Search help center"
                                    className="flex-1 px-3 py-2 text-sm outline-none border border-gray-200"
                                />
                                <button className="bg-[#6b4eff] px-3 text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
