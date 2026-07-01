"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Solo Traveler, UK",
    initials: "SM",
    color: "#f59e0b",
    content: "The Sahara 3-day trip was the most profound experience of my life. Sleeping under the stars with only silence and sand around you — no words can describe it. ETS organised every detail perfectly.",
    rating: 5,
    tour: "Sahara 3-Day Adventure",
  },
  {
    name: "Alexandre Lebrun",
    role: "Couple Traveler, France",
    initials: "AL",
    color: "#6b4eff",
    content: "We did the hot air balloon for our anniversary and it was absolutely magical. The Atlas Mountains at sunrise, the champagne toast — every detail was handled with such care. 10/10.",
    rating: 5,
    tour: "Hot Air Balloon Marrakech",
  },
  {
    name: "James & Priya Bennett",
    role: "Family, Australia",
    initials: "JB",
    color: "#10b981",
    content: "Travelling with two kids can be stressful but ETS made it seamless. The family-friendly itinerary through Fes and Chefchaouen was perfect — the kids still talk about the blue city.",
    rating: 5,
    tour: "Chefchaouen Blue Pearl",
  },
  {
    name: "Sofia Bergmann",
    role: "Photographer, Germany",
    initials: "SB",
    color: "#ef4444",
    content: "As a travel photographer I have very specific needs. My ETS guide knew every golden-hour spot, every hidden alleyway, every authentic local moment. My Morocco portfolio is my best work.",
    rating: 5,
    tour: "Atlas Mountains Trek",
  },
  {
    name: "Omar Al-Rashidi",
    role: "Business Traveler, UAE",
    initials: "OA",
    color: "#0ea5e9",
    content: "I booked the private riad experience for a corporate retreat. The team handled everything — exclusive medina tours, private chef, boardroom setup. Completely exceeded expectations.",
    rating: 5,
    tour: "Private Riad Experience",
  },
];

export default function TestimonialSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t("label")}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".ets-testimonial-pagination" }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="h-auto pb-2">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col border border-slate-100">
                <FaQuoteLeft className="text-amber-200 w-8 h-8 mb-4" />

                <p className="text-slate-600 text-sm leading-relaxed flex-1">{testimonial.content}</p>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? "text-amber-400" : "text-slate-200"}`} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: testimonial.color }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full font-medium">
                      {testimonial.tour}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ets-testimonial-pagination ets-pagination mt-10 flex justify-center gap-2" />
      </div>
    </section>
  );
}
