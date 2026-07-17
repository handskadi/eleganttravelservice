"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FaCalendarAlt, FaClock, FaArrowRight, FaUser } from "react-icons/fa";
import { useTranslations } from "next-intl";

const blogPosts = [
  {
    image: "/blog/chefchaouen-2025.jpg",
    category: "Travel Guide",
    title: "10 Reasons to Visit Chefchaouen in 2025",
    excerpt: "The blue city is more than a photogenic backdrop. Here's how to experience the authentic soul of Morocco's most beautiful mountain town.",
    date: "June 12, 2025",
    readTime: "6 min read",
    author: "Youssef Benali",
    slug: "/blog/chefchaouen-2025",
  },
  {
    image: "/blog/sahara-packing-list.jpg",
    category: "Packing Guide",
    title: "The Ultimate Sahara Desert Packing List",
    excerpt: "From merino wool base layers to sunrise alarm times — everything you need for a comfortable, unforgettable desert overnight.",
    date: "May 28, 2025",
    readTime: "8 min read",
    author: "Fatima Zahra",
    slug: "/blog/sahara-packing-list",
  },
  {
    image: "/blog/marrakech-street-food.jpg",
    category: "Food & Culture",
    title: "Best Street Food in Marrakech's Medina",
    excerpt: "Djemaa el-Fna after sunset is one of the world's great food experiences. Here's what to eat, where to find it, and what to avoid.",
    date: "May 10, 2025",
    readTime: "5 min read",
    author: "Mohamed Kadi",
    slug: "/blog/marrakech-street-food",
  },
  {
    image: "/blog/toubkal-hiking-guide.jpg",
    category: "Trekking",
    title: "Hiking Toubkal: What to Really Expect",
    excerpt: "North Africa's highest peak is achievable for fit non-climbers — but preparation is everything. Our certified guides break it down.",
    date: "April 22, 2025",
    readTime: "10 min read",
    author: "Youssef Benali",
    slug: "/blog/toubkal-hiking-guide",
  },
];

export default function RecentBlogSection() {
  const t = useTranslations("recentBlog");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-label">{t("label")}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              {t("title")}
            </h2>
            <p className="text-slate-500 max-w-lg">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 text-sm shrink-0"
          >
            {t("viewAll")}
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ el: ".ets-blog-pagination", clickable: true }}
          autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogPosts.map((post, idx) => (
            <SwiperSlide key={idx}>
              <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-slate-100 flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={post.slug}>
                    <h3 className="font-bold text-slate-800 text-base leading-snug hover:text-amber-600 transition line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <FaUser className="w-3 h-3 text-amber-400" />
                      {post.author}
                    </span>
                    <Link
                      href={post.slug}
                      className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition"
                    >
                      {t("readMore")}
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ets-blog-pagination ets-pagination mt-10 flex justify-center gap-2" />
      </div>
    </section>
  );
}
