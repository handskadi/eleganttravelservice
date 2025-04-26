"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        image: "/blog/post1.webp",
        title: "Low Cost Advertising",
        tags: ["Travel", "Life Style"],
        excerpt: "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.",
        date: "31st January,2018",
    },
    {
        image: "/blog/post2.webp",
        title: "Creative Outdoor Ads",
        tags: ["Travel", "Life Style"],
        excerpt: "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.",
        date: "31st January,2018",
    },
    {
        image: "/blog/post3.webp",
        title: "It's Classified How To Utilize Free",
        tags: ["Travel", "Life Style"],
        excerpt: "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.",
        date: "31st January,2018",
    },
    {
        image: "/blog/post4.webp",
        title: "Travel destination for 2025",
        tags: ["Travel", "Life Style"],
        excerpt: "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.",
        date: "31st January,2018",
    },
];

export default function RecentBlogSection() {
    return (
        <section className="py-20 recent-blog-area px-4 sm:px-10 lg:px-20">
            <div className="max-w-screen-xl mx-auto">
                {/* Section Title */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Latest <span className="text-amber-500">from Our Blog</span>
                    </h1>
                    <p className="text-gray-500">
                        With stories from around the world, discover tips, destinations, and inspiration for your next travel journey.
                    </p>
                </div>

                {/* Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        el: ".custom-swiper-pagination",
                        clickable: true,
                    }}
                    autoplay={{ delay: 4000 }}
                    loop
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogPosts.map((post, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="h-full flex flex-col bg-white shadow-md rounded overflow-hidden">
                                <div className="relative w-full h-56">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="details p-5 flex flex-col flex-1">
                                    <div className="tags mb-3 flex gap-2 text-sm">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-sm text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href="#">
                                        <h4 className="text-lg font-semibold hover:text-amber-500 transition">
                                            {post.title}
                                        </h4>
                                    </Link>
                                    <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                                    <h6 className="text-xs text-gray-400 mt-auto">{post.date}</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styled pagination dots */}
                <div className="custom-swiper-pagination mt-12 flex justify-center gap-2" />
            </div>

            {/* Pagination Dot Styles */}
            <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #fcd34d; /* Tailwind amber-300 */
          opacity: 0.5;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #f59e0b; /* Tailwind amber-500 */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
        </section>
    );
}
