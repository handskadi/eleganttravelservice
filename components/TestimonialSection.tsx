"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Harriet Maxwell",
        image: "/testimonials/user.jpg",
        content:
            "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
        rating: 4,
    },
    {
        name: "Carolyn Craig",
        image: "/testimonials/user.jpg",
        content:
            "A purpose is the eternal condition for success. Every former traveler can tell you how magical Morocco can be when guided by passionate locals.",
        rating: 3,
    },
    {
        name: "James Bennet",
        image: "/testimonials/user.jpg",
        content:
            "Elegant Travel Service made our Sahara trip unforgettable. The guides were excellent, and everything was perfectly organized.",
        rating: 5,
    },
    {
        name: "Sofia Lahlou",
        image: "/testimonials/user.jpg",
        content:
            "The Chefchaouen walking tour and Atlas mountain day trip were both amazing. The team is very friendly and responsive.",
        rating: 5,
    },
];

export default function TestimonialSection() {
    return (
        <section className="bg-[#f8f9ff] py-20">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Testimonial <span className="text-yellow-500">from our Clients</span>
                    </h2>
                    <p className="text-gray-500">
                        Honest experiences from travelers who explored Morocco with Elegant Travel Service.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    autoplay={{ delay: 5000 }}
                    loop
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="h-full flex flex-col bg-white rounded shadow p-6 min-h-[280px]">
                                <div className="flex gap-4 items-start mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-600">{testimonial.content}</p>
                                        <h4 className="font-semibold text-black mt-4">{testimonial.name}</h4>
                                        <div className="flex gap-1 mt-2 text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={i < testimonial.rating ? "" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto" /> {/* Spacer to push content evenly */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-pagination mt-10 flex justify-center gap-3"></div>
            </div>

            <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e2e2e2;
          opacity: 1;
          border-radius: 9999px;
          transition: background 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #fbbf24; /* yellow-400 */
        }
      `}</style>
        </section>
    );
}
