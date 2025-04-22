import Image from "next/image";
import SearchForm from "./SearchForm";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-10">
            <Image
                src="/background/hero-desert-image.webp"
                alt="Desert adventure"
                fill
                priority
                className="object-cover z-0"
            />


            {/* Overlay */}

            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />

            <div className="relative z-20 container mx-auto px-6 md:px-8 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Section */}
                    <div className="text-white space-y-5 pl-6 lg:pl-12">
                        <p className="uppercase tracking-widest text-yellow-400 text-sm">Away from monotonous life</p>
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Magical Travel</h1>
                        <p className="text-gray-200 max-w-lg">
                            Whether it’s the golden dunes or hidden medinas, Elegant Travel Service crafts adventures worth remembering.
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded uppercase text-sm">
                            Get Started
                        </button>
                    </div>

                    {/* Right Form Section */}
                    <SearchForm />
                </div>
            </div>
        </section>
    );
}
