"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaStar, FaClock, FaMountain, FaHeart, FaCartPlus,
  FaMapMarkerAlt, FaUsers, FaCheckCircle,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import AddToCartModal from "../Modals/AddToCartModal";
import { tours, categories } from "@/data/tours";
import type { Tour, Category } from "@/data/tours";
import { useApp } from "@/contexts/AppContext";
import { useTranslations } from "next-intl";

const BADGE_STYLES: Record<string, string> = {
  amber: "bg-amber-100 text-amber-800",
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  purple: "bg-purple-100 text-purple-800",
  teal: "bg-teal-100 text-teal-800",
  yellow: "bg-yellow-100 text-yellow-800",
  rose: "bg-rose-100 text-rose-800",
  red: "bg-red-100 text-red-800",
  indigo: "bg-indigo-100 text-indigo-800",
  green: "bg-green-100 text-green-800",
  slate: "bg-slate-100 text-slate-800",
  cyan: "bg-cyan-100 text-cyan-800",
};

const DIFF_STYLES: Record<string, string> = {
  Easy: "text-emerald-600 bg-emerald-50 border-emerald-100",
  Moderate: "text-amber-600 bg-amber-50 border-amber-100",
  Difficult: "text-red-600 bg-red-50 border-red-100",
};

function TourCard({ tour }: { tour: Tour }) {
  const { toggleWishlist, isWishlisted, isInCart } = useApp();
  const t = useTranslations("tours");
  const catLabels: Record<string, string> = {
    Desert:     t("catDesert"),
    Mountains:  t("catMountains"),
    Cities:     t("catCities"),
    Coastal:    t("catCoastal"),
    Activities: t("catActivities"),
    Luxury:     t("catLuxury"),
  };
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const wishlisted = isWishlisted(tour.id);
  const inCart = isInCart(tour.id);

  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  return (
    <>
      <div
        className="tour-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full cursor-pointer"
        onClick={() => router.push(`/tours/${tour.id}`)}
        role="article"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-105 transition duration-500" />

          {/* Overlay actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); toggleWishlist(tour); }}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition ${
                wishlisted ? "bg-red-500 text-white" : "bg-white/90 text-slate-400 hover:text-red-500"
              }`}
              aria-label="Toggle wishlist"
            >
              <FaHeart className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition ${
                inCart ? "bg-emerald-500 text-white" : "bg-white/90 text-slate-400 hover:text-emerald-500"
              }`}
              aria-label="Add to cart"
            >
              <FaCartPlus className="w-3.5 h-3.5" />
            </button>
          </div>

          {tour.badge && (
            <div className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full shadow ${BADGE_STYLES[tour.badgeColor || "slate"]}`}>
              {tour.badge}
            </div>
          )}

          {discount > 0 && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              -{discount}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full">
              {catLabels[tour.category] ?? tour.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <FaUsers className="w-3 h-3 text-slate-400" />
              {t("max")} {tour.maxGroupSize}
            </div>
          </div>

          <h3 className="font-bold text-slate-800 text-base mt-1.5 leading-tight line-clamp-2">{tour.title}</h3>

          <p className="flex items-center gap-1 text-xs text-slate-500 mt-1.5">
            <FaMapMarkerAlt className="w-3 h-3 text-amber-500 shrink-0" />
            {tour.location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-3 h-3 ${i < Math.floor(tour.rating) ? "text-amber-400" : "text-slate-200"}`} />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-700">{tour.rating}</span>
            <span className="text-xs text-slate-400">({tour.reviews} {t("reviews")})</span>
          </div>

          {/* Highlights */}
          <ul className="mt-3 space-y-1 flex-1">
            {tour.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                <FaCheckCircle className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* Meta */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <FaClock className="w-3 h-3 text-indigo-400" />
              {tour.duration}
            </span>
            <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${DIFF_STYLES[tour.difficulty]}`}>
              <FaMountain className="w-2.5 h-2.5" />
              {tour.difficulty}
            </span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold text-slate-900">${tour.price}</span>
                <span className="text-xs text-slate-400">/ {t("perPerson")}</span>
              </div>
              {tour.originalPrice && (
                <span className="text-xs text-slate-400 line-through">${tour.originalPrice}</span>
              )}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-amber-500/20"
            >
              {t("bookNow")}
              <HiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <AddToCartModal
        isOpen={showModal}
        tour={tour}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default function FeaturedTours() {
  const t = useTranslations("tours");
  const catLabels: Record<string, string> = {
    All:        t("catAll"),
    Desert:     t("catDesert"),
    Mountains:  t("catMountains"),
    Cities:     t("catCities"),
    Coastal:    t("catCoastal"),
    Activities: t("catActivities"),
    Luxury:     t("catLuxury"),
  };
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All"
    ? tours
    : tours.filter(t => t.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section id="tours" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">{t("sectionLabel")}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-slate-500 text-lg">
            {t("subheading")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {catLabels[cat] ?? cat}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Load More */}
        {filtered.length > 9 && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition shadow-xl text-sm"
            >
              {t("viewAll", { count: filtered.length })}
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {visible.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">{t("noTours")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
