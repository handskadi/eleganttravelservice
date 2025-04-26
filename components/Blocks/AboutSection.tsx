
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8 relative">
                    {/* Left Image with floating badges */}
                    <div className="md:col-span-5 relative">
                        <div className="relative w-[90%] mx-auto">
                            <Image
                                src="/morocco-culture.webp"
                                alt="About Elegant Travel"
                                width={500}
                                height={500}
                                className="rounded-3xl shadow-lg object-cover"
                            />

                            {/* Visitor badge */}
                            <div className="absolute bottom-16 md:-left-10 -left-5 p-4 rounded-lg shadow-lg bg-white w-56 flex items-center">
                                <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-yellow-100 text-yellow-600 rounded-xl mr-3">
                                    {/* User icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 010 7.75"></path>
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Visitors</span>
                                    <p className="text-xl font-bold">4589+</p>
                                </div>
                            </div>

                            {/* Packages badge */}
                            <div className="absolute top-16 md:-right-10 -right-5 p-4 rounded-lg shadow-lg bg-white w-60 flex items-center">
                                <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-yellow-100 text-yellow-600 rounded-xl mr-3">
                                    {/* Globe icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Travel Packages</span>
                                    <p className="text-xl font-bold">50+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-7">
                        <div className="lg:ml-12">
                            <h3 className="mb-6 text-2xl md:text-3xl font-extrabold leading-tight text-gray-800">
                                Discover the Magic of Morocco <br /> with Elegant Travel Services
                            </h3>
                            <p className="text-gray-500 max-w-2xl mb-6">
                                At Elegant Travel Services, we transform every trip into a unique adventure. From the golden dunes of Merzouga to the blue alleys of Chefchaouen, we craft authentic experiences for travelers seeking inspiration, culture, and unforgettable memories.
                            </p>

                            <a
                                href="#"
                                className="inline-block px-6 py-3 text-base bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Decorative Map (background) */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10 opacity-10">
                        <Image
                            src="/background/map-plane-big.png"
                            alt="Decorative map"
                            width={600}
                            height={600}
                            className="w-96 md:w-[600px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
