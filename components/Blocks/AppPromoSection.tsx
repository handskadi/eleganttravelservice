import Image from "next/image";

export default function AppPromoSection() {
    return (
        <section className="py-16 bg-gray-100 text-gray-900">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
                {/* Text Block */}
                <div>
                    <p className="text-sm font-medium tracking-widest uppercase text-gray-600 mb-2">
                        Your next adventure in your pocket
                    </p>
                    <h2 className="text-3xl font-bold leading-tight">ETS TRAVEL APP</h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        Book desert tours, mountain escapes, or seaside stays — all in one place. Download our app and explore Morocco with ease and confidence.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                    {/* Google Play */}
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white shadow hover:opacity-90 transition"
                    >
                        <Image
                            src="/icons/google-play-badge.png"
                            alt="Get it on Google Play"
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs">GET IT ON</span>
                            <span className="font-semibold text-sm">Google Play</span>
                        </span>
                    </a>

                    {/* App Store */}
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white shadow hover:opacity-90 transition"
                    >
                        <Image
                            src="/icons/app-store-badge.svg"
                            alt="Download on the App Store"
                            width={24}
                            height={24}
                            className="w-8 h-8"
                        />
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs">Download on the</span>
                            <span className="font-semibold text-sm">App Store</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
